
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../../../context/LanguageContext.jsx";

import hero1 from "../../../assets/images/hero-1.webp";
import hero2 from "../../../assets/images/hero-2.webp";
import hero3 from "../../../assets/images/hero-3.webp";

import "./Hero.css";

const slides = [
  {
    image: hero1,
    labelEn: "New Collection",
    labelFa: "مجموعه جدید",
    alt: "FAQIRI Burgundy Dress",
  },
  {
    image: hero2,
    labelEn: "Timeless Elegance",
    labelFa: "زیبایی ماندگار",
    alt: "FAQIRI Emerald Dress",
  },
  {
    image: hero3,
    labelEn: "Signature Collection",
    labelFa: "مجموعه ویژه",
    alt: "FAQIRI Ivory Dress",
  },
];

const loopSlides = [...slides, slides[0]];

const translations = {
  en: {
    eyebrow: "MADE IN AFGHANISTAN",
    title: "Afghan artistry,",
    highlight: "made to be worn.",
    description:
      "Hand-finished Afghan clothing created with rich textiles, traditional detail, and a modern silhouette — available ready-made or tailored for you.",
    shop: "SHOP THE COLLECTION",
    tailoring: "REQUEST CUSTOM TAILORING",
    features: [
      ["Hand-finished", "Crafted with care"],
      ["Custom", "Made for your fit"],
      ["Worldwide", "Orders available"],
    ],
  },
  fa: {
    eyebrow: "ساخت افغانستان",
    title: "هنر و اصالت افغانی،",
    highlight: "برای پوشیدن",
    description:
      "لباس‌های اصیل افغانی با پارچه‌های باکیفیت، جزئیات سنتی و طراحی مدرن؛ آماده برای خرید یا دوخته‌شده مطابق سلیقه شما",
    shop: "مشاهده مجموعه",
    tailoring: "درخواست خیاطی سفارشی",
    features: [
      ["دست‌دوز", "ساخته‌شده با ظرافت"],
      ["سفارشی", "متناسب با اندازه شما"],
      ["جهانی", "پذیرش سفارشات"],
    ],
  },
};

