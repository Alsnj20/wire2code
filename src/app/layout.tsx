import "./globals.css";
import type { Metadata } from "next";
import { outfit } from "@/lib/font";
import AuthProvider from "./provider";


export const metadata: Metadata = {
  title: "Wireframe 2 code",
  description: "You have a wireframe, now you need to code it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          `${outfit.className}
          antialized
          `
        }
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
