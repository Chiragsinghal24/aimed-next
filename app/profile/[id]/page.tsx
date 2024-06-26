import { CustomUserProfile } from "@/components/custom-user-profile";

export default function CustomProfile({params}:{
  params: {
    id: string;
  }
}) {
  return <CustomUserProfile id={params.id} />
}