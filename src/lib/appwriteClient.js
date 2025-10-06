import { Client, Account, Databases, Storage, Functions } from "appwrite";

const client = new Client();

client
  .setEndpoint('') // Your Appwrite Endpoint
  .setProject(''); // Your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const functions = new Functions(client);
