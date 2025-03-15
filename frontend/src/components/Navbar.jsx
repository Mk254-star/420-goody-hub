import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Ensure this file exists

function Navbar() {
  console.log("Navbar Loaded"); // Debugging check

  return (
    <nav className="navbar">
      <h1>420 Goody Hub</h1>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

