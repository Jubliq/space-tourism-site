import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center xl mx-auto px-8 py-4 text-white">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
