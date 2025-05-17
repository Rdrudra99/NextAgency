import type { Metadata } from "next";
import { Bricolage_Grotesque , Manrope } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "NextAgency || Modern Agency Landing Page Template",
  description: "NextAgency is a responsive and SEO-friendly agency landing page template featuring Sanity CMS integration for blogs. Ideal for creative agencies, startups, and freelancers looking to showcase services and publish content seamlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} bg-[#fff6ec]`}>
        {children}
      </body>
    </html>
  );
}
