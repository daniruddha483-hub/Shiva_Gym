import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <NavLink to="/" className="navbar-logo">
        SHIVA
      </NavLink>

      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/programs">Programs</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <NavLink to="/contact" className="navbar-cta">
        JOIN NOW
      </NavLink>

    </nav>
  );
}

export default Navbar;