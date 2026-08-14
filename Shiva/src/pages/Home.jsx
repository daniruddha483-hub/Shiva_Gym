import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home">

      {/*HERO */}
      <section className="hero">

        <div className="hero-bg-text">SHIVA</div>

        {/* HERO CONTENT */}
        <div className="container hero-container">

          <div className="hero-content">

            <p className="hero-tag">
              SHIVA MULTY GYM • BC ROAD
            </p>

            <h1>
              BUILD
              <br />
              YOUR
              <span> STRENGTH.</span>
            </h1>

            <p className="hero-description">
              Train harder. Stay consistent. Become stronger.
              Welcome to Shiva Multy Gym — a place built for
              people who are serious about their fitness.
            </p>

            <div className="hero-buttons">

              <Link to="/programs" className="btn btn-primary">
                Explore Programs
              </Link>

              <Link to="/contact" className="btn btn-outline">
                Visit Us
              </Link>

            </div>

          </div>

        </div>


        {/* HERO IMAGE + FLOATING ELEMENTS */}
        <div className="hero-visual">

          <img
            src="/images/hro.png"
            alt="Shiva Multy Gym"
            className="hero-person"
          />


       
          <div className="hero-badge">

            <strong>4.8</strong>

            <span>★★★★★</span>

            <small>45 Reviews</small>

          </div>



          <a
            href="https://maps.app.goo.gl/vvmbawD6n1fWztQn9"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-location-card"
          >

            <img
              src="/images/location-icon.png"
              alt="Location"
              className="location-icon"
            />

            <div>

              <strong>BC Road</strong>

              <small>
                Mangaluru, Karnataka
              </small>

            </div>

          </a>

        </div>


        {/* HERO BOTTOM STRIP */}
        <div className="hero-strip">

          <div className="container hero-strip-content">

            <div>

              <strong>
                <p>05:00 AM - 09:00 AM</p>
                <p>04:30 PM - 09:30 PM</p>
              </strong>

              <span>
                Opening Timings
              </span>

            </div>


            <div>

              <strong>
                ₹600
              </strong>

              <span>
                Monthly
              </span>

            </div>


            <div>

              <strong>
                ₹6000
              </strong>

              <span>
                Yearly
              </span>

            </div>


            <div>

              <strong>
                BC ROAD
              </strong>

              <span>
                Bantwal, Karnataka
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT PREVIEW*/}
      <section className="section about-preview">

        <div className="container about-grid">

          {/* IMAGE */}
          <div className="about-image">

            <img
              src="/images/gym-int.jpeg"
              alt="Shiva Multy Gym interior"
            />

            <div className="image-label">

              <span>01</span>

              <p>
                YOUR FITNESS
                <br />
                STARTS HERE.
              </p>

            </div>

          </div>


          {/* CONTENT */}
          <div className="about-content">

            <p className="section-tag">
              ABOUT SHIVA MULTY GYM
            </p>

            <h2 className="section-title">
              TRAIN HARD.
              <br />
              <span>STAY STRONG.</span>
            </h2>

            <p className="section-description">
              Shiva Multy Gym is a fitness space in BC Road,
              built for people who want to improve their strength,
              fitness and overall physique.
            </p>

            <p className="section-description">
              Whether you're just starting your fitness journey
              or you're already experienced, our gym gives you
              the space and environment to keep pushing forward.
            </p>


            {/* POINTS */}
            <div className="about-points">

              <div>
                <span>01</span>
                <p>Strength & Fitness Training</p>
              </div>

              <div>
                <span>02</span>
                <p>Training For All Fitness Levels</p>
              </div>

              <div>
                <span>03</span>
                <p>Focused & Motivating Environment</p>
              </div>

            </div>


            <Link
              to="/about"
              className="btn btn-primary"
            >
              More About Us
            </Link>

          </div>

        </div>

      </section>


      {/*PROGRAMS PREVIEW*/}
      <section className="section programs-preview">

        <div className="container">

          <div className="section-heading">

            <div>

              <p className="section-tag">
                TRAINING
              </p>

              <h2 className="section-title">
                FIND YOUR
                <span> STRENGTH.</span>
              </h2>

            </div>

            <Link
              to="/programs"
              className="view-link"
            >
              View All →
            </Link>

          </div>


          <div className="program-grid">

            {/* PROGRAM 01 */}
            <article className="program-card">

              <span className="program-number">
                01
              </span>

              <div>

                <h3>
                  STRENGTH
                </h3>

                <p>
                  Build strength and muscle through
                  structured resistance training.
                </p>

                <Link to="/programs">
                  Explore Program →
                </Link>

              </div>

            </article>


            {/* PROGRAM 02 */}
            <article className="program-card program-highlight">

              <span className="program-number">
                02
              </span>

              <div>

                <h3>
                  FITNESS
                </h3>

                <p>
                  Improve your stamina, conditioning
                  and overall physical fitness.
                </p>

                <Link to="/programs">
                  Explore Program →
                </Link>

              </div>

            </article>


            {/* PROGRAM 03 */}
            <article className="program-card">

              <span className="program-number">
                03
              </span>

              <div>

                <h3>
                  WEIGHT LOSS
                </h3>

                <p>
                  Work towards a healthier physique
                  with consistent training and effort.
                </p>

                <Link to="/programs">
                  Explore Program →
                </Link>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* MEMBERSHIP PREVIEW*/}
      <section className="membership-preview">

        <div className="container membership-container">

          {/* TEXT */}
          <div className="membership-text">

            <p className="section-tag">
              MEMBERSHIP
            </p>

            <h2>
              FITNESS THAT
              <br />
              <span>FITS YOU.</span>
            </h2>

            <p>
              Choose a membership that works for you
              and start your fitness journey today.
            </p>

            <Link
              to="/contact"
              className="btn btn-primary"
            >
              Get Started
            </Link>

          </div>


          {/* PRICE CARD */}
          <div className="price-card">

            <div className="price-card-top">

              <span>
                POPULAR
              </span>

              <h3>
                MONTHLY
              </h3>

            </div>


            <div className="price">

              <strong>
                ₹600
              </strong>

              <span>
                / month
              </span>

            </div>


            <div className="price-divider"></div>


            <ul>

              <li>
                ✓ Gym Access
              </li>

              <li>
                ✓ Fitness Equipment
              </li>

              <li>
                ✓ Flexible Training
              </li>

            </ul>


            <Link
              to="/contact"
              className="price-link"
            >
              Join Now →
            </Link>

          </div>

        </div>

      </section>


      {/*GALLERY PREVIEW*/}
      <section className="section gallery-preview">

        <div className="container">

          <div className="section-heading">

            <div>

              <p className="section-tag">
                INSIDE SHIVA
              </p>

              <h2 className="section-title">
                FEEL THE
                <span> ENERGY.</span>
              </h2>

            </div>

            <Link
              to="/gallery"
              className="view-link"
            >
              View Gallery →
            </Link>

          </div>


          <div className="gallery-grid">

            {/* LARGE IMAGE */}
            <div className="gallery-item gallery-large">

              <img
                src="/images/gym interior .jpeg"
                alt="Shiva Multy Gym"
              />

            </div>


            {/* EQUIPMENT */}
            <div className="gallery-item">

              <img
                src="/images/rack.jpeg"
                alt="Gym equipment"
              />

            </div>


            {/* INTERIOR */}
            <div className="gallery-item">

              <img
                src="/images/interior 2.jpeg"
                alt="Gym training"
              />

            </div>

          </div>

        </div>

      </section>


      {/*FINAL CTA */}
      <section className="home-cta">

        <div className="cta-content">

          <p className="section-tag">
            SHIVA MULTY GYM
          </p>

          <h2>
            READY TO
            <span> GET STRONGER?</span>
          </h2>

          <p>
            Your fitness journey starts with one decision.
          </p>

          <Link
            to="/contact"
            className="btn btn-primary"
          >
            Contact Us
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;