import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <header className="w-full h-24 bg-dark-grey">
      <nav className="max-w-7xl h-full py-0 px-4 m-auto flex justify-between overflow-hidden">
        <div className="flex items-center">
          <Link to="/">
            <img className="w-20 h-auto" src={Logo} alt="" />
          </Link>
        </div>
        <ul className="flex items-center justify-self-start">
          <li className="py-0 px-6">
            <Link to="/" className="text-white">
              Anasayfa
            </Link>
          </li>
          <li className="py-0 px-6">
            <Link to="/pricing" className="text-white">
              Fiyatlar
            </Link>
          </li>
          <li className="py-0 px-6">
            <Link to="/faq" className="text-white">
              S.S.S
            </Link>
          </li>
          <li className="py-0 px-6">
            <Link to="/contact" className="text-white">
              İletişim
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
