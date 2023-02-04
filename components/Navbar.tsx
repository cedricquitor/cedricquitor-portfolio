import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex justify-between py-8">
      {/* Logo */}
      <Link href="/">
        <div className="font-oswald text-3xl">hi@cedric.ph</div>
      </Link>
      {/* Links */}
      <div className="hidden md:flex">
        <ul className="flex gap-8 uppercase font-oswald text-xl my-auto">
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
    </div>
  );
};

export default Navbar;
