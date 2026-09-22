import crypto from "crypto";
import { NextResponse } from "next/server";
import { encode } from "@/lib/auth";

export async function GET(request) {
  if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) return NextResponse.json({ error: "Google OAuth is not configured." }, { status: 500 });
  const state = crypto.randomBytes(24).toString("base64url");
  const redirectUri = `${new URL(request.url).origin}/api/auth/callback`;
  const url = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  url.search = new URLSearchParams({ client_id: process.env.GOOGLE_CLIENT_ID, redirect_uri: redirectUri, response_type: "code", scope: "openid email profile", state, prompt: "select_account" }).toString();
  const response = NextResponse.redirect(url);
  response.cookies.set({ name: "google_oauth_state", value: encode({ state, exp: Date.now() + 10 * 60 * 1000 }), httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 600 });
  return response;
}
