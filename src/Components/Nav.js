import React, { useState, useEffect, useRef } from "react";
import { navigation } from "../data";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const hukukAlanlari = [
    "Ceza Hukuku",
    "Aile Hukuku",
    "Tazminat Hukuku",
    "Gayrimenkul ve Kira Hukuku",
    "İcra ve İflas Hukuku",
    "Tüketici Hukuku",
    "Miras ve Kişiler Hukuku",
    "İş Hukuku ve Sosyal Güvenlik Hukuku",
    "İdare ve Vergi Hukuku",
    "Kamulaştırma Hukuku",
    "Kişisel Verilerin Korunması Hukuku",
    "İnsan Hakları Hukuku",
  ];

  // Dışarı tıklanınca dropdown'ı kapatma
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex flex-col lg:flex-row items-center justify-between px-4 py-2 bg-white shadow-md">
      <ul className="lg:flex space-x-6 font-body font-semibold text-sm text-primary">
        {navigation.map((item, index) => (
          <li key={index}>
            <Link
              to={item.href}
              smooth={true}
              activeClass="active"
              spy={true}
              offset={-120}
              className="hover:text-accent-hover transition-all duration-300 cursor-pointer"
            >
              {item.name}
            </Link>
          </li>
        ))}

        {/* DROPDOWN MENÜ - UZMANLIK ALANLARIMIZ */}
        <li className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Uzmanlık Alanlarımız ▼
          </button>

          {isOpen && (
            <ul className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
              {hukukAlanlari.map((hukuk, index) => (
                <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <RouterLink to={`/hukuk/${encodeURIComponent(hukuk)}`} replace onClick={() => setIsOpen(false)}>
                    {hukuk}
                  </RouterLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
