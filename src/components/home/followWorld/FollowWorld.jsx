
import { useEffect, useState } from "react";

// =====================================
// PRODUCT IMAGES
// =====================================
import photo1 from "../../../assets/images/products/FC-026-1789479758-1.png";

import photo2 from "../../../assets/images/products/Custom Designs.jpeg";

import photo3 from "../../../assets/images/products/FC-022-1789481127-1.png";

import photo4 from "../../../assets/images/products/Hijab and Chapan.jpg";

// REPLACED BLUE DRESS IMAGE
import photo5 from "../../../assets/images/products/FC-028-1789479886-1.png";

import photo6 from "../../../assets/images/products/Women's Occasion Dresses.webp";

// =====================================
// GALLERY DATA
// =====================================
const photos = [
  { id: 1, image: photo1 },
  { id: 2, image: photo2 },
  { id: 3, image: photo3 },
  { id: 4, image: photo4 },
  { id: 5, image: photo5 },
  { id: 6, image: photo6 },
];

// =====================================
// LANGUAGE
// =====================================
const getLanguage = () => {
  const stored =
    localStorage.getItem("language") ||
    localStorage.getItem("lang");

  if (stored === "fa" || stored === "en") {
    return stored;
  }

  return document.documentElement.lang === "en"
    ? "en"
    : "fa";
};

// =====================================
// FOLLOW WORLD COMPONENT
// =====================================
export default function FollowWorld({ language }) {
  const [detectedLanguage, setDetectedLanguage] =
    useState(getLanguage);

  useEffect(() => {
    const updateLanguage = () => {
      setDetectedLanguage(getLanguage());
    };

    const observer = new MutationObserver(
      updateLanguage
    );

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    window.addEventListener(
      "storage",
      updateLanguage
    );

    window.addEventListener(
      "languagechange",
      updateLanguage
    );

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "storage",
        updateLanguage
      );

      window.removeEventListener(
        "languagechange",
        updateLanguage
      );
    };
  }, []);

  const isFa =
    (language || detectedLanguage) === "fa";

  return (
    <section
      dir={isFa ? "rtl" : "ltr"}
      className="
        w-full
        overflow-hidden
        bg-white
        py-10
        transition-colors
        duration-500
        dark:bg-[#0A0A0A]
        sm:py-12
        lg:py-14
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* =====================================
            SECTION HEADER
        ===================================== */}
        <div
          className="
            mb-7
            text-center
            sm:mb-9
            lg:mb-10
          "
        >
          {/* SMALL TITLE */}
          <p
            className="
              mb-2
              text-[10px]
              font-medium
              tracking-[0.2em]
              text-neutral-500
              dark:text-neutral-400
            "
          >
            {isFa
              ? "پوشاک فقیری"
              : "FAQIRI OFFICIAL"}
          </p>

          {/* MAIN TITLE */}
          <h2
            key={isFa ? "fa" : "en"}
            className={`
              mx-auto
              text-center
              font-semibold
              text-[#111111]
              dark:text-white
              ${
                isFa
                  ? "text-[22px] leading-[1.8] sm:text-[30px] lg:text-[40px]"
                  : "text-[27px] leading-[1.3] sm:text-[35px] lg:text-[42px]"
              }
            `}
            style={{
              fontFamily: isFa
                ? "inherit"
                : "Georgia, serif",
              animation:
                "faqiriFollowFade 0.5s ease both",
            }}
          >
            {isFa
              ? "دنیای پوشاک فقیری را دنبال کنید"
              : "Follow Our World"}
          </h2>
        </div>

        {/* =====================================
            IMAGE GALLERY
        ===================================== */}
        <div
          dir="ltr"
          className="
            faqiri-follow-gallery
            flex
            w-full
            items-start
            gap-3
            overflow-x-auto
            snap-x
            snap-mandatory
            scroll-smooth
            pb-1
            sm:gap-4
            lg:grid
            lg:grid-cols-6
            lg:overflow-visible
            lg:pb-0
          "
        >
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="
                faqiri-follow-card
                group
                relative
                min-w-0
                shrink-0
                snap-start
                overflow-hidden
                rounded-[14px]
                bg-neutral-100
                dark:bg-[#171717]
                sm:rounded-[17px]
                lg:rounded-[18px]
              "
            >
              {/* ORIGINAL IMAGE RATIO */}
              <img
                src={photo.image}
                alt={`Faqiri Fashion Collection ${
                  index + 1
                }`}
                loading="lazy"
                draggable={false}
                className="
                  block
                  h-auto
                  w-full
                  max-w-full
                  select-none
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-[1.025]
                "
              />

              {/* HOVER EFFECT */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-black/0
                  transition-colors
                  duration-500
                  group-hover:bg-black/5
                "
              />
            </div>
          ))}
        </div>
      </div>

      {/* =====================================
          CUSTOM STYLES
      ===================================== */}
      <style>{`
        .faqiri-follow-gallery {
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-x: contain;
        }

        .faqiri-follow-gallery::-webkit-scrollbar {
          display: none;
        }

        .faqiri-follow-card {
          flex: 0 0 calc((100% - 12px) / 2);
        }

        .faqiri-follow-card img {
          display: block;
          width: 100%;
          height: auto;
          -webkit-user-drag: none;
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .faqiri-follow-card {
            flex: 0 0 calc((100% - 32px) / 3);
          }
        }

        @media (min-width: 1024px) {
          .faqiri-follow-card {
            flex: initial;
            width: 100%;
          }
        }

        @keyframes faqiriFollowFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .faqiri-follow-gallery {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </section>
  );
}
