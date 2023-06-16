"use client";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import { GrClose, GrMenu } from "react-icons/gr";
import NavigationItem from "./NavigationItem";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleMobileScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleMobileClick = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleMobileClick);
    document.addEventListener("scroll", handleMobileScroll);

    return () => {
      document.removeEventListener("click", handleMobileClick);
      document.removeEventListener("scroll", handleMobileScroll);
    };
  }, [isMenuOpen]);

  const navigationLinks = [
    { title: "About", url: "about", offset: -260 },
    { title: "Skills", url: "skills", offset: -240 },
    { title: "Experience", url: "experience", offset: -290 },
    { title: "Projects", url: "projects", offset: -130 },
    { title: "Contact", url: "contact" },
  ];

  return (
    <nav
      className={`fixed z-50 w-full top-0 flex justify-between py-8 px-8 md:px-16 transition-all duration-300 ${
        isScrolled ? "backdrop-filter backdrop-blur-lg shadow-md py-8" : null
      }`}
    >
      {/* Logo */}
      <Link
        to="hero"
        className="flex items-center gap-x-8 cursor-pointer"
        smooth={true}
        duration={800}
        offset={-120}
        spy={true}
      >
        <p className="font-bold text-2xl">C</p>
        <div className="font-bold text-xl">hi@cedric.ph</div>
      </Link>
      {/* Links in Medium Screen Above */}
      <div className="hidden md:flex">
        <ul
          className={`flex gap-8 font-bold my-auto ${
            isScrolled ? "text-base" : "text-xl"
          }`}
        >
          {navigationLinks.map((navigationLink, index) => (
            <NavigationItem
              key={index}
              title={navigationLink.title}
              url={navigationLink.url}
              offset={navigationLink.offset}
              className={`transition duration-300 cursor-pointer hover:text-emerald-500`}
            />
          ))}
        </ul>
      </div>
      {/* Links in Small Screen */}
      <div
        className="flex md:hidden justify-center items-center cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <GrClose /> : <GrMenu />}
      </div>
      {isMenuOpen && (
        <div className="absolute flex items-center justify-center right-8 top-16 bg-emerald-500 rounded-md transition-all duration-300 md:hidden ">
          <div className="flex flex-col">
            {navigationLinks.map((navigationLink, index) => (
              <NavigationItem
                key={index}
                title={navigationLink.title}
                url={navigationLink.url}
                offset={navigationLink.offset}
                className="text-white text-center hover:bg-emerald-600 hover:text-white px-12 py-6 rounded-md text-sm font-medium cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
