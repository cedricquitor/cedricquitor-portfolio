import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const Header = () => {
    return (
      <Link href="/blog">
        <header>
          <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
            <h1 className="text-white">Cedric's Blog</h1>
            <p className="text-slate-300">Welcome to my blog. I write about tech, data, and AI/ML</p>
          </div>
        </header>
      </Link>
    );
  };

  const Footer = () => {
    return (
      <footer>
        <div className="border-t border-slate-400 mt-6 py-6">
          <p className="text-center text-slate-400">Developed by Cedric</p>
        </div>
      </footer>
    );
  };

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-3xl px-6 md:px-0">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
