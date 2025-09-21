import "./globals.css";
import { Metadata } from "next";
import { raleway } from "./ui/fonts";

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
