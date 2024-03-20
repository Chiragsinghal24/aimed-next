"use client";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, FileIcon, Instagram, Phone } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
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
import { Card, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

const formSchema = z.object({
  weight: z.string().optional(),
  height: z.string().optional(),
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
  const {
    loading,
    userDetails,
    updateUserDetails,
    setReport,
    setPrescription,
    reports,
    prescriptions,
  } = useUserDetails(
    user?.emailAddresses
      ?.at(0)
      ?.emailAddress.replace("@", "") as unknown as string
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
                  <FormLabel>Annual Income</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your annual income" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
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
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-medium">
            Medical History (Past reports)
          </h2>
          <Input
            name="report"
            className="mt-2"
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                setReport(e.target.files[0]);
              }
            }}
          />
          {/* already uploaded files will come here */}
          <div className="flex my-2 gap-2 flex-wrap">
            {reports?.map((report, index) => (
              <Link href={report.url.href} key={index} className="cursor-pointer relative aspect-square">
                <Image
                  src={report.preview.href}
                  alt={report.preview.pathname}
                  width={100}
                  height={100}
                  className="object-cover my-auto"
                />
                <Download
                  className="absolute bottom-2 left-1/2 bg-white p-0.5 rounded transform -translate-x-1/2 -translate-y-1/2"
                  size={24}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-medium">Prescriptions</h2>
          <div className="mt-2 grid grid-cols-2 gap-4" />
          <Input
            name="prescription"
            className="mt-2"
            type="file"
            onChange={(e) => {
              if (e.target.files) {
                setPrescription(e.target.files[0]);
              }
            }}
          />
          {/* already uploaded files will come here */}
          <div className="flex my-2 gap-2 flex-wrap">
            {prescriptions?.map((prescription, index) => (
              <Link href={prescription.url.href} key={index} className="cursor-pointer relative aspect-square">
                <Image
                  src={prescription.preview.href}
                  alt={prescription.preview.pathname}
                  width={100}
                  height={100}
                  className="object-cover my-auto"
                />
                <Download
                  className="absolute bottom-2 left-1/2 bg-white p-0.5 rounded transform -translate-x-1/2 -translate-y-1/2"
                  size={24}
                />
              </Link>
            ))}
          </div>
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
          <Button disabled={loading} className="btn btn-primary">
            Update
          </Button>
        </div>
      </form>
    </Form>
  );
}
