import Hero from "../HeroFolder/Hero";
import Navbar from "../NavbarFolder/Navbar";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <Navbar/>
        <Hero/>
      </header>
    </>
  )
};

export default Header;