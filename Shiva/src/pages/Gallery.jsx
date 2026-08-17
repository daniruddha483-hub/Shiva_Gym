import "./Gallery.css";

function Gallery() {
  return (
    <main className="gallery-page">

     

      <section className="gallery-hero">

        <div className="gallery-hero-content">

          <p className="gallery-tag">
            SHIVA MULTY GYM / GALLERY
          </p>

          <h1>
            TRAIN.<br />
            <span>GRIND.</span><br />
            REPEAT.
          </h1>

          <p>
            A glimpse into the energy, dedication and community
            that makes Shiva Multy Gym what it is.
          </p>

        </div>

      </section>


   

      <section className="gallery-reels">

        <div className="gallery-section-heading">

          <div>
            <p className="gallery-small-tag">
              FROM THE GYM
            </p>

            <h2>
              GYM <span>REELS</span>
            </h2>
          </div>

          <p>
            Real training. Real people. Real progress.
            Check out some moments from Shiva Multy Gym.
          </p>

        </div>


        <div className="reels-grid">

          

          <div className="reel-card">

            <div className="reel-instagram-border">

              <div className="reel-video-wrapper">

                <video
                  src="/images/gallery/reel1.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="reel-video"
                />

                <div className="reel-overlay">

                  <span className="reel-icon">
                    ▶
                  </span>

                  <span>
                    SHIVA MULTY GYM
                  </span>

                </div>

              </div>

            </div>

            <div className="reel-info">

              <h3>
                BUILT, NOT GIVEN
              </h3>

              <p>
                Progress takes time. The difference comes from
                staying consistent.
              </p>

            </div>

          </div>


          <div className="reel-card">

            <div className="reel-instagram-border">

              <div className="reel-video-wrapper">

                <video
                  src="/images/gallery/reel2.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="reel-video"
                />

                <div className="reel-overlay">

                  <span className="reel-icon">
                    ▶
                  </span>

                  <span>
                    SHIVA MULTY GYM
                  </span>

                </div>

              </div>

            </div>

            <div className="reel-info">

              <h3>
                BUILT THROUGH CONSISTENCY
              </h3>

              <p>
                Every workout counts. Every session takes you
                one step closer to your goal.
              </p>

            </div>

          </div>

        </div>


        <div className="instagram-button-wrapper">

          <a
            href="https://www.instagram.com/shiva_multi_gym/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-button"
          >
            <span>◎</span>
            VISIT OUR INSTAGRAM
          </a>

        </div>

      </section>


      <section className="members-gallery">

        <div className="gallery-section-heading members-heading">

          <div>

            <p className="gallery-small-tag">
              OUR COMMUNITY
            </p>

            <h2>
              MEMBERS IN <span>ACTION</span>
            </h2>

          </div>

          <p>
            From beginners taking their first step to experienced
            members pushing their limits, our gym is built around
            people who show up and put in the work.
          </p>

        </div>


        <div className="member-grid">

          <div className="member-photo member-photo-large">

            <img
              src="/images/gallery/member1.jpg"
              alt="Shiva Multy Gym member training"
            />

            <div className="member-photo-overlay">
              <strong>TRAIN HARD</strong>
            </div>

          </div>


          <div className="member-photo">

            <img
              src="/images/gallery/member2.jpeg"
              alt="Shiva Multy Gym member working out"
            />

            <div className="member-photo-overlay">
              <strong>STAY CONSISTENT</strong>
            </div>

          </div>


          <div className="member-photo">

            <img
              src="/images/gallery/member3.jpeg"
              alt="Shiva Multy Gym member training"
            />

            <div className="member-photo-overlay">
              <strong>KEEP PUSHING</strong>
            </div>

          </div>


          <div className="member-photo">

            <img
              src="/images/gallery/member4.jpeg"
              alt="Shiva Multy Gym member exercising"
            />

            <div className="member-photo-overlay">
              <strong>NO EXCUSES</strong>
            </div>

          </div>


          <div className="member-photo member-photo-wide">

            <img
              src="/images/gallery/member5.jpeg"
              alt="Shiva Multy Gym members training"
            />

            <div className="member-photo-overlay">
              <strong>ONE COMMUNITY</strong>
            </div>

          </div>


          <div className="member-photo">

            <img
              src="/images/gallery/member6.jpeg"
              alt="Shiva Multy Gym member training"
            />

            <div className="member-photo-overlay">
              <strong>KEEP PUSHING</strong>
            </div>

          </div>


          <div className="member-photo">

            <img
              src="/images/gallery/member7.jpeg"
              alt="Shiva Multy Gym member training"
            />

            <div className="member-photo-overlay">
              <strong>NO LIMITS</strong>
            </div>

          </div>



          <div className="member-photo">

            <img
              src="/images/gallery/member8.jpeg"
              alt="Shiva Multy Gym member training"
            />

            <div className="member-photo-overlay">
              <strong>STAY STRONG</strong>
            </div>

          </div>

          <div className="member-photo">

            <img
              src="/images/gallery/member9.jpeg"
              alt="Shiva Multy Gym member training"
            />

            <div className="member-photo-overlay">
              <strong>KEEP GRINDING</strong>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="gallery-cta">

        <div>

          <p className="gallery-small-tag">
            YOUR TURN
          </p>

          <h2>
            BE PART OF<br />
            THE <span>GRIND.</span>
          </h2>

          <p>
            Stop watching. Start training.
            Come be part of the Shiva Multy Gym community.
          </p>

          <a
            href="/contact"
            className="gallery-cta-button"
          >
            JOIN SHIVA
          </a>

        </div>

      </section>

    </main>
  );
}

export default Gallery;