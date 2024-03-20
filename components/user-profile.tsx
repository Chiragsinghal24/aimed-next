"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Instagram, Mail, Phone } from "lucide-react";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

export function UserProfile() {
  const { user } = useUser();
  return (
    <form className="max-w-6xl w-full pt-18 mt-24 mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage alt="Profile Picture" src={user?.imageUrl} />
          <AvatarFallback>
            {user?.firstName ? user?.firstName?.[0] + user?.lastName?.[0] : ""}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="text-2xl w-fit relative font-semibold leading-tight">
            {user?.firstName + " " + user?.lastName}
            <Badge className="absolute top-1 -right-14">PRO</Badge>
          </h1>
          <div className="mt-1 flex flex-wrap gap-x-3 items-center text-sm text-gray-600">
            <Input
              type="number"
              className="max-w-36 h-12 text-lg"
              placeholder="Weight(kg)"
            />
            <Input
              type="number"
              className="max-w-36 h-12 text-lg"
              placeholder="Height(cm)"
            />
            <Input
              className="max-w-36 h-12 text-lg"
              placeholder="Vision(6/6)"
              pattern="[0-9]{1,2}/[0-9]{1,2}"
              title="Enter in the format 6/6"
            />
            <Input
              className="max-w-36 h-12 text-lg"
              placeholder="Blood Group"
              pattern="^(A|B|AB|O)[+-]$"
            />
            <Input
              className="max-w-36 h-12 text-lg"
              placeholder="Major Disease"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-2">
        <h2 className="text-lg font-medium">Occupation/Earning</h2>
        <div className="grid md:grid-cols-2 gap-2">
          <Input className="text-gray-700" placeholder="What do you do?" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your annual income" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="lt_3l">Less than Rs. 3,00,000</SelectItem>
                <SelectItem value="bw_3l_5l">
                  Rs. 3,00,000 - Rs. 5,00,000
                </SelectItem>
                <SelectItem value="bw_5l_10l">
                  Rs. 5,00,000 - Rs. 10,00,000
                </SelectItem>
                <SelectItem value="gt_10l">More than Rs. 10,00,000</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-medium">Medical History (Past reports)</h2>
        <Input className="mt-2" type="file" accept="image/*" />
        {/* already uploaded files will come here */}
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-medium">Prescriptions</h2>
        <div className="mt-2 grid grid-cols-2 gap-4" />
        <Input className="mt-2" type="file" accept="image/*" />
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-medium">Social</h2>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <Label className="relative">
            <Phone className="absolute mt-3 left-3" size={16} />
            <Input placeholder="Phone Number" className="pl-9" />
          </Label>
          <Label className="relative">
            <Instagram className="absolute mt-3 left-3" size={16} />
            <Input placeholder="Instagram handle" className="pl-9" 
              pattern="^@?[a-zA-Z0-9._]{1,30}$"
            />
          </Label>
          <Label className="relative">
            <Mail className="absolute mt-3 left-3" size={16} />
            <Input type="email" placeholder="Email Address" className="pl-9" />
          </Label>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-lg font-medium">Other Details</h2>
        <Textarea
          className="mt-2"
          placeholder="Additional information about the patient."
        />
      </div>
      <div className="mt-6">
        <Button className="btn btn-primary">Update</Button>
      </div>
    </form>
  );
}
