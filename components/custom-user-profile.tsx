import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileIcon, InstagramIcon, PhoneIcon } from "lucide-react"

export function CustomUserProfile(props: {
  id: string;
}) {
  return (
    <div className="max-w-7xl w-full mt-20 mb-8 mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4 mb-6">
        <Avatar>

          <AvatarFallback>T</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <h1 className="text-2xl font-semibold">Trial Singh</h1>
          <Badge variant="secondary">PRO</Badge>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <div className="font-medium">Weight (in kgs)</div>
          <div className="mt-1">30</div>
        </div>
        <div>
          <div className="font-medium">Height (in cm)</div>
          <div className="mt-1">160</div>
        </div>
        <div>
          <div className="font-medium">Vision</div>
          <div className="mt-1">4/4</div>
        </div>
        <div>
          <div className="font-medium">Blood Group</div>
          <div className="mt-1">B+</div>
        </div>
        <div>
          <div className="font-medium">Major Disease</div>
          <div className="mt-1">Cancer</div>
        </div>
        <div>
          <div className="font-medium">Annual Income</div>
          <div className="mt-1">More than Rs. 10,00,000</div>
        </div>
      </div>
      <div className="mb-6">
        <div className="font-medium mb-2">Occupation</div>
        <div>Engineer</div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Medical History (Past reports)</h2>
        <div className="flex space-x-4">
          <FileIcon className="h-6 w-6 text-gray-400" />
          <FileIcon className="h-6 w-6 text-gray-400" />
          <FileIcon className="h-6 w-6 text-gray-400" />
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Prescriptions</h2>
        <div className="flex space-x-4">
          <FileIcon className="h-6 w-6 text-gray-400" />
          <FileIcon className="h-6 w-6 text-gray-400" />
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Social</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="font-medium">Phone Number</div>
            <div className="mt-1 flex items-center">
              <PhoneIcon className="h-5 w-5 text-gray-500 mr-2" />
              6378845965
            </div>
          </div>
          <div>
            <div className="font-medium">Instagram</div>
            <div className="mt-1 flex items-center">
              <InstagramIcon className="h-5 w-5 text-gray-500 mr-2" />
              @thisis_vaib
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Other Details</h2>
        <div>I am an alcoholic</div>
      </div>
      <div className="flex justify-end">
        <Button variant="default">Update</Button>
      </div>
    </div>
  )
}
