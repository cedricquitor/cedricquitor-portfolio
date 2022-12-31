import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex justify-between py-8">
      {/* Logo */}
      <div className="font-oswald text-3xl">CEDRICQ</div>
      {/* Links */}
      <div className="hidden md:flex">
        <ul className="flex gap-8 font-oswald text-xl my-auto">
          <Link href="/about">ABOUT</Link>
          <Link href="/projects">PROJECTS</Link>
          <Link href="/contact">CONTACT</Link>
        </ul>
      </div>
      <div className="flex md:hidden">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
