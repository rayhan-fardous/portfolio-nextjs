import { NextResponse } from "next/server";
import { getPortfolioContent, savePortfolioContent } from "@/lib/content";
import { requireAdmin } from "@/lib/auth";
export const dynamic = "force-dynamic";
export async function GET() { return NextResponse.json(await getPortfolioContent()); }
export async function PUT(request) {
  try { await requireAdmin(); const content = await request.json(); await savePortfolioContent(content); return NextResponse.json({ ok: true }); }
  catch (error) { return NextResponse.json({ error: error.message || "Unauthorized" }, { status: error.message === "Unauthorized" ? 401 : 400 }); }
}
