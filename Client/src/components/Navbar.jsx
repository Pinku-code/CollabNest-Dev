import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion"; 
import AuthMenu from "./AuthMenu";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.0, ease: "easeOut" }}
    className="navbar"
  >
    {/* Navbar content */}
  
    <div className="navbar fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-base-100 shadow-lg px-4 py-2 rounded-full max-w-7xl w-full">
      {/* Start */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/docs">Docs</Link></li>
            <li><Link to="/plans">Plans</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/service"}>Services</Link></li>
          </ul>
        </div>
        {/* <Link to="/" className="btn btn-soft btn-primary text-xl font-bold normal-case rounded-full">
          CollabNest
        </Link> */}
        <button
  onClick={() => {
    if (window.location.pathname === '/') {
      window.location.reload(); // force refresh
    } else {
      window.location.href = '/'; // navigate to home
    }
  }}
  className="btn btn-soft btn-primary text-xl font-bold normal-case rounded-full"
>
  CollabNest
</button>

      </div>

      {/* Center - Large Screens */}
      <div className="navbar-center mx-auto hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          {["/", "/plans","/contact","/About","/service"].map((path) => (
            <li key={path}>
              <Link
                to={path}
                className={`px-3 py-2 rounded-full font-medium transition duration-200 ${
                  isActive(path)
                    ? "bg-primary text-white"
                    : "hover:bg-primary hover:text-white"
                }`}
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* End */}
      <div className="navbar-end gap-2">
      <button className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-700 transition">
        <Link to={"/aichat"}>AI</Link>
      
    </button>
      

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle text-xl"
          aria-label="Toggle Theme">
          {theme === "dark" ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M12 3v2m0 14v2m9-9h-2M5 12H3
                m15.364-6.364l-1.414 1.414M6.05 17.95
                l-1.414 1.414M17.95 17.95l-1.414-1.414
                M6.05 6.05L4.636 7.464M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21 12.79A9 9 0 0 1 12.21 3
                a7 7 0 1 0 8.79 9.79z" />
            </svg>
          )}
        </button>

        
<AuthMenu />

      </div>
    </div>
    </motion.nav>
  );
};

export default Navbar;
