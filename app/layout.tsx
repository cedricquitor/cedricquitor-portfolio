import Navbar from "../components/Navbar";
import "./globals.css";
import { Plus_Jakarta_Sans } from "@next/font/google";

const jakarta = Plus_Jakarta_Sans({
  variable: "--jakarta-font",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* Navbar */}
        <Navbar />
        <div className={`mx-auto max-w-4xl px-6 md:px-0 font-jakarta`}>
          {children}
        </div>
      </body>
    </html>
  );
}
