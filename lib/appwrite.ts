import { Client, Storage, ID, Databases} from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!) // Your Appwrite Project ID;

const storage = new Storage(client);
const db = new Databases(client);

export {client, storage, ID, db};