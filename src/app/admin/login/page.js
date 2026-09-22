import { redirect } from "next/navigation";
import Link from "next/link";
import { getAdmin } from "@/lib/auth";

export default async function AdminLogin({ searchParams }) {
  if (await getAdmin()) redirect("/admin");
  const { error } = await searchParams;
  const message = error === "not_admin" ? "This Google account is not an administrator." : error ? "Google sign-in could not be completed. Please try again." : null;
  return <main className="min-h-screen grid place-items-center bg-[#070b14] px-6 text-white"><section className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[.04] p-8 shadow-2xl"><p className="text-sm font-semibold uppercase tracking-[.22em] text-cyan-400">Portfolio CMS</p><h1 className="mt-3 text-3xl font-bold">Admin sign in</h1><p className="mt-3 text-sm leading-6 text-zinc-400">Sign in with your approved Google account to manage portfolio content.</p>{message && <p className="mt-5 rounded-xl border border-rose-400/30 bg-rose-400/10 p-3 text-sm text-rose-200">{message}</p>}<a href="/api/auth/google" className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-white px-4 py-3 font-semibold text-slate-900 transition hover:bg-cyan-50"><span className="text-lg">G</span> Continue with Google</a><Link href="/" className="mt-5 block text-center text-sm text-zinc-400 hover:text-white">Back to portfolio</Link></section></main>;
}
