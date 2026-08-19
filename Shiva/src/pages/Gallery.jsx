import { useEffect, useState } from "react";
import "./Gallery.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes
} from "react-icons/fa";


function Gallery() {

  const members = [
    {
      id: 1,
      images: [
        "/images/gallery/member1.jpg",
        "/images/gallery/member1p1.jpeg",
        "/images/gallery/member1p2.jpg",
      ],
    },
    {
      id: 2,
      images: [
        "/images/gallery/member2.jpeg",
        "/images/gallery/member2p1.jpeg",
        "/images/gallery/member2p2.jpeg",
      ],
    },
    {
      id: 3,
      images: [
        "/images/gallery/member3.jpeg",
        "/images/gallery/member3p1.jpeg",
        "/images/gallery/member3p2.jpeg",
      ],
    },
    {
      id: 4,
      images: [
        "/images/gallery/member4.jpeg",
        "/images/gallery/member4p1.jpeg",
        "/images/gallery/member4p2.jpeg",
      ],
    },
    {
      id: 5,
      images: [
        "/images/gallery/member5.jpeg",
        "/images/gallery/member5p1.jpeg",
        "/images/gallery/member5p2.jpeg",
      ],
    },
    {
      id: 6,
      images: [
        "/images/gallery/member6.jpeg",
        "/images/gallery/member6p1.jpeg",
        "/images/gallery/member6p2.jpeg",
      ],
    },
    {
      id: 7,
      images: [
        "/images/gallery/member7.jpeg",
        "/images/gallery/member7p1.jpeg",
        "/images/gallery/member7p2.jpeg",
      ],
    },
    {
      id: 8,
      images: [
        "/images/gallery/member8.jpeg",
        "/images/gallery/member8p1.jpeg",
        "/images/gallery/member8p2.jpeg",
      ],
    },
    {
      id: 9,
      images: [
        "/images/gallery/member9.jpeg",
        "/images/gallery/member9p1.jpeg",
        "/images/gallery/member9p2.jpeg",
      ],
    },
  ];


  const [availableImages, setAvailableImages] = useState({});

  const [currentImages, setCurrentImages] = useState(
    members.reduce((acc, member) => {
      acc[member.id] = 0;
      return acc;
    }, {})
  );

  const [selectedMember, setSelectedMember] = useState(null);

  const [selectedImage, setSelectedImage] = useState(0);


  /* CHECK WHICH IMAGES ACTUALLY EXIST */

  useEffect(() => {

    members.forEach((member) => {

      member.images.forEach((image) => {

        const img = new Image();

        img.onload = () => {

          setAvailableImages((prev) => ({

            ...prev,

            [member.id]: [
              ...(prev[member.id] || []),
              image,
            ].filter(
              (value, index, array) =>
                array.indexOf(value) === index
            ),

          }));

        };

        img.src = image;

      });

    });

  }, []);


  /* AUTOMATICALLY CHANGE IMAGES */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentImages((prev) => {

        const next = { ...prev };

        members.forEach((member) => {

          const images =
            availableImages[member.id] || [];

          if (images.length > 1) {

            next[member.id] =
              (prev[member.id] + 1) %
              images.length;

          }

        });

        return next;

      });

    }, 4000);

    return () => clearInterval(interval);

  }, [availableImages]);


  /* OPEN LIGHTBOX */

  function openMember(member) {

    setSelectedMember(member);

    setSelectedImage(0);

  }


  /* CLOSE LIGHTBOX */

  function closeGallery() {

    setSelectedMember(null);

  }


  /* NEXT IMAGE */

  function nextImage() {

    if (!selectedMember) return;

    const images =
      availableImages[selectedMember.id] || [];

    if (images.length === 0) return;

    setSelectedImage((prev) =>
      (prev + 1) % images.length
    );

  }


  /* PREVIOUS IMAGE */

  function previousImage() {

    if (!selectedMember) return;

    const images =
      availableImages[selectedMember.id] || [];

    if (images.length === 0) return;

    setSelectedImage((prev) =>
      (prev - 1 + images.length) %
      images.length
    );

  }


  return (
    <main className="gallery-page">


      {/* HERO */}

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


      {/* REELS */}

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


        {/* MEMBER COLLAGE */}

        <div className="member-grid">

          {members.map((member, index) => {

            const images =
              availableImages[member.id] || [];

            const image =
              images[currentImages[member.id] || 0] ||
              member.images[0];


            const labels = [
              "TRAIN HARD",
              "STAY CONSISTENT",
              "KEEP PUSHING",
              "NO EXCUSES",
              "ONE COMMUNITY",
              "KEEP PUSHING",
              "NO LIMITS",
              "STAY STRONG",
              "KEEP GRINDING",
            ];


            return (

              <div
                key={member.id}
                className={`member-photo ${
                  index === 0
                    ? "member-photo-large"
                    : ""
                } ${
                  index === 4
                    ? "member-photo-wide"
                    : ""
                }`}
                onClick={() => openMember(member)}
              >

              <div className="member-image-wrapper">

            <img
            key={image}
              src={image}
              alt={`Shiva Multy Gym member ${member.id}`}
              />

</div>
                <div className="member-photo-overlay">

                  <strong>
                    {labels[index]}
                  </strong>

                </div>

              </div>

            );

          })}

        </div>

      </section>


      {/* LIGHTBOX */}

      {selectedMember && (

        <div
          className="member-lightbox"
          onClick={closeGallery}
        >

         <button
  className="lightbox-close"
  onClick={closeGallery}
  aria-label="Close gallery"
>
  <FaTimes />
</button>


          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={
                (
                  availableImages[selectedMember.id] ||
                  [selectedMember.images[0]]
                )[selectedImage]
              }
              alt={`Shiva Multy Gym member ${selectedMember.id}`}
            />


            {(availableImages[selectedMember.id] || [])
              .length > 1 && (

              <>

                <button
        className="lightbox-arrow lightbox-prev"
        onClick={previousImage}
        aria-label="Previous image"
        >
        <FaChevronLeft />
        </button>


                <button
  className="lightbox-arrow lightbox-next"
  onClick={nextImage}
  aria-label="Next image"
>
  <FaChevronRight />
</button>


                <div className="lightbox-counter">

                  {selectedImage + 1}
                  {" / "}
                  {availableImages[selectedMember.id].length}

                </div>

              </>

            )}

          </div>

        </div>

      )}


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