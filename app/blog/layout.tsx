import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const Header = () => {
    return (
      <Link href="/blog">
        <header>
          <div className="text-center bg-slate-800">
            <h1 className="text-white">Cedric's Blog</h1>
            <p className="text-slate-300">Welcome to my blog. I write about tech, data, and AI/ML</p>
          </div>
        </header>
      </Link>
    );
  };

  const Footer = () => {
    return <footer>Foot</footer>;
  };

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-2xl">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
