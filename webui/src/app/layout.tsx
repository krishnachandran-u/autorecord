import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { ProjectProvider } from "@/contexts/projectContext";
import { ImagesProvider } from "@/contexts/imagesContext";
import { Toaster } from "@/components/ui/toaster"

const font = Urbanist({subsets: ["latin"]}); 

export const metadata: Metadata = {
  title: "autorecord",
  description: "Generate beautiful records with a single click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <ProjectProvider>
        <ImagesProvider>
          <body className={font.className}>
            <main>
              {children}
            </main>
            <Toaster />
          </body>
        </ImagesProvider>
      </ProjectProvider>
    </html>
  );
}
