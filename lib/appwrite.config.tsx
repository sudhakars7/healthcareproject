import * as sdk from 'node-appwrite';

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENTs_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client
.setEndpoint(ENDPOINT || 'https://default-endpoint.com') // Provide a default or fallback URL
.setProject(PROJECT_ID || 'default-project-id')          // Provide a default or fallback project ID
.setKey(API_KEY || 'default-api-key'); 

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);