import { db } from "@/lib/appwrite";
import { useEffect, useState } from "react";

interface UserDetails {
  weight: number | null;
  height: number | null;
  vision: string | null;
  bloodGroup: string | null;
  majorDisease: string | null;
  occupation: string | null;
  income: string | null;
  reports: string[] | null;
  prescriptions: string[] | null;
  phoneNumber: string | null;
  instagram: string | null;
  other: string | null;
}

export default function useUserDetails(emailAddress: string | undefined) {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const getUserDetails = async () => {
    try {
      if (!emailAddress) {
        return;
      }
      const data = await db.getDocument(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
        emailAddress
      );
      setUserDetails(data as unknown as UserDetails);
      return data;
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateUserDetails = async (
    data: Partial<UserDetails>
  ) => {
    try {
      if (!emailAddress) {
        return;
      }
      setLoading(true);
      const exists = await getUserDetails();
      if (exists?.$id) {
        await db.updateDocument(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
          process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
          emailAddress,
          data
        );
      } else {
        await db.createDocument(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
          process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!,
          emailAddress,
          data
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, [emailAddress]);
  return {
    updateUserDetails,
    userDetails,
    loading,
  };
}
