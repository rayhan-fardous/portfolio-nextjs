import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Poppins, Space_Grotesk } from "next/font/google";

export const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const bodyFont = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Md Rayhan Ul Fardous | Portfolio",
  description: "Personal portfolio website of Md Rayhan Ul Fardous, a Web Developer crafting scalable web experiences.",
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'dark' || !savedTheme) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-base text-t-primary transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
