import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center mx-auto  lg:mt-12 text-white h-24">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
