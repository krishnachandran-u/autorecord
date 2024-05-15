import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { ProjectProvider } from "@/contexts/projectContext";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <ProjectProvider>
        <body className={sora.className}>{children}</body>
      </ProjectProvider>
    </html>
  );
}
