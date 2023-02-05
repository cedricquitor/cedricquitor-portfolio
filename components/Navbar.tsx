"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed z-50 w-full top-0 flex justify-between py-16 px-8 md:px-16 ${isScrolled ? "bg-[#37b47e] shadow-md" : ""}`}>
      {/* Logo */}
      <Link href="/" className="flex items-center gap-x-8">
        <p className="font-bold text-2xl">C</p>
        <div className="font-bold text-xl">hi@cedric.ph</div>
      </Link>
      {/* Links */}
      <div className="hidden md:flex">
        <ul className="flex gap-8 font-bold text-xl my-auto">
          <Link href="/about" className="transition duration-500 hover:text-sky-600">
            About
          </Link>
          <Link href="/blog" className="transition duration-500 hover:text-[#125ba6]">
            Blog
          </Link>
          <Link href="/contact" className="transition duration-500 hover:text-blue-900">
            Contact
          </Link>
        </ul>
      </div>
      <div className="flex md:hidden justify-center items-center">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
