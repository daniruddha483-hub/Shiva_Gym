import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiTarget,
  FiActivity,
  FiTrendingUp,
  FiUsers
} from "react-icons/fi";
import "./About.css";

function About() {
  return (
    <main className="about-page">

     
      <section className="about-hero">

        <div className="about-hero-bg">
          SHIVA
        </div>

        <div className="about-hero-content">

          <p className="about-tag">
            ABOUT SHIVA MULTY GYM
          </p>

          <h1>
            BUILT FOR
            <span> STRENGTH.</span>
          </h1>

          <p className="about-hero-description">
            A place where consistency becomes strength,
            discipline becomes a lifestyle, and every workout
            moves you one step closer to becoming better.
          </p>

          <Link to="/contact" className="about-hero-button">
            START YOUR JOURNEY
            <FiArrowUpRight />
          </Link>

        </div>

        <div className="about-hero-image">

          <img
            src="/images/interior 2.jpeg"
            alt="Shiva Multy Gym interior"
          />

          <div className="about-image-label">
            <strong>SHIVA</strong>
            <span>MULTY GYM</span>
          </div>

        </div>

      </section>

      <section className="about-story">

        <div className="about-story-image">

          <img
            src="/images/shiva.jpeg"
            alt="Training at Shiva Multy Gym"
          />

          <div className="story-number">
            <span>01</span>
            OUR STORY
          </div>

        </div>


        <div className="about-story-content">

          <p className="about-section-tag">
            WHO WE ARE
          </p>

          <h2>
            MORE THAN
            <span> A GYM.</span>
          </h2>

          <p>
            Shiva Multy Gym is built around a simple idea —
            becoming stronger starts with showing up.
          </p>

          <p>
            Whether your goal is to build muscle, improve
            your fitness, lose weight or simply become more
            confident in your body, our space is designed
            to keep you moving forward.
          </p>

          <div className="story-highlight">

            <span>
              CONSISTENCY
            </span>

            <strong>
              OVER
            </strong>

            <span>
              MOTIVATION.
            </span>

          </div>

        </div>

      </section>



      <section className="about-values">

        <div className="about-values-heading">

          <div>

            <p className="about-section-tag">
              OUR MINDSET
            </p>

            <h2>
              WHAT WE
              <span> BELIEVE.</span>
            </h2>

          </div>

          <p>
            Progress isn't about being perfect.
            It's about being consistent.
          </p>

        </div>


        <div className="values-grid">

          <article className="value-card">

            <div className="value-icon">
              <FiTarget />
            </div>

            <span className="value-number">
              01
            </span>

            <h3>
              DISCIPLINE
            </h3>

            <p>
              Show up even when motivation disappears.
              That's where real progress begins.
            </p>

          </article>


          <article className="value-card">

            <div className="value-icon">
              <FiActivity />
            </div>

            <span className="value-number">
              02
            </span>

            <h3>
              STRENGTH
            </h3>

            <p>
              Build physical strength while developing
              the mindset to push through challenges.
            </p>

          </article>


          <article className="value-card">

            <div className="value-icon">
              <FiTrendingUp />
            </div>

            <span className="value-number">
              03
            </span>

            <h3>
              PROGRESS
            </h3>

            <p>
              Small improvements every day eventually
              become massive transformations.
            </p>

          </article>


          <article className="value-card">

            <div className="value-icon">
              <FiUsers />
            </div>

            <span className="value-number">
              04
            </span>

            <h3>
              COMMUNITY
            </h3>

            <p>
              Train around people who push themselves
              and inspire you to do the same.
            </p>

          </article>

        </div>

      </section>


  

     <section className="about-stats">

  <div className="stat-item">

    <strong>
      5:00 - 9:00
    </strong>

    <span>
      MORNING
    </span>

  </div>


  <div className="stat-item">

    <strong>
      4:30 - 9:30
    </strong>

    <span>
      EVENING
    </span>

  </div>

        <div className="stat-item">

          <strong>
            7
          </strong>

          <span>
            DAYS A WEEK
          </span>

        </div>


        <div className="stat-item">

          <strong>
            100%
          </strong>

          <span>
            COMMITMENT
          </span>

        </div>

      </section>



      <section className="why-shiva">

        <div className="why-shiva-image">

          <img
            src="/images/group.jpeg"
            alt="Shiva Multy Gym"
          />

        </div>


        <div className="why-shiva-content">

          <p className="about-section-tag">
            WHY SHIVA
          </p>

          <h2>
            TRAIN WITH
            <span> PURPOSE.</span>
          </h2>

          <div className="why-list">

            <div>
              <span>01</span>
              <p>
                A focused environment built for serious training.
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                Training options for different fitness goals.
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                A community that keeps you accountable.
              </p>
            </div>

            <div>
              <span>04</span>
              <p>
                A mindset focused on long-term progress.
              </p>
            </div>

          </div>

        </div>

      </section>


      <section className="about-cta">

        <div>

          <p className="about-section-tag">
            YOUR NEXT CHAPTER
          </p>

          <h2>
            READY TO
            <span> GET STRONGER?</span>
          </h2>

          <p>
            Stop waiting for the perfect time.
            Start with your next workout.
          </p>

          <Link to="/contact" className="about-cta-button">
            JOIN SHIVA
            <FiArrowUpRight />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default About;