import React, { useState, useEffect } from "react";
import logom from "../assets/img/logom.png"; // Doğru import
import Nav from "./Nav";
import NavMobile from "./NavMobile";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBg(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`p-8 lg:px-0 w-full fixed z-10 transition-all duration-300 ${
        bg ? 'bg-white shadow-md py-4' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#">
          <img src={logom} alt="Logo" className="w-32 h-auto" />
        </a>

        {/*Nav */}

        <Nav/>

        {/*Nav mobile */}

        <NavMobile/>
        
      </div>
    </header>
  );
};

export default Header;
