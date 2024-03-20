"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ScanEye } from "lucide-react";
import { useState } from "react";
import Markdown from "react-markdown";

export default function Scan() {
  const [question, setQuestion] = useState<string | null>(null);
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const scanImage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const file = formData.get("image") as File;
    const imageAsBase64 = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
    });
    const mimeType = imageAsBase64.split(";")[0].split(":")[1];
    const response = await fetch("/api/gemini", {
      method: "POST",
      body: JSON.stringify({
        image: imageAsBase64.split(",")[1],
        mimeType,
        question
      }),
    });
    const data = await response.text();
    setOutput(data);
    setLoading(false);
  };

  return (
    <div className="flex-1 grid md:grid-cols-2 place-items-center">
      <form
        onSubmit={scanImage}
        className="flex flex-col space-y-4 justify-center items-center p-6 max-w-lg w-full mx-auto border rounded mt-20 mb-8"
      >
        <ScanEye className="w-20 h-20" />
        <h1 className="text-4xl font-bold">MedScan</h1>
        <Input required name="image" type="file" accept="image/*"/>
        <Select
          onValueChange={(value) => {
            setQuestion(value);
          }}
          required
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="What do you want to know?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="How to use this medical tool?">
              How to use this medical tool?
            </SelectItem>
            <SelectItem value="Medicine information, side effects, and usage">
              Medicine information, side effects, and usage
            </SelectItem>
            <SelectItem value="Get medicine details, dosage and usage from prescription">
              Get medicine details, dosage and usage from prescription
            </SelectItem>
          </SelectContent>
        </Select>
        <Button className="w-full">Scan</Button>
        <Button className="w-full" variant="destructive" type="reset">
          Reset
        </Button>
      </form>
      <div className="flex flex-col justify-center items-center p-6 w-full max-w-lg mx-auto border rounded mt-20 mb-8">
        {output ? (
          <p>
            <strong>Output:</strong>
            <Markdown>{output}</Markdown>
          </p>
        ) : (
          <p>
            <strong>Output:</strong> No output yet
          </p>
        )}
      </div>
    </div>
  );
}
