import { Client, Storage, ID, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!); // Your Appwrite Project ID;

const storage = new Storage(client);
const db = new Databases(client);

const uploadFile = async (file: File) => {
  try {
    const response = await storage.createFile(
      process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
      ID.unique(),
      file
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getFile = async (fileId: string) => {
  try {
    return {
      preview: storage.getFilePreview(
        process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
        fileId
      ),
      url: storage.getFileDownload(
        process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
        fileId
      ),
    };
  } catch (error) {
    console.error(error);
  }
};

export { client, storage, ID, db, uploadFile, getFile };
