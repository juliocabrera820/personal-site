import NavLink from "./NavLink";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <p className="font-bold">Jules</p>
      <div className="hidden md:flex gap-8">
        <NavLink href="/#">Services</NavLink>
        <NavLink href="/#">Case studies</NavLink>
        <NavLink href="/#">About me</NavLink>
        <NavLink href="/#">Blog</NavLink>
      </div>
      <Button variant="tertiary" href="https://links.juleskab.lat" text="My links" />
    </div>
  </nav>
  );
}

export default Navbar;