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
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Instagram, Phone } from "lucide-react";
import { Label } from "./ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useUserDetails from "@/hooks/use-user-details";
import { useEffect } from "react";

const formSchema = z.object({
  weight: z.number().min(0).max(500).optional(),
  height: z.number().min(0).max(300).optional(),
  vision: z
    .string()
    .regex(/^[0-9]{1,2}\/[0-9]{1,2}$/)
    .optional(),
  bloodGroup: z
    .string()
    .regex(/^(A|B|AB|O)[+-]$/)
    .optional(),
  majorDisease: z.string().optional(),
  occupation: z.string().optional(),
  income: z.string().optional(),
  reports: z.array(z.string()).optional(),
  prescriptions: z.array(z.string()).optional(),
  phoneNumber: z.string().optional(),
  instagram: z
    .string()
    .regex(/^@?[a-zA-Z0-9._]{1,30}$/)
    .optional(),
  other: z.string().optional(),
});

export function UserProfile() {
  const { user } = useUser();
  const { loading, userDetails, updateUserDetails } = useUserDetails(
    user?.emailAddresses?.at(0)?.emailAddress.replace('@','') as unknown as string
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weight: userDetails?.weight ?? 0,
      height: userDetails?.height ?? 0,
      vision: userDetails?.vision ?? "",
      bloodGroup: userDetails?.bloodGroup ?? "",
      majorDisease: userDetails?.majorDisease ?? "",
      occupation: userDetails?.occupation ?? "",
      income: userDetails?.income ?? "",
      reports: userDetails?.reports ?? [],
      prescriptions: userDetails?.prescriptions ?? [],
      phoneNumber: userDetails?.phoneNumber ?? "",
      instagram: userDetails?.instagram ?? "",
      other: userDetails?.other ?? "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await updateUserDetails(values);
      toast("Profile updated successfully")
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (loading) return;
    form.reset({
      weight: userDetails?.weight ?? 0,
      height: userDetails?.height ?? 0,
      vision: userDetails?.vision ?? "",
      bloodGroup: userDetails?.bloodGroup ?? "",
      majorDisease: userDetails?.majorDisease ?? "",
      occupation: userDetails?.occupation ?? "",
      income: userDetails?.income ?? "",
      reports: userDetails?.reports ?? [],
      prescriptions: userDetails?.prescriptions ?? [],
      phoneNumber: userDetails?.phoneNumber ?? "",
      instagram: userDetails?.instagram ?? "",
      other: userDetails?.other ?? "",
    });
  }, [loading, userDetails]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-6xl w-full pt-18 mt-24 mx-auto my-10 p-6 bg-white rounded-lg shadow-md"
      >
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage alt="Profile Picture" src={user?.imageUrl} />
            <AvatarFallback>
              {user?.firstName
                ? user?.firstName?.[0] + user?.lastName?.[0]
                : ""}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h1 className="text-2xl w-fit relative font-semibold leading-tight">
              {user?.firstName + " " + user?.lastName}
              <Badge className="absolute top-1 -right-14">PRO</Badge>
            </h1>
            <div className="mt-1 flex flex-wrap gap-x-3 items-center text-sm text-gray-600">
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weight (in kgs)</FormLabel>
                    <FormControl>
                      <Input placeholder="Weight in kgs" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Height (in cm)</FormLabel>
                    <FormControl>
                      <Input placeholder="Height in cm" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vision"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vision</FormLabel>
                    <FormControl>
                      <Input placeholder="Vision in 6/6 format" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bloodGroup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Blood Group</FormLabel>
                    <FormControl>
                      <Input placeholder="Blood Group" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="majorDisease"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Major Disease</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ex: Diabetes, Cancer etc."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="grid md:grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Occupation</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Doctor, Engineer etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="income"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Earning</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your annual income" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="lt_3l">
                            Less than Rs. 3,00,000
                          </SelectItem>
                          <SelectItem value="bw_3l_5l">
                            Rs. 3,00,000 - Rs. 5,00,000
                          </SelectItem>
                          <SelectItem value="bw_5l_10l">
                            Rs. 5,00,000 - Rs. 10,00,000
                          </SelectItem>
                          <SelectItem value="gt_10l">
                            More than Rs. 10,00,000
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-medium">
            Medical History (Past reports)
          </h2>
          <Input name="report" className="mt-2" type="file" accept="image/*" />
          {/* already uploaded files will come here */}
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-medium">Prescriptions</h2>
          <div className="mt-2 grid grid-cols-2 gap-4" />
          <Input
            name="prescription"
            className="mt-2"
            type="file"
            accept="image/*"
          />
          {/* already uploaded files will come here */}
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-medium">Social</h2>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl className="relative">
                    <div>
                      <Phone className="absolute mt-3 left-3" size={16} />
                      <Input
                        placeholder="Phone Number"
                        className="pl-9"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram</FormLabel>
                  <FormControl className="relative">
                    <div>
                      <Instagram className="absolute mt-3 left-3" size={16} />
                      <Input
                        placeholder="Ex: @johnDoe"
                        className="pl-9"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="mt-6">
          <FormField
            control={form.control}
            name="other"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Other Details</FormLabel>
                <FormControl>
                  <Textarea
                    className="mt-2"
                    placeholder="Additional information about the patient."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-6">
          <Button disabled={loading} className="btn btn-primary">Update</Button>
        </div>
      </form>
    </Form>
  );
}