function Hero() {
  const { language } = useLanguage();
  const isPersian = language === "fa";
  const content = translations[language] || translations.en;

  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const resetFrame = useRef(null);
  const enableFrame = useRef(null);

  // Automatically change slides every 3 seconds.
  useEffect(() => {
    if (isPaused || activeIndex === slides.length) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [isPaused, activeIndex]);

  useEffect(() => {
    return () => {
      if (resetFrame.current !== null) {
        window.cancelAnimationFrame(resetFrame.current);
      }

      if (enableFrame.current !== null) {
        window.cancelAnimationFrame(enableFrame.current);
      }
    };
  }, []);

  const handleTransitionEnd = (event) => {
    if (
      event.target !== event.currentTarget ||
      event.propertyName !== "transform"
    ) {
      return;
    }

    if (activeIndex === slides.length) {
      setTransitionEnabled(false);
      setActiveIndex(0);

      resetFrame.current = window.requestAnimationFrame(() => {
        enableFrame.current = window.requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }
  };

  const goToSlide = (index) => {
    if (!transitionEnabled || activeIndex === slides.length) return;
    setActiveIndex(index);
  };

  return (
    <section className="faqiri-hero w-full overflow-hidden bg-[#F7F5F1] transition-colors duration-300 dark:bg-[#101010]">
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 items-center gap-7 px-5 py-5 sm:px-8 lg:min-h-[520px] lg:grid-cols-[1fr_480px] lg:gap-8 lg:px-10 lg:py-4 xl:gap-12 xl:px-11">

        {/* LEFT SIDE - TEXT */}
        <div
          dir={isPersian ? "rtl" : "ltr"}
          className="order-1 flex min-w-0 flex-col items-center text-center lg:items-start lg:text-start"
        >
          {/* Small title */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-11 bg-[#B58B2A]" />

            <span className="font-ravi text-[10px] font-bold uppercase tracking-[0.25em] text-[#A87820] sm:text-[11px]">
              {content.eyebrow}
            </span>
          </div>

          {/* Main heading */}
          <h1 className="w-full font-ravi text-[33px] font-bold leading-[1.15] tracking-tight text-[#242321] dark:text-white sm:text-[44px] lg:text-[48px] xl:text-[58px]">
            {content.title}

            <span className="mt-1 block text-[#B88B32] dark:text-[#D4AF37]">
              {content.highlight}
            </span>
          </h1>

          {/* Decorative line */}
          <div className="my-5 flex items-center gap-3">
            <span className="h-px w-[72px] bg-[#B58B2A]" />
            <span className="h-2 w-2 rounded-full bg-[#B58B2A]" />
          </div>

          {/* Description */}
          <p className="max-w-[600px] font-ravi text-[14px] font-medium leading-[1.9] text-[#5F5B56] dark:text-zinc-300 sm:text-[16px]">
            {content.description}
          </p>

          {/* BUTTONS - SMALLER ON MOBILE */}
          <div className="mt-6 grid w-full max-w-[290px] grid-cols-2 gap-2 sm:max-w-none sm:gap-3 lg:flex lg:flex-wrap lg:justify-start">

            {/* SHOP BUTTON */}
            <a
              href="/products"
              className="group inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-lg bg-[#B58B2A] px-2 py-2.5 text-center font-ravi text-[10px] font-semibold leading-4 text-white shadow-[0_5px_18px_rgba(181,139,42,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#98721E] hover:shadow-[0_8px_24px_rgba(181,139,42,0.25)] sm:min-h-[52px] sm:gap-3 sm:rounded-xl sm:px-6 sm:py-3.5 sm:text-[13px] lg:w-auto"
            >
              <span>{content.shop}</span>

              <ArrowRight
                size={15}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-[18px] sm:w-[18px]"
              />
            </a>

            {/* CUSTOM TAILORING BUTTON */}
            <a
              href="/custom-tailoring"
              className="group inline-flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-lg border border-[#B58B2A]/60 bg-transparent px-2 py-2.5 text-center font-ravi text-[10px] font-semibold leading-4 text-[#242321] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B58B2A] hover:bg-[#B58B2A]/10 dark:text-white sm:min-h-[52px] sm:gap-3 sm:rounded-xl sm:px-6 sm:py-3.5 sm:text-[13px] lg:w-auto"
            >
              <span>{content.tailoring}</span>

              <ArrowRight
                size={15}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-[18px] sm:w-[18px]"
              />
            </a>
          </div>

          {/* FEATURES */}
          <div className="mt-7 grid w-full max-w-[630px] grid-cols-3 border-t border-[#DED8CF] pt-4 dark:border-zinc-700">
            {content.features.map((feature, index) => (
              <div
                key={index}
                className={`min-w-0 px-3 first:ps-0 last:pe-0 ${
                  index !== 0
                    ? "border-s border-[#DED8CF] dark:border-zinc-700"
                    : ""
                }`}
              >
                <h3 className="font-ravi text-[11px] font-bold text-[#242321] dark:text-white sm:text-[14px]">
                  {feature[0]}
                </h3>

                <p className="mt-1 font-ravi text-[10px] leading-5 text-[#82796C] dark:text-zinc-400 sm:text-[12px]">
                  {feature[1]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE SLIDER */}
        <div
          dir="ltr"
          className="order-2 mx-auto w-full min-w-0 max-w-[480px] lg:mx-0 lg:justify-self-end"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsPaused(false);
            }
          }}
          aria-label={
            isPersian ? "مجموعه تصاویر فقیری" : "FAQIRI Collection"
          }
        >
          <div className="faqiri-carousel">
            <div
              className={`faqiri-carousel-track ${
                transitionEnabled ? "" : "faqiri-no-transition"
              }`}
              style={{
                transform: `translateX(calc(-${activeIndex} * (100% + 24px)))`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {loopSlides.map((slide, index) => (
                <article
                  key={index}
                  className="faqiri-carousel-card"
                  aria-hidden={index !== activeIndex}
                >
                  <img
                    src={slide.image}
                    alt={index === activeIndex ? slide.alt : ""}
                    className="faqiri-carousel-image"
                    loading={index === 0 ? "eager" : "lazy"}
                    draggable="false"
                  />

                  {/* Bottom overlay */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent px-6 pb-6 pt-16 text-white">
                    <span className="font-ravi text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                      FAQIRI
                    </span>

                    <h2
                      dir={isPersian ? "rtl" : "ltr"}
                      className="mt-2 font-ravi text-[20px] font-bold sm:text-[22px]"
                    >
                      {isPersian ? slide.labelFa : slide.labelEn}
                    </h2>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* SLIDER INDICATORS */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                type="button"
                aria-label={
                  isPersian
                    ? `نمایش تصویر ${index + 1}`
                    : `Show slide ${index + 1}`
                }
                aria-current={
                  activeIndex % slides.length === index
                    ? "true"
                    : undefined
                }
                onClick={() => goToSlide(index)}
                className={`h-[5px] rounded-full transition-all duration-300 ${
                  activeIndex % slides.length === index
                    ? "w-8 bg-[#B58B2A]"
                    : "w-3 bg-[#B58B2A]/25 hover:bg-[#B58B2A]/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
