import emoteAngel from '../assets/emote_angel.png';
import NavOptions from "../navOptions.json";
import { Link } from "react-scroll";
import { useState } from 'react';
const navOptions = NavOptions.options;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
    console.log("Hamburger clicked");
  }

  return (
    <div className="bg-gradient-to-r from-green-700 to-green-900 flex items-center justify-between border border-slate-600 px-4 h-14 fixed top-0 left-0 right-0 z-30 shadow-md w-full">
      {/* Profile Container */}
      <div
        id="profile-container"
        className="p-1 flex items-center"
      >
        <img
          className="rounded-full w-12 border-2 border-black"
          src={emoteAngel}
          alt="Profile"
        />
        <span className="ml-3 text-white text-xl">Angel Vasquez</span>
      </div>

      {/* Nav Options */}
      <div id="nav-options" className="hidden md:flex space-x-4 p-2 rounded text-neutral-100">
        {navOptions.map((option, index) => (
          <Link
          key={index}
          to={option.id || option}
          offset={-50}
          smooth duration={1000}
          className="cursor-pointer font-semibold hover:text-emerald-300">
          {option.text || option}
          </Link>
        ))}
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden sm:inline">
        <button id="hamburger" className="text-white focus:outline-none" onClick={handleHamburgerClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <div className={`h-screen ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden absolute top-0 right-0 left-0 text-black p-4 rounded shadow-lg bg-[#012813] transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col space-y-2">
          {navOptions.map((option, index) => (
            <Link
              key={index}
              to={option.id || option}
              offset={-50}
              smooth duration={1000}
              className="cursor-pointer font-semibold hover:text-emerald-300 text-white"
              onClick={handleHamburgerClick} // Close the menu on click
            >
              {option.text || option}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
