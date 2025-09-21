import { Metadata } from "next";

import { raleway } from "./ui/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: 'Overview'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased bg-[#0C0117] text-white leading-[normal]`}>
        {children}
      </body>
    </html>
  );
}
