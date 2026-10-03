import { useEffect, useState } from "react";

import heroImage from "../../assets/images/hero.webp";
import heroImage2 from "../../assets/images/hero-2.webp";
import heroImage3 from "../../assets/images/hero-3.webp";

const images = [
  heroImage,
  heroImage2,
  heroImage3,
];

const features = [
  {
    title: "Original designs",
    description: "Created by FAQIRI",
    icon: "scissors",
  },
  {
    title: "Thoughtful sizing",
    description: "Standard and custom support",
    icon: "shirt",
  },
  {
    title: "Detailed galleries",
    description: "See every finish",
    icon: "check",
  },
  {
    title: "Worldwide enquiries",
    description: "Order support by message",
    icon: "truck",
  },
];


/* ========================================================= */
/* ======================= ICONS ============================ */
/* ========================================================= */

function FeatureIcon({ type }) {

  if (type === "scissors") {
    return (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M20 4 8.12 15.88" />
        <path d="M14.47 14.47 20 20" />
        <path d="M8.12 8.12 12 12" />
      </svg>
    );
  }


  if (type === "shirt") {
    return (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M9.5 3.2 12 5l2.5-1.8 5.1 2.5c.8.4 1.3 1.2 1.3 2.1v2.5h-3v10.2c0 .6-.4 1-1 1H7.1c-.6 0-1-.4-1-1V10.3h-3V7.8c0-.9.5-1.7 1.3-2.1l5.1-2.5Z" />

        <path
          d="M9.5 3.2 8 8.5c1.2 1 2.6 1.5 4 1.5s2.8-.5 4-1.5l-1.5-5.3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    );
  }


  if (type === "check") {
    return (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </svg>
    );
  }


  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h3l4 4v2h-7z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </svg>
  );
}


/* ========================================================= */
/* ==================== FEATURE ITEM ======================== */
/* ========================================================= */

