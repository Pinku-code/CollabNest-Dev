import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar_dashboard = () => {
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

  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


const [creatorInfo, setCreatorInfo] = useState({
    name: "",
    email: "",
    niche: "",
  });
const navigate = useNavigate();

useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("You must be logged in");
      navigate("/login");
      return;
    }

    console.log("Fetch Dashboard above");

    const fetchdata = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/cr_dash", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.table(res);
        if (!res.ok) {
          throw new Error("Failed to fetch dashboard data");
        }

        console.table(res);

        const data = await res.json();

        if (data.creatorInfo) {
          setCreatorInfo(data.creatorInfo);
        }


      } catch (error) {
        console.error(error);
        toast.error("Error loading dashboard");
      }
    };

    fetchdata();
  }, [navigate]);

  console.log(creatorInfo.name);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-10 w-full max-w-7xl transition-all duration-30 ${
        isScrolled ? "scale-95 shadow-md bg-base-100/90 backdrop-blur-md" : ""
      }`}
    >
      <div className="navbar bg-base-100 shadow-lg px-4 py-2 rounded-full">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
              <li><Link to="/cr_dash">Dashboard</Link></li>
              <li><Link to="/cr_dash/Scripts">Scripts</Link></li>
              <li><Link to="/cr_dash/Collabs">Collabs</Link></li>
              <li><Link to="/cr_dash/Video_manager">Video Manager</Link></li>
            </ul>
          </div>
          <Link
            to="/cr_dash"
            className="btn btn-soft btn-primary text-xl font-bold normal-case rounded-full"
          >
            CollabNest
          </Link>
        </div>

        {/* Navbar Center - Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            {[
              { path: "/cr_dash", label: "Dashboard" },
              { path: "/cr_dash/Scripts", label: "Scripts" },
              { path: "/cr_dash/Collabs", label: "Collabs" },
              { path: "/cr_dash/Video_manager", label: "Video Manager" },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`px-3 py-2 rounded-full font-medium transition duration-200 ${
                    isActive(path)
                      ? "bg-primary text-white"
                      : "hover:bg-primary hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        {/* Navbar End */}
<div className="navbar-end gap-2">
  {/* Theme Toggle */}
  <button
    onClick={toggleTheme}
    className="btn btn-ghost btn-circle text-xl"
    aria-label="Toggle Theme"
  >
    {theme === "dark" ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2m0 14v2m9-9h-2M5 12H3
          m15.364-6.364l-1.414 1.414M6.05 17.95
          l-1.414 1.414M17.95 17.95l-1.414-1.414
          M6.05 6.05L4.636 7.464M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12.79A9 9 0 0 1 12.21 3
          a7 7 0 1 0 8.79 9.79z"
        />
      </svg>
    )}
  </button>

  {/* User Avatar Dropdown */}
  <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src="/avatar-placeholder.png" alt="User avatar" />
      </div>
    </label>
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li>
        <span className="font-semibold">👋 Hello, {creatorInfo.name.split(" ")[0]}</span>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <button
          className="text-red-500 font-semibold"
          onClick={() => {
            localStorage.removeItem("authToken");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </li>
    </ul>
  </div>
</div>

      </div>
    </motion.nav>
  );
};

export default Navbar_dashboard;
