import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm rounded-full">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><Link to="/">Home</Link></li>
              <li>
                <a>Parent</a>
                <ul className="p-2 m-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/plans">Plans</Link></li>
            </ul>
          </div>
          <a className="btn btn-soft btn-primary text-xl rounded-full" href='/'>CollabNest</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to="/">Home</Link></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/plans">Plans</Link></li>
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn rounded-full">Auth</a>
        </div> */}
        <ul className="navbar-end menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Auth</summary>
              <ul className="p-2">
                <li><Link to="/login">Login</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar