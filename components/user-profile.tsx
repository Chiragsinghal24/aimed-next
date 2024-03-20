"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from '@clerk/nextjs';

export function UserProfile() {
  const {user} = useUser();
  return (
    <form className="max-w-6xl w-full pt-18 mt-24 mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage alt="Profile Picture" src={user?.imageUrl} />
          <AvatarFallback>{user?.firstName ? (user?.firstName?.[0]+user?.lastName?.[0]): ''}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold leading-tight">{user?.firstName + ' ' + user?.lastName}</h1>
          <div className="mt-1 flex flex-wrap items-center text-sm text-gray-600">
            <Badge className="mr-2">
              PRO
            </Badge>
            <span className="mr-2">75 kg</span>
            <span className="mr-2">180 cm</span>
            <span className="mr-2">Vision: 6/6</span>
            <span>No Major Disease</span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-medium">Occupation/Earning</h2>
        <p className="mt-1 text-gray-700">Software Engineer / $80,000 per year</p>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-medium">Medical History</h2>
        <div className="mt-2 grid grid-cols-3 gap-4" />
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-medium">Prescriptions</h2>
        <div className="mt-2 grid grid-cols-2 gap-4" />
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-medium">Social</h2>
        <div className="mt-2 space-y-2">
          <Input placeholder="Twitter handle" />
          <Input placeholder="LinkedIn profile" />
          <Input placeholder="Facebook page" />
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-medium">Other Details</h2>
        <Textarea className="mt-2" placeholder="Additional information about the patient." />
      </div>
    </form>
  )
}
