import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import Head from './Head';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Üst Animasyonlu Yazı */}
      <Head />

      {/* Header */}
      <header className="bg-gray-100 shadow-lg rounded-b-xl text-primary flex items-center lg:justify-around justify-between px-8 py-3 top-0 left-0 w-full z-50">
      <Link to="/" className="flex items-center">
          {/* Logo */}
          <img
            src="logo.svg"
            alt="Logo"
            className="w-16 h-16 md:w-24 md:h-20 lg:w-28 lg:h-20 rounded-full object-cover transition-all duration-300"
          />
        </Link>

        {/* Navigasyon Menüsü (Desktop) */}
        <nav className={`lg:flex gap-6 hidden`}>
          <Link
            to="/hakkimizda"
            className="py-4 px-2 transition-colors duration-200 hover:bg-primary hover:text-white font-bold text-lg"
          >
            Hakkımızda
          </Link>
          <Link
            to="/ürünler"
            className="py-4 px-2 transition-colors duration-200 hover:bg-primary hover:text-white font-bold text-lg"
          >
            Ürünler
          </Link>
          <Link
            to="/yorumlar"
            className="py-4 px-2 transition-colors duration-200 hover:bg-primary hover:text-white font-bold text-lg"
          >
            Yorumlar
          </Link>
          <Link
            to="/iletişim"
            className="py-4 px-2 transition-colors duration-200 hover:bg-primary hover:text-white font-bold text-lg"
          >
            İletişim
          </Link>
        </nav>

        {/* Hamburger Menü (Mobil) */}
        <div className="lg:hidden flex items-center">
          <MdOutlineMenu
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer text-white bg-primary w-8 h-8 rounded-md mb-2"
          />
        </div>
      </header>

      {/* Açılır Menü (Mobil) */}
      {menuOpen && (
        <div className="absolute bg-primary w-full h-60 flex flex-col  gap-6 py-6 top-full left-0 z-40 text-start items-start">
          <Link
            to="/hakkimizda"
            className="text-white font-bold text-lg hover:bg-white hover:text-primary w-1/3 pl-4 ml-1"
            onClick={() => setMenuOpen(false)}
          >
            Hakkımızda
          </Link>
          <Link
            to="/ürünler"
            className="text-white font-bold text-lg  hover:bg-white hover:text-primary w-1/3 pl-4 ml-1"
            onClick={() => setMenuOpen(false)}
          >
            Ürünler
          </Link>
          <Link
            to="/yorumlar"
            className="text-white font-bold text-lg  hover:bg-white hover:text-primary w-1/3 pl-4 ml-1"
            onClick={() => setMenuOpen(false)}
          >
            Yorumlar
          </Link>
          <Link
            to="/iletişim"
            className="text-white font-bold text-lg  hover:bg-white hover:text-primary w-1/3  pl-4 ml-1"
            onClick={() => setMenuOpen(false)}
          >
            İletişim
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
