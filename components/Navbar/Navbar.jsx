const Navbar = () => {
  return (
    <div className="flex bg-red-200 mx-[15%] justify-between">
      {/* Logo */}
      <div>Cedric Quitor</div>
      {/* Links */}
      <div>
        <ul className="flex gap-4">
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
