import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

function Navbar() {
  const [click, setClick] = useState(false);

  return (
    <header className="w-full h-24 bg-dark-grey">
      <nav className="max-w-7xl h-full py-0 px-4 m-auto flex justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img className="w-20 h-auto" src={Logo} alt="" />
          </Link>
        </div>
        <ul
          className={click ? "nav-menu active" : "flex absolute top-8 right-4"}
        >
          <li className="py-0 px-6">
            <Link to="/" className="text-white">
              Anasayfa
            </Link>
          </li>
          <li className="py-0 px-6">
            <Link to="pricing" className="text-white">
              Fiyatlar
            </Link>
          </li>
          <li className="py-0 px-6">
            <Link to="faq" className="text-white">
              S.S.S
            </Link>
          </li>
          <li className="py-0 px-6">
            <Link to="contact" className="text-white">
              İletişim
            </Link>
          </li>
        </ul>
        <div></div>
      </nav>
    </header>
  );
}

export default Navbar;
