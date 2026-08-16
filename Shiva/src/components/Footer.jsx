import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand-section">

          <h2>
            SHIVA <span>MULTY GYM</span>
          </h2>

          <p>
            Train harder. Stay consistent.
            Become stronger.
          </p>

          <a
            href="https://maps.app.goo.gl/vvmbawD6n1fWztQn9"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-location"
          >
            BC Road, Bantwal
            <span>↗</span>
          </a>

        </div>


        {/* QUICK LINKS */}
        <div className="footer-links">

          <h3>
            QUICK LINKS
          </h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/programs">
            Programs
          </Link>

          <Link to="/gallery">
            Gallery
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>


        {/* CONTACT */}
        <div className="footer-contact">

          <h3>
            GET IN TOUCH
          </h3>

          <a href="tel:+919980770177">
            +91 99807 70177
          </a>

          <p>
            05:00 AM – 09:00 AM
          </p>

          <p>
            04:30 PM – 09:30 PM
          </p>

          <a
            href="https://maps.app.goo.gl/vvmbawD6n1fWztQn9"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-map-link"
          >
            View on Google Maps →
          </a>

        </div>

      </div>


      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 Shiva Multy Gym. All rights reserved.
        </p>

        <p className="footer-credit">
          Designed & Developed by{" "}

          <a
            href="https://dhota-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-portfolio-link"
            aria-label="Visit AD portfolio"
          >
            <span className="footer-logo">
              AD
            </span>
          </a>

        </p>

      </div>

    </footer>
  );
}

export default Footer;