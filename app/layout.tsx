import "./globals.css";
import { Oswald, Source_Sans_Pro } from "@next/font/google";

const oswald = Oswald({
  variable: "--oswald-font",
});

const source = Source_Sans_Pro({
  variable: "--source-font",
  weight: ["200", "300", "400", "600", "700", "900"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${source.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className={`mx-auto max-w-2xl px-6 md:px-0 font-source`}>{children}</div>
      </body>
    </html>
  );
}
