
import { useEffect, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

import { useLanguage } from "../../../context/LanguageContext.jsx";

// FAQIRI ORIGINAL LOGO
import faqiriLogo from "../../../assets/images/navbar-logo.png";

import "./FaqiriSays.css";

// =====================================
// FAQIRI CLOTHING MESSAGES
// =====================================

const messages = [
  {
    id: 1,
    fa: "در پوشاک فقیری باور داریم که لباس، فراتر از یک انتخاب روزمره است؛ بازتابی از شخصیت، سلیقه و اعتمادبه‌نفس شما. زیبایی واقعی از توجه به جزئیات آغاز می‌شود.",
    en: "At Faqiri Clothing, we believe clothing is more than an everyday choice. It reflects your personality, style, and confidence. True elegance begins with attention to detail.",
  },
  {
    id: 2,
    fa: "استایل ماندگار، در هماهنگی سادگی و ظرافت معنا پیدا می‌کند. ما در پوشاک فقیری تلاش می‌کنیم هر انتخاب، جلوه‌ای از زیبایی، راحتی و سلیقه منحصربه‌فرد شما باشد.",
    en: "Timeless style is born from the harmony of simplicity and elegance. At Faqiri Clothing, we strive to bring beauty, comfort, and individuality to every choice.",
  },
  {
    id: 3,
    fa: "برای ما، خرید لباس تنها یک معامله نیست؛ آغاز تجربه‌ای دل‌نشین است. در پوشاک فقیری می‌خواهیم هر انتخاب شما با احساس رضایت، اطمینان و زیبایی همراه باشد.",
    en: "For us, shopping is more than a transaction. It is the beginning of a meaningful experience. At Faqiri Clothing, we want every choice to bring satisfaction, confidence, and style.",
  },
];

// =====================================
// MAIN COMPONENT
// =====================================

export default function FaqiriSays() {
  const { language } = useLanguage();

  const isFa = language === "fa";

  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // =====================================
  // AUTO SLIDER
  // =====================================

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        (prev + 1) % messages.length
      );
    }, 5500);

    return () => clearInterval(interval);
  }, [paused, activeIndex]);

  // =====================================
  // NEXT SLIDE
  // =====================================

  const nextSlide = () => {
    setActiveIndex((prev) =>
      (prev + 1) % messages.length
    );
  };

  // =====================================
  // PREVIOUS SLIDE
  // =====================================

  const prevSlide = () => {
    setActiveIndex((prev) =>
      (prev - 1 + messages.length) %
      messages.length
    );
  };

  const activeMessage = messages[activeIndex];

  return (
    <section
      className="
        w-full
        bg-[#F8F6F3]
        px-4
        py-12
        transition-colors
        duration-300
        dark:bg-[#111111]
        sm:px-6
        sm:py-16
      "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1100px]">

        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <div className="mb-8 text-center">

          {/* SUBTITLE */}
          <p
            className="
              mb-2
              text-[11px]
              font-medium
              tracking-[0.15em]
              text-[#999999]
              dark:text-[#888888]
            "
          >
            {isFa
              ? "نگاهی به ارزش‌های ما"
              : "OUR PHILOSOPHY"}
          </p>

          {/* MAIN TITLE */}
          <h2
            className={`
              text-[29px]
              text-[#111111]
              dark:text-white
              sm:text-[39px]
              ${
                isFa
                  ? "font-semibold"
                  : "font-serif font-semibold"
              }
            `}
          >
            {isFa
              ? "پوشاک فقیری می‌گوید"
              : "Faqiri Clothing Says"}
          </h2>
        </div>

        {/* =====================================
            MESSAGE CARD
        ===================================== */}

        <div
          className="
            mx-auto
            flex
            min-h-[270px]
            w-full
            max-w-[620px]
            flex-col
            items-center
            justify-center
            rounded-[20px]
            border
            border-[#ECE8E4]
            bg-white
            px-6
            py-8
            text-center
            shadow-sm
            dark:border-white/10
            dark:bg-[#1C1C1C]
            sm:px-10
          "
        >
          <div
            key={`${language}-${activeIndex}`}
            className="
              faqiri-says-fade
              flex
              w-full
              flex-col
              items-center
            "
          >

            {/* QUOTE ICON */}
            <Quote
              size={24}
              strokeWidth={1.7}
              className="mb-4 text-[#C9A46A]"
            />

            {/* MESSAGE TEXT */}
            <p
              dir={isFa ? "rtl" : "ltr"}
              className={`
                max-w-[540px]
                text-center
                text-[18px]
                text-[#222222]
                dark:text-[#F1F1F1]
                sm:text-[21px]
                ${
                  isFa
                    ? "font-medium leading-[2]"
                    : "font-serif italic leading-[1.65]"
                }
              `}
            >
              “{isFa
                ? activeMessage.fa
                : activeMessage.en}”
            </p>

            {/* =====================================
                FAQIRI BRAND PROFILE
            ===================================== */}

            <div
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-3
              "
              dir="ltr"
            >

              {/* ORIGINAL FAQIRI LOGO */}
              <div
                className="
                  flex
                  h-[52px]
                  w-[52px]
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-full
                  border
                  border-[#EEEEEE]
                  bg-white
                  p-1.5
                  dark:border-white/10
                "
              >
                <img
                  src={faqiriLogo}
                  alt="Faqiri Clothing Logo"
                  className="
                    h-full
                    w-full
                    object-contain
                  "
                />
              </div>

              {/* BRAND INFORMATION */}
              <div className="text-left">

                <h4
                  className="
                    text-[13px]
                    font-semibold
                    tracking-wide
                    text-[#171717]
                    dark:text-white
                  "
                >
                  FAQIRI CLOTHING
                </h4>

                <p
                  className="
                    mt-0.5
                    text-[11px]
                    text-[#999999]
                  "
                >
                  {isFa
                    ? "زیبایی در هر انتخاب"
                    : "Elegance in Every Choice"}
                </p>

              </div>
            </div>
          </div>
        </div>

        {/* =====================================
            SLIDER CONTROLS
        ===================================== */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-4
          "
          dir="ltr"
        >

          {/* PREVIOUS BUTTON */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label={
              isFa
                ? "پیام قبلی"
                : "Previous message"
            }
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[#DEDAD5]
              text-[#333333]
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
              dark:border-white/20
              dark:text-white
              dark:hover:bg-white
              dark:hover:text-black
            "
          >
            <ChevronLeft size={17} />
          </button>

          {/* SLIDER DOTS */}
          <div className="flex items-center gap-[6px]">

            {messages.map((message, index) => (
              <button
                key={message.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={
                  isFa
                    ? `نمایش پیام ${index + 1}`
                    : `Show message ${index + 1}`
                }
                aria-current={
                  activeIndex === index
                    ? "true"
                    : undefined
                }
                className={`
                  h-[6px]
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    activeIndex === index
                      ? "w-[21px] bg-black dark:bg-white"
                      : "w-[6px] bg-[#CACACA] dark:bg-[#555555]"
                  }
                `}
              />
            ))}

          </div>

          {/* NEXT BUTTON */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label={
              isFa
                ? "پیام بعدی"
                : "Next message"
            }
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[#DEDAD5]
              text-[#333333]
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
              dark:border-white/20
              dark:text-white
              dark:hover:bg-white
              dark:hover:text-black
            "
          >
            <ChevronRight size={17} />
          </button>

        </div>
      </div>
    </section>
  );
}
