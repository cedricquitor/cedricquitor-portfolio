"use client";
import { Link } from "react-scroll";
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
    <nav
      className={`fixed z-50 w-full top-0 flex justify-between py-8 px-8 md:px-16 transition-all duration-300 ${
        isScrolled ? "backdrop-filter backdrop-blur-lg shadow-md py-8" : ""
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
          <Link
            to="about"
            className="transition duration-300 cursor-pointer hover:text-emerald-600"
            smooth={true}
            duration={800}
            offset={-260}
            spy={true}
          >
            About
          </Link>
          <Link
            to="skills"
            className="transition duration-300 cursor-pointer hover:text-emerald-600"
            smooth={true}
            duration={800}
            offset={-240}
            spy={true}
          >
            Skills
          </Link>
          <Link
            to="experience"
            className="transition duration-300 cursor-pointer hover:text-emerald-600"
            smooth={true}
            duration={800}
            offset={-290}
            spy={true}
          >
            Experience
          </Link>
          <Link
            to="projects"
            className="transition duration-300 cursor-pointer hover:text-emerald-600"
            smooth={true}
            duration={800}
            offset={-130}
            spy={true}
          >
            Projects
          </Link>
          <Link
            to="contact"
            className="transition duration-300 cursor-pointer hover:text-emerald-600"
            smooth={true}
            duration={800}
            spy={true}
          >
            Contact
          </Link>
        </ul>
      </div>
      {/* Links in Small Screen */}
      <div className="flex md:hidden justify-center items-center">
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
