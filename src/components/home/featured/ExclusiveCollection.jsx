
import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";

import dressGreen from "../../../assets/images/exclusive/FC-031-1789480061-1.png";
import dressTraditional from "../../../assets/images/exclusive/FC-027-1789479832-1.png";
import dressBurgundy from "../../../assets/images/exclusive/POST-011-1790518922-1.jpg";

// Images
const gallery = [
  {
    src: dressGreen,
    fa: "لباس سبز سنتی",
    en: "Green Traditional Dress",
  },
  {
    src: dressTraditional,
    fa: "لباس سنتی زرشکی",
    en: "Burgundy Heritage Dress",
  },
  {
    src: dressBurgundy,
    fa: "لباس زرشکی خاص",
    en: "Burgundy Signature Outfit",
  },
];

// Languages
const translations = {
  fa: {
    label: "FAQIRI EXCLUSIVE COLLECTION",
    title1: "مجموعه‌ای خاص",
    title2: "از لباس‌های اصیل",

    description:
      "مجموعه‌ای منتخب از لباس‌های چشم‌نواز که زیبایی نقش‌های سنتی را با رنگ‌های جذاب، طراحی‌های منحصربه‌فرد و استایلی متفاوت در کنار هم قرار می‌دهد.",

    extra:
      "هر لباس، جلوه‌ای از هنر و زیبایی است؛ انتخاب‌هایی برای کسانی که به اصالت، ظرافت و سلیقه شخصی خود اهمیت می‌دهند.",

    mobileDescription:
      "در FAQIRI لباس‌های اصیل با نقش‌های زیبا، رنگ‌های خاص و طراحی‌های متفاوت را گردآورده‌ایم؛ انتخاب‌هایی برای استایلی زیبا، خاص و ماندگار.",

    footer: "زیبایی در جزئیات، تفاوت در انتخاب",
    previous: "عکس قبلی",
    next: "عکس بعدی",
  },

  en: {
    label: "FAQIRI EXCLUSIVE COLLECTION",
    title1: "The Exclusive",
    title2: "Heritage Collection",

    description:
      "Discover a refined selection of distinctive garments that combine traditional patterns, expressive colors, unique designs, and timeless style.",

    extra:
      "Every piece celebrates beauty and individuality, thoughtfully selected for those who appreciate heritage, elegance, and personal expression.",

    mobileDescription:
      "Explore heritage clothing with beautiful patterns, distinctive colors, and elegant designs. Discover a collection made for your unique style.",

    footer: "Distinctive style, inspired by heritage",
    previous: "Previous photo",
    next: "Next photo",
  },
};

