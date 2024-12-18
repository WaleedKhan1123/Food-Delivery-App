import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  // State for controlling mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-emerald-500 shadow-md h-14 px-6">
      <div className="flex">
        <div className=" mt-3   md:mt-3 md:ml-6 text-2xl text-white font-bold ">
          KHANBITES
        </div>

        <div className="hidden md:flex ml-9 mt-4">
          <Link
            className="text-white hover:text-cyan-700 transition-all duration-300  "
            to="/"
          >
            Home
          </Link>

          <Link
            className="ml-7 text-white hover:text-cyan-700 transition-all duration-300"
            to="/Login"
          >
            Login
          </Link>
        </div>
        <div className="md:hidden ">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className=" absolute right-3 top-4  "
          >
            <svg
              className="w-6 h-6 text-white "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden  absolute right-3 top-12 bg-emerald-500 flex flex-col shadow-md overflow-hidden transition-all duration-300 ease-in-out ">
          <Link
            className="text-white px-4 py-2 hover:bg-slate-200 hover:text-cyan-700 transition-all duration-300 ease-in-out "
            to="/"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            Home
          </Link>

          <Link
            className=" text-white px-4 py-2  hover:bg-slate-200 hover:text-cyan-700 transition-all duration-300 ease-in-out"
            to="/Login"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
