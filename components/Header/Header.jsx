import React, { useState } from "react";
import { navItems } from "../../data/data";
import { FaBars, FaXmark } from "react-icons/fa6";
import Link from "next/link";

const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const toggleMenuHandler = () => {
    setShowSideMenu(!showSideMenu);
  };
  
  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary border-b fixed top-0 right-0 left-0">
        <div className="text-xl container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a href="#" className="text-2xl font-semibold ">
              LOGO
            </a>

            <ul className="md:flex space-x-12 hidden">
              {navItems.map((nav) => (
                <Link
                  key={nav.link}
                  href={nav.path}
                  className="block hover:text-gray-300 cursor-pointer"
                >
                  {nav.link}
                </Link>
              ))}
            </ul>
          </div>

          {/* -------------------Mobile Device Section------------------------------ */}
          <div className="md:hidden">
            <button
              onClick={toggleMenuHandler}
              className="text-white focus:outline-none focus:text-gray-300"
              aria-label="Toggle Menu"
            >
              {showSideMenu ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`space-y-4 px-4 py-8 mt-16 bg-secondary text-xl ${
          showSideMenu ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map((nav) => (
          <Link
            key={nav.link}
            href={nav.path}
            className="block hover:text-gray-300 text-white cursor-pointer"
            onClick={toggleMenuHandler}
          >
            {nav.link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
