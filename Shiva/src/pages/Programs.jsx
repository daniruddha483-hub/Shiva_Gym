import { Link } from "react-router-dom";
import "./Programs.css";

function Programs() {
  return (
    <main className="programs-page">

      {/* HERO */}

      <section className="programs-hero">

        <div className="programs-hero-content">

          <p className="programs-tag">
            TRAIN WITH PURPOSE
          </p>

          <h1>
            FIND YOUR
            <span> STRENGTH.</span>
          </h1>

          <p>
            Whether you want to build strength, improve your fitness,
            or work towards a healthier physique, our training programs
            are designed to keep you moving forward.
          </p>

        </div>

      </section>


      {/* PROGRAMS */}

      <section className="programs-section">

        <div className="programs-heading">

          <div>
            <p className="programs-tag">
              OUR PROGRAMS
            </p>

            <h2>
              TRAIN.
              <span> IMPROVE.</span>
              <br />
              REPEAT.
            </h2>
          </div>

          <p className="programs-heading-text">
            Choose the training style that matches your goals
            and start building consistency.
          </p>

        </div>


        <div className="programs-list">

         

          <article className="program-detail">

            <div className="program-detail-number">
              01
            </div>

            <div className="program-detail-content">

              <p className="program-small-tag">
                BUILD POWER
              </p>

              <h3>
                STRENGTH
              </h3>

              <p>
                Build muscle, increase strength and develop a stronger
                foundation through structured resistance training.
              </p>

              <ul>
                <li>Resistance training</li>
                <li>Muscle building</li>
                <li>Progressive workouts</li>
                <li>Strength development</li>
              </ul>

              <Link to="/contact" className="program-button">
                START TRAINING →
              </Link>

            </div>

            <div className="program-detail-image">
              <img
                src="/images/strength.jpg"
                alt="Strength training"
              />
            </div>

          </article>


       

          <article className="program-detail program-detail-dark">

            <div className="program-detail-number">
              02
            </div>

            <div className="program-detail-content">

              <p className="program-small-tag">
                STAY ACTIVE
              </p>

              <h3>
                FITNESS
              </h3>

              <p>
                Improve stamina, conditioning and overall fitness
                with workouts designed to keep your body active.
              </p>

              <ul>
                <li>Cardio conditioning</li>
                <li>Endurance training</li>
                <li>Full-body workouts</li>
                <li>Improved stamina</li>
              </ul>

              <Link to="/contact" className="program-button">
                START TRAINING →
              </Link>

            </div>

            <div className="program-detail-image">
              <img
                src="/images/fitguy.jpg"
                alt="Fitness training"
              />
            </div>

          </article>



          <article className="program-detail">

            <div className="program-detail-number">
              03
            </div>

            <div className="program-detail-content">

              <p className="program-small-tag">
                GET LEANER
              </p>

              <h3>
                WEIGHT LOSS
              </h3>

              <p>
                Work towards a healthier physique through consistent
                training, movement and disciplined workouts.
              </p>

              <ul>
                <li>Calorie-burning workouts</li>
                <li>Cardio training</li>
                <li>Functional exercises</li>
                <li>Consistent conditioning</li>
              </ul>

              <Link to="/contact" className="program-button">
                START TRAINING →
              </Link>

            </div>

            <div className="program-detail-image">
              <img
                src="/images/weightloss.jpg"
                alt="Weight loss training"
              />
            </div>

          </article>

        </div>

      </section>




      <section className="program-benefits">

        <div className="program-benefits-heading">

          <p className="programs-tag">
            WHY TRAIN WITH US
          </p>

          <h2>
            MORE THAN
            <span> A WORKOUT.</span>
          </h2>

        </div>


        <div className="benefits-grid">

          <div className="benefit-card">

            <span>01</span>

            <h3>
              CONSISTENCY
            </h3>

            <p>
              Build a training routine that keeps you progressing
              week after week.
            </p>

          </div>


          <div className="benefit-card">

            <span>02</span>

            <h3>
              DISCIPLINE
            </h3>

            <p>
              Stay committed to your goals and make every workout
              count.
            </p>

          </div>


          <div className="benefit-card">

            <span>03</span>

            <h3>
              PROGRESS
            </h3>

            <p>
              Track your effort, challenge yourself and become
              stronger over time.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="programs-cta">

        <div>

          <p className="programs-tag">
            READY TO START?
          </p>

          <h2>
            YOUR NEXT
            <span> REP</span>
            <br />
            STARTS HERE.
          </h2>

          <p>
            Stop waiting for the perfect time.
            Start training today.
          </p>

          <Link to="/contact" className="program-cta-button">
            JOIN SHIVA →
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Programs;