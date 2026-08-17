import "./Contact.css";

import {
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaExternalLinkAlt,
  FaArrowRight
} from "react-icons/fa";

function Contact() {
  return (
    <main className="contact-page">


      <section className="contact-hero">

        <div className="contact-hero-content">

          <p className="contact-tag">
            SHIVA MULTY GYM / CONTACT
          </p>

          <h1>
            LET'S
            <br />
            <span>CONNECT.</span>
          </h1>

          <p>
            Have questions about memberships, timings or training?
            Get in touch with Shiva Multy Gym and take the first
            step toward your fitness journey.
          </p>

        </div>

      </section>


      {/* CONTACT CARDS */}

      <section className="contact-cards-section">

        <div className="contact-section-heading">

          <div>
            <p className="contact-small-tag">
              GET IN TOUCH
            </p>

            <h2>
              REACH
              <br />
              <span>SHIVA.</span>
            </h2>
          </div>

          <p>
            Whether you're new to training or already part of our
            community, we're always ready to hear from you.
          </p>

        </div>


        <div className="contact-card-grid">

          {/* WHATSAPP */}

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >

            <div className="contact-card-icon whatsapp-icon">
              <FaWhatsapp />
            </div>

            <div className="contact-card-content">

              <span>WHATSAPP</span>

              <h3>
                Message the gym
              </h3>

              <p>
                Ask about memberships, timings and training.
              </p>

            </div>

            <FaExternalLinkAlt className="contact-card-arrow" />

          </a>


       

          <a
            href="https://www.instagram.com/shiva_multi_gym/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >

            <div className="contact-card-icon instagram-icon">
              <FaInstagram />
            </div>

            <div className="contact-card-content">

              <span>INSTAGRAM</span>

              <h3>
                Follow our journey
              </h3>

              <p>
                Reels, updates and moments from the gym.
              </p>

            </div>

            <FaExternalLinkAlt className="contact-card-arrow" />

          </a>


          {/* PHONE */}

          <a
            href="tel:+919980770177"
            className="contact-card"
          >

            <div className="contact-card-icon phone-icon">
              <FaPhoneAlt />
            </div>

            <div className="contact-card-content">

              <span>CALL US</span>

              <h3>
                Talk to the gym
              </h3>

              <p>
                Get your questions answered directly.
              </p>

            </div>

            <FaArrowRight className="contact-card-arrow" />

          </a>


          {/* EMAIL */}

          <a
            href="mailto:"
            className="contact-card"
          >

            <div className="contact-card-icon email-icon">
              <FaEnvelope />
            </div>

            <div className="contact-card-content">

              <span>EMAIL</span>

              <h3>
                Send us a message
              </h3>

              <p>
                Reach out to Shiva Multy Gym for enquiries.
              </p>

            </div>

            <FaArrowRight className="contact-card-arrow" />

          </a>

        </div>

      </section>


      <section className="contact-location-section">

        <div className="location-heading">

          <p className="contact-small-tag">
            FIND US
          </p>

          <h2>
            TRAIN
            <br />
            <span>WITH US.</span>
          </h2>

          <p>
            Visit Shiva Multy Gym at BC Road and become part of
            our growing fitness community.
          </p>

        </div>


        <a
          href="https://maps.app.goo.gl/vvmbawD6n1fWztQn9"
          target="_blank"
          rel="noopener noreferrer"
          className="location-card"
        >

          <div className="location-card-top">

            <div className="location-icon-box">
              <FaMapMarkerAlt />
            </div>

            <FaExternalLinkAlt className="location-arrow" />

          </div>

          <div>

            <span className="location-label">
              OUR LOCATION
            </span>

            <h3>
              BC ROAD
            </h3>

            <p>
              Mangaluru, Karnataka
            </p>

          </div>

          <div className="location-button">
            OPEN IN GOOGLE MAPS
            <FaArrowRight />
          </div>

        </a>

      </section>


      {/* TIMINGS */}

      <section className="contact-timings-section">

        <div className="timings-heading">

          <p className="contact-small-tag">
            WHEN TO TRAIN
          </p>

          <h2>
            GYM
            <br />
            <span>TIMINGS.</span>
          </h2>

        </div>


        <div className="timings-card">

          <div className="timings-icon">
            <FaClock />
          </div>


          <div className="timing-item">

            <span>
              MORNING
            </span>

            <strong>
              05:00 - 09:00
            </strong>

          </div>


          <div className="timing-line"></div>


          <div className="timing-item">

            <span>
              EVENING
            </span>

            <strong>
              04:30 - 09:30
            </strong>

          </div>

        </div>

      </section>



      <section className="contact-final">

        <div>

          <p className="contact-small-tag">
            SHIVA MULTY GYM
          </p>

          <h2>
            YOUR
            <br />
            <span>TURN.</span>
          </h2>

          <p>
            Stop waiting for the perfect time.
            Start training, stay consistent and build yourself
            one session at a time.
          </p>

          <div className="contact-final-buttons">

            <a
              href="https://wa.me/9980770177"
              target="_blank"
              rel="noopener noreferrer"
              className="final-primary"
            >
              <FaWhatsapp />
              MESSAGE US
            </a>

            <a
              href="https://www.instagram.com/shiva_multi_gym/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="final-secondary"
            >
              <FaInstagram />
              FOLLOW US
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;