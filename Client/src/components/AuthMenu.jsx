import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AuthMenu = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
          {/* If you want initials, you can replace the icon below */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 15c2.39 0 4.624.627 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </label>

      <ul
  tabIndex={0}
  className="menu dropdown-content mt-3 z-[50] p-4 shadow-lg bg-base-100 rounded-xl w-56 space-y-2"
>
  {!isLoggedIn ? (
    <>
      <li>
        <Link
          to="/login"
          className="w-full px-4 py-2 rounded-md hover:bg-primary hover:text-white transition"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          to="/register"
          className="w-full px-4 py-2 rounded-md hover:bg-primary hover:text-white transition"
        >
          Sign Up
        </Link>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link
          to="/dashboard"
          className="w-full px-4 py-2 rounded-md hover:bg-primary hover:text-white transition"
        >
          Dashboard
        </Link>
      </li>
      <li>
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition"
        >
          Logout
        </button>
      </li>
    </>
  )}
</ul>

    </div>
  );
};

export default AuthMenu;
