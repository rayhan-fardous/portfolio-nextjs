import crypto from "crypto";
import { cookies } from "next/headers";

const cookieName = "portfolio_admin";
const secret = () => process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET;
const sign = (value) => crypto.createHmac("sha256", secret() || "unsafe-development-secret").update(value).digest("base64url");
export const encode = (payload) => { const value = Buffer.from(JSON.stringify(payload)).toString("base64url"); return `${value}.${sign(value)}`; };
export const decode = (token) => {
  if (!token) return null;
  const [value, signature] = token.split(".");
  const expected = sign(value || "");
  if (!value || !signature || signature.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
  try { const data = JSON.parse(Buffer.from(value, "base64url").toString()); return data.exp > Date.now() ? data : null; } catch { return null; }
};
export async function getAdmin() { return decode((await cookies()).get(cookieName)?.value); }
export async function requireAdmin() { const user = await getAdmin(); if (!user?.role || user.role !== "admin") throw new Error("Unauthorized"); return user; }
export const sessionCookie = (value) => ({ name: cookieName, value, httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 24 * 7 });
