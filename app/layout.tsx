import { Raleway } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

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
