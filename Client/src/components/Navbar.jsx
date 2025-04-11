// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div>
//       <div className="navbar bg-base-100 shadow-sm rounded-full">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//               <li><Link to="/">Home</Link></li>
//               {/* <li>
//                 <a>Parent</a>
//                 <ul className="p-2 m-2">
//                   <li><a>Submenu 1</a></li>
//                   <li><a>Submenu 2</a></li>
//                 </ul>
//               </li> */}
//               <li><Link to="/docs">Docs</Link></li>
//               <li><Link to="/plans">Plan</Link></li>
//             </ul>
//           </div>
//           <a className="btn btn-soft btn-primary text-xl rounded-full"href='/'>CollabNest</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             <li><Link to="/">Home</Link></li>
//             {/* <li>
//               <details>
//                 <summary>Parent</summary>
//                 <ul className="p-2">
//                   <li><a>Submenu 1</a></li>
//                   <li><a>Submenu 2</a></li>
//                 </ul>
//               </details>
//             </li> */}
//             <li><Link to="/docs">Docs</Link></li>
//             <li><Link to="/plans">Plan</Link></li>
//           </ul>
//         </div>
//         {/* <div className="navbar-end">
//           <a className="btn rounded-full">Auth</a>
//         </div> */}
//         <ul className="navbar-end menu menu-horizontal px-1">
//           <li>
//             <details>
//               <summary>Auth</summary>
//               <ul className="p-2">
//                 <li><Link to="/login">Creator</Link></li>
//                 <li><Link to="/login">Sponsor</Link></li>
//               </ul>
//             </details>
//           </li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Navbar





// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div>
//       <div className="navbar bg-base-100 shadow-sm rounded-full px-4">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/docs">Docs</Link></li>
//               <li><Link to="/plans">Plan</Link></li>
//               {/* Mobile Search Bar */}
//               <li>
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="input input-bordered w-full mt-2"
//                 />
//               </li>
//             </ul>
//           </div>
//           <a className="btn btn-soft btn-primary text-xl rounded-full" href='/'>CollabNest</a>
//         </div>

//         {/* Desktop Navbar Center */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/docs">Docs</Link></li>
//             <li><Link to="/plans">Plan</Link></li>
//           </ul>

//           {/* Search bar for desktop */}
//           <div className="form-control ml-4">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="input input-bordered w-60 md:w-72 lg:w-80 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
//             />
//           </div>
//         </div>





//         {/* Auth Dropdown */}
//         <ul className="navbar-end menu menu-horizontal px-1">

//           <li>
//             <details>
//               <summary>Auth</summary>
//               <ul className="p-2">
//                 <li><Link to="/login">Creator</Link></li>
//                 <li><Link to="/login">Sponsor</Link></li>
//               </ul>
//             </details>
//           </li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Navbar








import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';



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
    <div className="navbar bg-base-100 shadow-md px-4 py-2 rounded-full my-4 max-w-7xl mx-auto">
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
            <li>
              <input
                type="text"
                placeholder="Search..."
                className="input input-bordered w-full"
              />
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-soft btn-primary text-xl font-bold normal-case  rounded-full">
          CollabNest
        </Link>
      </div>

      {/* Center - Large Screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          {/* <li><Link to="/">Home</Link></li>
          <li><Link to="/docs">Docs</Link></li>
          <li><Link to="/plans">Plans</Link></li> */}
          <li>
            <Link
              to="/"
              className={`px-3 py-2 rounded-full font-medium transition duration-200 ${isActive("/") ? "bg-primary text-white" : "hover:bg-primary hover:text-white"
                }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/docs"
              className={`px-3 py-2 rounded-full font-medium transition duration-200 ${isActive("/docs")
                  ? "bg-primary text-white"
                  : "hover:bg-primary hover:text-white"
                }`}
            >
              Docs
            </Link>
          </li>

          <li>
            <Link
              to="/plans"
              className={`px-3 py-2 rounded-full font-medium transition duration-200 ${isActive("/plans")
                  ? "bg-primary text-white"
                  : "hover:bg-primary hover:text-white"
                }`}
            >
              Plans
            </Link>
          </li>

        </ul>

        {/* Search Bar */}
        <div className="ml-6">
          <input
            type="text"
            placeholder="Search..."
          className="input input-bordered w-64 md:w-80 rounded-full border-gray-300 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
      </div>

      {/* End */}
      <div className="navbar-end gap-2">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle text-xl"
          aria-label="Toggle Theme">
          {theme === "dark" ? (
            // ☀️ Sun icon for light mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 7.464M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
            </svg>
          ) : (
            // 🌙 Moon icon for dark mode
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 0 1 12.21 3a7 7 0 1 0 8.79 9.79z" />
            </svg>
          )}
        </button>


        {/* Auth Dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost rounded-full">
            Auth
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40">
            <li><Link to="/login">Creator</Link></li>
            <li><Link to="/login">Sponsor</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
