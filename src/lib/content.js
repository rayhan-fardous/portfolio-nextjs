import { getDb } from "@/lib/db";
import { defaultContent } from "@/lib/default-content";

export async function getPortfolioContent() {
  const db = await getDb();
  if (!db) return defaultContent;
  const saved = await db.collection("site_content").findOne({ key: "portfolio" });
  return saved ? { ...defaultContent, ...saved.content } : defaultContent;
}

export async function savePortfolioContent(content) {
  const db = await getDb();
  if (!db) throw new Error("MONGODB_URI is not configured.");
  await db.collection("site_content").updateOne(
    { key: "portfolio" },
    { $set: { content, updatedAt: new Date() } },
    { upsert: true }
  );
}
