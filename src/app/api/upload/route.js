import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
export async function POST(request) {
  try {
    await requireAdmin(); if (!process.env.IMGBB_API_KEY) throw new Error("IMGBB_API_KEY is not configured.");
    const file = (await request.formData()).get("image"); if (!file || typeof file === "string" || !file.type.startsWith("image/")) throw new Error("Please select an image file.");
    const payload = new FormData(); payload.set("image", Buffer.from(await file.arrayBuffer()).toString("base64"));
    const result = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`, { method: "POST", body: payload }).then((res) => res.json());
    if (!result.success) throw new Error(result.error?.message || "ImgBB upload failed.");
    return NextResponse.json({ url: result.data.url });
  } catch (error) { return NextResponse.json({ error: error.message || "Upload failed" }, { status: error.message === "Unauthorized" ? 401 : 400 }); }
}
