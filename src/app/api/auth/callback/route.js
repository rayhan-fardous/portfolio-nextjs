import { NextResponse } from "next/server";
import { decode, encode, sessionCookie } from "@/lib/auth";

export async function GET(request) {
  const url = new URL(request.url); const state = url.searchParams.get("state"); const code = url.searchParams.get("code");
  const saved = decode(request.cookies.get("google_oauth_state")?.value);
  if (!code || !saved || saved.state !== state) return NextResponse.redirect(new URL("/admin/login?error=invalid_request", url));
  try {
    const redirectUri = `${url.origin}/api/auth/callback`;
    const token = await fetch("https://oauth2.googleapis.com/token", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ code, client_id: process.env.GOOGLE_CLIENT_ID, client_secret: process.env.GOOGLE_CLIENT_SECRET, redirect_uri: redirectUri, grant_type: "authorization_code" }) }).then((res) => res.json());
    if (!token.access_token) throw new Error("Token exchange failed");
    const profile = await fetch("https://openidconnect.googleapis.com/v1/userinfo", { headers: { Authorization: `Bearer ${token.access_token}` } }).then((res) => res.json());
    const allowed = (process.env.ADMIN_EMAILS || "").split(",").map((email) => email.trim().toLowerCase()).filter(Boolean);
    if (!profile.email_verified || !allowed.includes(profile.email?.toLowerCase())) return NextResponse.redirect(new URL("/admin/login?error=not_admin", url));
    const response = NextResponse.redirect(new URL("/admin", url));
    response.cookies.set(sessionCookie(encode({ email: profile.email, name: profile.name, role: "admin", exp: Date.now() + 7 * 24 * 60 * 60 * 1000 })));
    response.cookies.delete("google_oauth_state"); return response;
  } catch { return NextResponse.redirect(new URL("/admin/login?error=google_failed", url)); }
}