function FeatureItem({ feature }) {

  return (
    <div
      className="
        flex
        min-w-[230px]
        shrink-0
        flex-col
        items-center
        justify-center
        px-6
        py-5
        text-center
        sm:min-w-[270px]
        lg:min-w-[25vw]
      "
    >

      {/* ICON */}

      <div
        className="
          mb-2.5
          text-[#b78932]
        "
      >
        <FeatureIcon type={feature.icon} />
      </div>


      {/* TITLE */}

      <h3
        className="
          whitespace-nowrap
          text-[15px]
          font-semibold
          leading-tight
          text-[#171613]
          sm:text-[16px]
          lg:text-[17px]
        "
      >
        {feature.title}
      </h3>


      {/* DESCRIPTION */}

      <p
        className="
          mt-1
          whitespace-nowrap
          text-[11px]
          leading-relaxed
          text-[#817a70]
          sm:text-[12px]
          lg:text-[13px]
        "
      >
        {feature.description}
      </p>

    </div>
  );
}


/* ========================================================= */
/* ======================== HERO ============================ */
/* ========================================================= */

export default function Hero() {

  const [currentImage, setCurrentImage] = useState(0);
  const [animation, setAnimation] = useState("enter");


  /* ========================================================= */
  /* ================= IMAGE SLIDER ========================== */
  /* ========================================================= */

  useEffect(() => {

    const stayTimer = setTimeout(() => {
      setAnimation("exit");
    }, 3000);


    const nextTimer = setTimeout(() => {

      setCurrentImage(
        (prev) => (prev + 1) % images.length
      );

      setAnimation("enter");

    }, 3900);


    return () => {

      clearTimeout(stayTimer);
      clearTimeout(nextTimer);

    };

  }, [currentImage]);


  return (

    <section
      className="
        relative
        overflow-hidden
        bg-[#f7f5f0]
      "
    >

      {/* ================================================= */}
      {/* ================= BACKGROUND ==================== */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#e9dfce]
          opacity-40
          blur-3xl
        "
      />


      <div
        className="
          mx-auto
          max-w-[1450px]
          px-5
          sm:px-8
          lg:px-10
        "
      >

        <div
          className="
            grid
            min-h-[calc(100vh-86px)]
            grid-cols-1
            items-center
            gap-12
            py-12
            lg:grid-cols-[0.85fr_1.15fr]
            lg:gap-16
            lg:py-14
          "
        >

          {/* ================================================= */}
          {/* ================= LEFT CONTENT =================== */}
          {/* ================================================= */}

          <div
            className="
              w-full
              max-w-[610px]
            "
          >

            {/* ================= BRAND LABEL ================= */}

            <div
              className="
                mb-7
                flex
                items-center
                gap-3
              "
            >

              <span
                className="
                  h-px
                  w-10
                  bg-[#b78932]
                "
              />

              <span
                className="
                  whitespace-nowrap
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#9a712c]
                  sm:text-[12px]
                "
              >
                Made in Afghanistan
              </span>

            </div>


            {/* ================= MAIN HEADING ================= */}

            <h1
              className="
                max-w-[610px]
                text-[56px]
                font-semibold
                leading-[0.94]
                tracking-[-0.045em]
                text-[#24231f]
                sm:text-[68px]
                md:text-[76px]
                lg:text-[68px]
                xl:text-[82px]
              "
            >

              <span className="block">
                Afghan artistry,
              </span>

              <span
                className="
                  block
                  text-[#b78932]
                "
              >
                made to be worn.
              </span>

            </h1>


            {/* ================= DECORATIVE LINE ================= */}

            <div
              className="
                mt-7
                flex
                items-center
                gap-2.5
              "
            >

              <span
                className="
                  h-[2px]
                  w-16
                  bg-[#b78932]
                "
              />

              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#b78932]
                "
              />

            </div>


            {/* ================= DESCRIPTION ================= */}

            <p
              className="
                mt-7
                max-w-[545px]
                text-[16px]
                font-normal
                leading-[1.75]
                text-[#625d55]
                sm:text-[17px]
                lg:text-[18px]
              "
            >
              Hand-finished Afghan clothing created with rich textiles,
              traditional detail, and a modern silhouette — available
              ready-made or tailored for you.
            </p>


            {/* ================================================= */}
            {/* ===================== BUTTONS =================== */}
            {/* ================================================= */}

            <div
              className="
                mt-9
                flex
                flex-row
                flex-nowrap
                items-center
                gap-3
              "
            >

              {/* ================= PRIMARY BUTTON ================= */}

              <a
                href="/shop"
                className="
                  group
                  relative
                  inline-flex
                  h-[56px]
                  min-w-[195px]
                  shrink-0
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-[5px]
                  border
                  border-[#24231f]
                  bg-[#24231f]
                  px-7
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  shadow-[0_10px_25px_rgba(36,35,31,0.13)]
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-1
                  hover:border-[#b78932]
                  hover:shadow-[0_16px_35px_rgba(183,137,50,0.20)]
                "
              >

                <span
                  className="
                    absolute
                    inset-0
                    translate-y-full
                    bg-[#b78932]
                    transition-transform
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:translate-y-0
                  "
                />

                <span
                  className="
                    relative
                    z-10
                    whitespace-nowrap
                  "
                >
                  Shop the collection
                </span>


                <svg
                  className="
                    relative
                    z-10
                    h-4
                    w-4
                    shrink-0
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                  "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h13" />
                  <path d="m13 6 6 6-6 6" />
                </svg>

              </a>


              {/* ================= SECONDARY BUTTON ================= */}

              <a
                href="/contact"
                className="
                  group
                  relative
                  inline-flex
                  h-[56px]
                  min-w-[215px]
                  shrink-0
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-[5px]
                  border
                  border-[#cdbb99]
                  bg-[#f7f5f0]
                  px-7
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.09em]
                  text-[#403c36]
                  shadow-[0_6px_18px_rgba(40,30,20,0.035)]
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-1
                  hover:border-[#b78932]
                  hover:bg-white
                  hover:text-[#9a712c]
                  hover:shadow-[0_14px_30px_rgba(40,30,20,0.08)]
                "
              >

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#b78932]
                    transition-all
                    duration-500
                    ease-out
                    group-hover:w-full
                  "
                />

                <span
                  className="
                    whitespace-nowrap
                  "
                >
                  Request custom tailoring
                </span>


                <svg
                  className="
                    h-4
                    w-4
                    shrink-0
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                  "
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h13" />
                  <path d="m13 6 6 6-6 6" />
                </svg>

              </a>

            </div>


            {/* ================================================= */}
            {/* ===================== FEATURES ================== */}
            {/* ================================================= */}

            <div
              className="
                mt-11
                grid
                max-w-[570px]
                grid-cols-3
                border-t
                border-[#ded7cb]
                pt-7
              "
            >

              {/* FEATURE 01 */}

              <div
                className="
                  pr-5
                "
              >

                <p
                  className="
                    text-[15px]
                    font-semibold
                    leading-tight
                    text-[#292824]
                    sm:text-[16px]
                    lg:text-[17px]
                  "
                >
                  Hand-finished
                </p>

                <p
                  className="
                    mt-2
                    text-[12px]
                    leading-[1.5]
                    text-[#777067]
                    sm:text-[13px]
                    lg:text-[14px]
                  "
                >
                  Crafted with care
                </p>

              </div>


              {/* FEATURE 02 */}

              <div
                className="
                  border-l
                  border-[#ded7cb]
                  px-5
                "
              >

                <p
                  className="
                    text-[15px]
                    font-semibold
                    leading-tight
                    text-[#292824]
                    sm:text-[16px]
                    lg:text-[17px]
                  "
                >
                  Custom
                </p>

                <p
                  className="
                    mt-2
                    text-[12px]
                    leading-[1.5]
                    text-[#777067]
                    sm:text-[13px]
                    lg:text-[14px]
                  "
                >
                  Made for your fit
                </p>

              </div>


              {/* FEATURE 03 */}

              <div
                className="
                  border-l
                  border-[#ded7cb]
                  pl-5
                "
              >

                <p
                  className="
                    text-[15px]
                    font-semibold
                    leading-tight
                    text-[#292824]
                    sm:text-[16px]
                    lg:text-[17px]
                  "
                >
                  Worldwide
                </p>

                <p
                  className="
                    mt-2
                    text-[12px]
                    leading-[1.5]
                    text-[#777067]
                    sm:text-[13px]
                    lg:text-[14px]
                  "
                >
                  Orders available
                </p>

              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* ==================== RIGHT IMAGE ================= */}
          {/* ================================================= */}

          <div
            className="
              relative
              min-h-[570px]
              sm:min-h-[650px]
            "
          >

            <div
              className="
                absolute
                right-0
                top-0
                h-[500px]
                w-[72%]
                sm:h-[600px]
                lg:h-[650px]
              "
            >

              <div
                key={`${currentImage}-${animation}`}
                className={`
                  absolute
                  inset-0
                  overflow-hidden
                  rounded-[32px]
                  shadow-[0_25px_60px_rgba(40,30,20,0.15)]
                  hero-slide-${animation}
                `}
              >

                <img
                  src={images[currentImage]}
                  alt="FAQIRI Collection"
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />


                {/* IMAGE GRADIENT */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/30
                    via-transparent
                    to-transparent
                  "
                />


                {/* IMAGE TEXT */}

                <div
                  className="
                    absolute
                    bottom-7
                    left-7
                    z-10
                    text-white
                  "
                >

                  <p
                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      opacity-80
                    "
                  >
                    FAQIRI
                  </p>

                  <p
                    className="
                      mt-1
                      font-serif
                      text-[20px]
                    "
                  >
                    New Collection
                  </p>

                </div>

              </div>

            </div>


            {/* ================================================= */}
            {/* ===================== INDICATORS ================= */}
            {/* ================================================= */}

            <div
              className="
                absolute
                right-0
                top-[50%]
                z-20
                flex
                -translate-y-1/2
                flex-col
                gap-3
              "
            >

              {images.map((_, index) => (

                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >

                  <span
                    className={`
                      text-[10px]
                      transition-colors
                      duration-300
                      ${
                        index === currentImage
                          ? "text-[#a77d31]"
                          : "text-[#9b958b]"
                      }
                    `}
                  >
                    0{index + 1}
                  </span>


                  <span
                    className={`
                      h-px
                      transition-all
                      duration-700
                      ${
                        index === currentImage
                          ? "w-7 bg-[#b78932]"
                          : "w-3 bg-[#cfc6b8]"
                      }
                    `}
                  />

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>


      {/* ========================================================= */}
      {/* ================= MOVING FEATURE BAR ==================== */}
      {/* ========================================================= */}

      <div
        className="
          relative
          w-full
          overflow-hidden
          border-y
          border-[#e8e1d6]
          bg-[#fbfaf7]
        "
      >

        <div
          className="
            feature-marquee
            flex
            w-max
            hover:[animation-play-state:paused]
          "
        >

          {/* ================= GROUP ONE ================= */}

          <div className="flex">

            {features.map((feature, index) => (

              <div
                key={`first-${index}`}
                className="
                  border-r
                  border-[#e8e1d6]
                "
              >

                <FeatureItem feature={feature} />

              </div>

            ))}

          </div>


          {/* ================= GROUP TWO ================= */}

          <div className="flex">

            {features.map((feature, index) => (

              <div
                key={`second-${index}`}
                className="
                  border-r
                  border-[#e8e1d6]
                "
              >

                <FeatureItem feature={feature} />

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* ===================================================== */}
      {/* ====================== ANIMATIONS =================== */}
      {/* ===================================================== */}

      <style>{`

        /* ================================================= */
        /* ================= IMAGE ENTER =================== */
        /* ================================================= */

        @keyframes slideFromRight {

          0% {
            transform: translateX(110%);
            opacity: 0;
          }

          100% {
            transform: translateX(0);
            opacity: 1;
          }

        }


        /* ================================================= */
        /* ================= IMAGE EXIT ==================== */
        /* ================================================= */

        @keyframes slideToLeft {

          0% {
            transform: translateX(0);
            opacity: 1;
          }

          100% {
            transform: translateX(-110%);
            opacity: 0;
          }

        }


        .hero-slide-enter {

          animation:
            slideFromRight
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;

        }


        .hero-slide-exit {

          animation:
            slideToLeft
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;

        }


        /* ================================================= */
        /* ================= FEATURE MARQUEE =============== */
        /* ================================================= */

        .feature-marquee {

          animation:
            featureMarquee
            24s
            linear
            infinite;

          will-change: transform;

        }


        @keyframes featureMarquee {

          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }

        }


        /* ================================================= */
        /* ================ REDUCED MOTION ================= */
        /* ================================================= */

        @media (prefers-reduced-motion: reduce) {

          .feature-marquee,
          .hero-slide-enter,
          .hero-slide-exit {

            animation: none !important;

          }

        }

      `}</style>

    </section>

  );
}