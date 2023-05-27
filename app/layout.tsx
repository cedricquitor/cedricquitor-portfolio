import Navbar from "../components/Navbar";
import "./globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({
  variable: "--inter-font",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body suppressHydrationWarning={true}>
        {/* Navbar */}
        <Navbar />
        <div className={`mx-auto max-w-4xl px-6 md:px-0 font-inter`}>
          {children}
        </div>
      </body>
    </html>
  );
}
