import { MongoClient } from "mongodb";

let clientPromise;

export async function getDb() {
  if (!process.env.MONGODB_URI) return null;
  if (!clientPromise) clientPromise = new MongoClient(process.env.MONGODB_URI).connect();
  return (await clientPromise).db(process.env.MONGODB_DB || "portfolio");
}