function ArrowIcon({ previous = false }) {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={previous ? "rotate-180" : ""}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export default function ExclusiveCollection() {
  const { language } = useLanguage();

  const isFa = language !== "en";
  const t = translations[isFa ? "fa" : "en"];

  const [activeIndex, setActiveIndex] = useState(0);

  const previousImage = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + gallery.length) % gallery.length
    );
  };

  const nextImage = () => {
    setActiveIndex(
      (current) => (current + 1) % gallery.length
    );
  };

  return (
    <section
      id="exclusive-collection"
      className="
        w-full
        bg-white
        px-4 py-6
        transition-colors duration-500
        dark:bg-[#0A0A0A]
        sm:px-6 sm:py-8
        lg:py-9
      "
    >
      <div className="mx-auto max-w-[1200px]">

        {/* MAIN CARD */}
        <div
          dir="ltr"
          className="
            grid
            items-stretch
            overflow-hidden
            rounded-[20px]
            bg-[#101010]
            shadow-[0_14px_40px_rgba(0,0,0,0.12)]
            md:grid-cols-[280px_minmax(0,1fr)]
            lg:grid-cols-[320px_minmax(0,1fr)]
            xl:grid-cols-[340px_minmax(0,1fr)]
          "
        >

          {/* PHOTO SECTION */}
          <div
            className="
              relative
              aspect-[2/3]
              w-full
              min-w-0
              self-start
              overflow-hidden
              bg-[#F2E9DF]
            "
          >

            {/* Full images - no cropping */}
            {gallery.map((photo, index) => (
              <img
                key={index}
                src={photo.src}
                alt={
                  activeIndex === index
                    ? isFa
                      ? photo.fa
                      : photo.en
                    : ""
                }
                aria-hidden={activeIndex !== index}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className={`
                  pointer-events-none
                  absolute inset-0
                  block
                  h-full w-full
                  object-contain
                  object-center
                  transition-opacity
                  duration-500
                  ease-in-out
                  ${
                    activeIndex === index
                      ? "opacity-100"
                      : "opacity-0"
                  }
                `}
              />
            ))}

            {/* IMAGE COUNTER */}
            <div
              dir="ltr"
              className="
                absolute
                left-3 top-3
                z-10
                rounded-full
                bg-black/65
                px-3 py-2
                text-[11px]
                font-medium
                tracking-wider
                text-white
                backdrop-blur-md
              "
            >
              {String(activeIndex + 1).padStart(2, "0")}

              <span className="mx-2 text-white/50">
                /
              </span>

              {String(gallery.length).padStart(2, "0")}
            </div>

            {/* PREVIOUS ARROW */}
            <button
              type="button"
              onClick={previousImage}
              aria-label={t.previous}
              className="
                absolute
                left-3 top-1/2
                z-20
                flex h-10 w-10
                -translate-y-1/2
                items-center justify-center
                rounded-full
                border border-white/20
                bg-black/45
                text-white
                backdrop-blur-md
                transition-all duration-300
                hover:bg-black/75
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-white
              "
            >
              <ArrowIcon previous />
            </button>

            {/* NEXT ARROW */}
            <button
              type="button"
              onClick={nextImage}
              aria-label={t.next}
              className="
                absolute
                right-3 top-1/2
                z-20
                flex h-10 w-10
                -translate-y-1/2
                items-center justify-center
                rounded-full
                border border-white/20
                bg-black/45
                text-white
                backdrop-blur-md
                transition-all duration-300
                hover:bg-black/75
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-white
              "
            >
              <ArrowIcon />
            </button>

            <span
              className="sr-only"
              aria-live="polite"
              aria-atomic="true"
            >
              {isFa
                ? gallery[activeIndex].fa
                : gallery[activeIndex].en}
            </span>

          </div>

          {/* TEXT SECTION */}
          <div
            dir={isFa ? "rtl" : "ltr"}
            className="
              flex
              min-w-0
              flex-col
              justify-center
              px-5 py-6
              text-start
              sm:px-7
              md:px-7 md:py-5
              lg:px-9 lg:py-5
              xl:px-11
            "
          >

            {/* LABEL */}
            <div className="mb-3 flex items-center gap-3">
              <span
                className="
                  h-[6px] w-[6px]
                  shrink-0
                  rounded-full
                  bg-[#D57A49]
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  tracking-[0.12em]
                  text-[#E18A57]
                  sm:text-[11px]
                "
              >
                {t.label}
              </span>
            </div>

            {/* TITLE */}
            <h2
              className="
                text-[28px]
                font-semibold
                leading-[1.4]
                tracking-tight
                text-white
                sm:text-[33px]
                lg:text-[36px]
                xl:text-[39px]
              "
            >
              <span className="block">
                {t.title1}
              </span>

              <span
                className={
                  isFa
                    ? "block font-medium"
                    : "block font-serif font-normal italic"
                }
              >
                {t.title2}
              </span>
            </h2>

            {/* ACCENT LINE */}
            <div
              className="
                mt-3
                h-[3px] w-11
                rounded-full
                bg-[#D57A49]
              "
            />

            {/* MOBILE TEXT - MAX 4 LINES */}
            <p
              className="
                mt-4
                line-clamp-4
                text-[17px]
                leading-[1.75]
                text-[#E0E0E0]
                lg:hidden
              "
            >
              {t.mobileDescription}
            </p>

            {/* DESKTOP TEXT */}
            <div className="hidden lg:block">

              {/* FIRST PARAGRAPH - 19px */}
              <p
                className="
                  mt-4
                  text-[19px]
                  leading-[1.65]
                  font-normal
                  text-[#E0E0E0]
                "
              >
                {t.description}
              </p>

              {/* SECOND PARAGRAPH - 19px */}
              <p
                className="
                  mt-3
                  text-[19px]
                  leading-[1.65]
                  font-normal
                  text-[#BEBEBE]
                "
              >
                {t.extra}
              </p>
            </div>

            {/* FOOTER */}
            <div
              className="
                mt-4
                flex items-center
                gap-3
                border-t
                border-white/10
                pt-3
              "
            >
              <span
                className="
                  h-[2px] w-7
                  shrink-0
                  bg-[#D57A49]
                "
              />

              <span
                className="
                  text-[12px]
                  font-medium
                  text-[#BDBDBD]
                  sm:text-[13px]
                "
              >
                {t.footer}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
