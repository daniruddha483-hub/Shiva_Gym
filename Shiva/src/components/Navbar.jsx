import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiInfo,
  FiImage,
  FiPhone,
  FiMenu,
  FiX,
  FiArrowUpRight
} from "react-icons/fi";

import { GiWeightLiftingUp } from "react-icons/gi";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

    
      <NavLink
        to="/"
        className="navbar-logo"
        onClick={closeMenu}
      >
        SHIVA
      </NavLink>


   
      <div className="navbar-links">

        <NavLink to="/">
          <FiHome />
          <span>Home</span>
        </NavLink>

        <NavLink to="/about">
          <FiInfo />
          <span>About</span>
        </NavLink>

        <NavLink to="/programs">
          <GiWeightLiftingUp />
          <span>Programs</span>
        </NavLink>

        <NavLink to="/gallery">
          <FiImage />
          <span>Gallery</span>
        </NavLink>

        <NavLink to="/contact">
          <FiPhone />
          <span>Contact</span>
        </NavLink>

      </div>


   
      <NavLink
        to="/contact"
        className="navbar-cta"
      >
        <span>JOIN NOW</span>
        <FiArrowUpRight />
      </NavLink>



      <button
        className="navbar-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>


      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <NavLink
          to="/"
          onClick={closeMenu}
        >
          <FiHome />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/about"
          onClick={closeMenu}
        >
          <FiInfo />
          <span>About</span>
        </NavLink>

        <NavLink
          to="/programs"
          onClick={closeMenu}
        >
          <GiWeightLiftingUp />
          <span>Programs</span>
        </NavLink>

        <NavLink
          to="/gallery"
          onClick={closeMenu}
        >
          <FiImage />
          <span>Gallery</span>
        </NavLink>

        <NavLink
          to="/contact"
          onClick={closeMenu}
        >
          <FiPhone />
          <span>Contact</span>
        </NavLink>

        <NavLink
          to="/contact"
          className="mobile-menu-cta"
          onClick={closeMenu}
        >
          JOIN NOW
          <FiArrowUpRight />
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;