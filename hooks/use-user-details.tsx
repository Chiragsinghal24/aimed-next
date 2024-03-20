import { db, getFile, uploadFile } from "@/lib/appwrite";
import { useEffect, useState } from "react";
import { toast } from "sonner";

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
  const [report, setReport] = useState<File | null>(null);
  const [prescription, setPrescription] = useState<File | null>(null);
  const [reports, setReports] = useState<{ url: URL; preview: URL }[] | null>(
    null
  );
  const [prescriptions, setPrescriptions] = useState<
    { url: URL; preview: URL }[] | null
  >(null);
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
      const reports = Promise.all(
        (data?.reports || []).map((reportId: string) => getFile(reportId))
      );
      const prescriptions = Promise.all(
        (data?.prescriptions || []).map((prescriptionId: string) =>
          getFile(prescriptionId)
        )
      );
      const [reportData, prescriptionData] = await Promise.all([
        reports,
        prescriptions,
      ]);
      setReports(reportData);
      setPrescriptions(prescriptionData);
      return data;
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateUserDetails = async (data: Partial<UserDetails>) => {
    try {
      if (!emailAddress) {
        return;
      }
      setLoading(true);
      const exists = await getUserDetails();
      if (report) {
        const reportRes = await uploadFile(report!);
        if (reportRes?.$id) {
          data.reports = [...(exists?.reports || []), reportRes?.$id];
        }
      }
      if (prescription) {
        const prescriptionRes = await uploadFile(prescription!);
        if (prescriptionRes?.$id) {
          data.prescriptions = [
            ...(exists?.prescriptions || []),
            prescriptionRes?.$id,
          ];
        }
      }
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
      toast("Profile updated successfully");
      getUserDetails();
    } catch (error) {
      console.log(error);
      toast("Failed to update profile");
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
    setReport,
    setPrescription,
    reports,
    prescriptions,
  };
}
