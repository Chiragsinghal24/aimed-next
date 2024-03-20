import { GoogleGenerativeAI } from "@google/generative-ai";
export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { image, mimeType, question } = await req.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
    const imageParts = [{
      inlineData: {
        data: image,
        mimeType,
      },
    }]

    const result = await model.generateContent([question, ...imageParts]);
    const response = result.response.text();
    return new Response(response, { status: 200 });
  } catch (err) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
