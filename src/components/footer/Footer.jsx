
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.jsx";
import faqiriLogo from "../../assets/images/navbar-logo.png";

// =====================================
// SOCIAL MEDIA
// =====================================
const socialLinks = [
  {
    name: "Instagram",
    type: "instagram",
    url: "https://www.instagram.com/faqiriclothing/?utm_source=ig_web_button_share_sheet",
  },
  {
    name: "TikTok",
    type: "tiktok",
    url: "https://www.tiktok.com/@faqiriclothingusa?_r=1&_t=ZP-9ATEfRrwcLH",
  },
  {
    name: "Facebook",
    type: "facebook",
    url: "https://www.facebook.com/faqiriclothingofficial",
  },
  {
    name: "YouTube",
    type: "youtube",
    url: "https://www.youtube.com/@faqiriclothing",
  },
];

// =====================================
// SOCIAL ICONS
// =====================================
function SocialIcon({ type }) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      {type === "instagram" && (
        <>
          <rect
            x="2.5"
            y="2.5"
            width="19"
            height="19"
            rx="5.5"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="12"
            cy="12"
            r="4.2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="17.6"
            cy="6.5"
            r="1.2"
            fill="currentColor"
          />
        </>
      )}

      {type === "tiktok" && (
        <path
          d="M16.5 2c.4 2.3 1.8 3.7 4.1 3.9v3.4a9 9 0 0 1-4.1-1.1V15a6.2 6.2 0 1 1-6.2-6.2c.4 0 .8 0 1.1.1v3.6a3.1 3.1 0 1 0 1.9 2.9V2h3.2Z"
          fill="currentColor"
        />
      )}

      {type === "facebook" && (
        <path
          d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.76-1.62 1.55V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z"
          fill="currentColor"
        />
      )}

      {type === "youtube" && (
        <>
          <rect
            x="2"
            y="5"
            width="20"
            height="14"
            rx="4"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M10 8.5 16 12l-6 3.5v-7Z"
            fill="currentColor"
          />
        </>
      )}
    </svg>
  );
}

// =====================================
// CONTACT ICONS
// =====================================
function ContactIcon({ type }) {
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
      className="shrink-0"
    >
      {type === "location" && (
        <>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}

      {type === "phone" && (
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.7 19.7 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.7L8.2 11a16 16 0 0 0 4.8 4.8l1.6-1.8a2 2 0 0 1 1.7-.6l3 .5a2 2 0 0 1 1.7 2Z" />
      )}

      {type === "mail" && (
        <>
          <rect
            x="2"
            y="4"
            width="20"
            height="16"
            rx="2"
          />
          <path d="m2 6 10 7 10-7" />
        </>
      )}
    </svg>
  );
}

// =====================================
// TRANSLATIONS
// =====================================
const translations = {
  fa: {
    description:
      "پوشاک اصیل افغانستانی با هنر دست، طراحی مدرن و دوخت سفارشی؛ ترکیبی از فرهنگ، زیبایی و کیفیت.",

    shopTitle: "فروشگاه و خدمات",
    shop: "فروشگاه",
    categories: "دسته‌بندی‌ها",
    tailoring: "دوخت سفارشی",
    sizeGuide: "راهنمای اندازه‌ها",
    about: "درباره ما",
    contact: "تماس با ما",

    careTitle: "خدمات مشتریان",
    shipping: "اطلاعات ارسال",
    sizing: "سایزبندی و اندازه‌گیری",

    copyright: "تمام حقوق محفوظ است.",
    tagline: "اصالت در پوشش، زیبایی در جزئیات",
  },

  en: {
    description:
      "Handcrafted Afghan clothing with traditional artistry, modern presentation, and custom tailoring.",

    shopTitle: "Shop & Services",
    shop: "Shop",
    categories: "Categories",
    tailoring: "Custom Tailoring",
    sizeGuide: "Size Guide",
    about: "About",
    contact: "Contact",

    careTitle: "Customer Care",
    shipping: "Shipping information",
    sizing: "Sizing & measurements",

    copyright: "All rights reserved.",
    tagline: "Tradition in Style. Excellence in Detail.",
  },
};

// =====================================
// FOOTER
// =====================================
export default function Footer() {
  const {
    language,
    isPersian,
    transitionStage,
  } = useLanguage();

  const t = translations[language] || translations.en;

  // =====================================
  // SHOP LINKS
  // =====================================
  const shopLinks = [
    {
      label: t.shop,
      to: "/products",
    },
    {
      label: t.categories,
      to: "/categories",
    },
    {
      label: t.tailoring,
      to: "/info/custom-tailoring",
    },
    {
      label: t.sizeGuide,
      to: "/info/size-guide",
    },
    {
      label: t.about,
      to: "/info/about",
    },
    {
      label: t.contact,
      to: "/info/contact",
    },
  ];

  // =====================================
  // CUSTOMER CARE LINKS
  // =====================================
  const careLinks = [
    {
      label: t.shipping,
      to: "/info/shipping-information",
    },
    {
      label: t.sizing,
      to: "/info/sizing-measurements",
    },
  ];

  // =====================================
  // STYLES
  // =====================================
  const headingClass = `
    inline-block
    text-[15px]
    font-semibold
    leading-[1.6]
    text-[#B78B30]

    transition-colors duration-300
    hover:text-[#967022]

    dark:text-[#C69A3C]
    dark:hover:text-[#E5BA61]

    sm:text-[17px]
    lg:text-[18px]

    ${
      isPersian
        ? ""
        : "font-serif tracking-[0.025em]"
    }
  `;

  const linkClass = `
    block
    max-w-full
    break-words

    text-[13px]
    leading-[1.9]

    text-[#202020]
    transition-colors duration-300
    hover:text-[#A77C25]

    dark:text-[#BDBDBD]
    dark:hover:text-[#D5AA52]

    sm:text-[14px]
    lg:text-[15px]
  `;

  return (
    <footer
      dir={isPersian ? "rtl" : "ltr"}
      className="
        relative
        isolate
        w-full
        overflow-hidden

        border-t border-black/10

        bg-[#F7F5F0]
        text-[#171717]

        transition-colors duration-500

        dark:border-white/10
        dark:bg-[#111111]
        dark:text-white
      "
    >
      {/* =====================================
          FAQIRI BACKGROUND WATERMARK
          BEHIND ALL FOOTER CONTENT
         ===================================== */}
      <div
        aria-hidden="true"
        dir="ltr"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0

          flex
          items-center
          justify-center

          overflow-hidden
          select-none
        "
      >
        <span
          className="
            block
            whitespace-nowrap

            font-normal
            text-black/[0.06]
            dark:text-white/[0.08]

            transition-colors duration-500
          "
          style={{
            fontFamily:
              "Arial, Helvetica, sans-serif",

            fontSize:
              "clamp(76px, 16vw, 290px)",

            fontWeight: 400,

            letterSpacing: "-0.035em",

            lineHeight: 1,

            textShadow:
              "0 0 12px rgba(255,255,255,0.03)",
          }}
        >
          FAQIRI
        </span>
      </div>

      {/* =====================================
          MAIN CONTENT
         ===================================== */}
      <div
        className={`
          relative
          z-10

          mx-auto
          w-full
          max-w-[1600px]

          px-4
          pt-9
          pb-9

          sm:px-7
          sm:pt-12

          lg:px-10
          lg:pt-14
          lg:pb-12

          transition-opacity
          duration-300

          ${
            transitionStage === "exiting"
              ? "opacity-0"
              : "opacity-100"
          }
        `}
      >
        {/* =====================================
            RESPONSIVE GRID
           ===================================== */}
        <div
          className="
            grid
            grid-cols-2
            items-start

            gap-x-4
            gap-y-9

            sm:gap-x-8
            sm:gap-y-11

            lg:grid-cols-4
            lg:gap-x-8

            xl:gap-x-12
          "
        >
          {/* =====================================
              COLUMN 1 - BRAND
             ===================================== */}
          <div
            className="
              col-span-2
              flex
              min-w-0
              flex-col

              items-center
              text-center

              lg:col-span-1
              lg:items-start
              lg:text-start
            "
          >
            {/* LOGO */}
            <Link
              to="/"
              aria-label="FAQIRI Home"
              className="inline-flex"
            >
              <img
                src={faqiriLogo}
                alt="FAQIRI Clothing"
                className="
                  h-[70px]
                  w-auto
                  max-w-[130px]

                  object-contain

                  transition-transform
                  duration-300

                  hover:scale-105

                  sm:h-[78px]
                "
              />
            </Link>

            {/* DESCRIPTION */}
            <Link
              to="/info/about"
              className="
                mt-4
                block
                max-w-[380px]

                text-[13px]
                leading-[2]

                text-[#292929]

                transition-colors
                duration-300

                hover:text-[#A77C25]

                dark:text-[#C0C0C0]
                dark:hover:text-[#D5AA52]

                sm:text-[15px]
                lg:mt-5
              "
            >
              {t.description}
            </Link>

            {/* =====================================
                SOCIAL MEDIA ICONS
               ===================================== */}
            <div
              dir="ltr"
              className={`
                mt-6
                flex
                flex-wrap
                items-center

                gap-3

                lg:mt-7

                ${
                  isPersian
                    ? "justify-center lg:justify-end"
                    : "justify-center lg:justify-start"
                }
              `}
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="
                    group
                    flex
                    h-[43px]
                    w-[43px]

                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[#C8B992]

                    bg-white/60
                    text-[#171717]

                    shadow-sm

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:scale-105

                    hover:border-[#C69A3C]
                    hover:bg-[#C69A3C]
                    hover:text-white

                    hover:shadow-[0_8px_20px_rgba(183,139,48,0.20)]

                    dark:border-[#5C492A]
                    dark:bg-white/[0.04]
                    dark:text-[#D6D6D6]

                    dark:hover:border-[#C69A3C]
                    dark:hover:bg-[#C69A3C]
                    dark:hover:text-[#111111]

                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-[#C69A3C]

                    active:scale-95
                  "
                >
                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <SocialIcon type={social.type} />
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* =====================================
              COLUMN 2 - SHOP & SERVICES
             ===================================== */}
          <nav
            aria-label={t.shopTitle}
            className="
              col-span-1
              min-w-0
            "
          >
            <h3>
              <Link
                to="/products"
                className={headingClass}
              >
                {t.shopTitle}
              </Link>
            </h3>

            <ul
              className="
                mt-4
                space-y-2

                lg:mt-5
              "
            >
              {shopLinks.map((item) => (
                <li
                  key={item.to}
                  className="min-w-0"
                >
                  <Link
                    to={item.to}
                    className={linkClass}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* =====================================
              COLUMN 3 - CUSTOMER CARE
             ===================================== */}
          <nav
            aria-label={t.careTitle}
            className="
              col-span-1
              min-w-0
            "
          >
            <h3>
              <Link
                to="/info/customer-service"
                className={headingClass}
              >
                {t.careTitle}
              </Link>
            </h3>

            <ul
              className="
                mt-4
                space-y-2
                lg:mt-5
              "
            >
              {careLinks.map((item) => (
                <li
                  key={item.to}
                  className="min-w-0"
                >
                  <Link
                    to={item.to}
                    className={linkClass}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* =====================================
              COLUMN 4 - CONTACT
             ===================================== */}
          <div
            className="
              col-span-2
              min-w-0

              border-t
              border-black/10

              pt-7

              dark:border-white/10

              lg:col-span-1
              lg:border-t-0
              lg:pt-0
            "
          >
            <h3 className="text-center lg:text-start">
              <Link
                to="/info/contact"
                className={headingClass}
              >
                {t.contact}
              </Link>
            </h3>

            <div
              className="
                mx-auto
                mt-5

                flex
                max-w-[370px]
                flex-col
                gap-5

                lg:mx-0
                lg:max-w-none
              "
            >
              {/* ADDRESS */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=5591%20Hobsons%20Choice%20Loop%2C%20Manassas%2C%20VA%2020112"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  min-w-0
                  items-start
                  gap-3
                "
              >
                <span
                  className="
                    mt-1
                    shrink-0
                    text-[#B78B30]
                    dark:text-[#C69A3C]
                  "
                >
                  <ContactIcon type="location" />
                </span>

                <span
                  dir="ltr"
                  className={`
                    ${linkClass}
                    min-w-0
                    text-left
                    group-hover:text-[#A77C25]
                    dark:group-hover:text-[#D5AA52]
                  `}
                  style={{
                    fontFamily:
                      "Arial, sans-serif",
                    unicodeBidi: "isolate",
                  }}
                >
                  5591 Hobsons Choice Loop,
                  <br />
                  Manassas, VA 20112
                </span>
              </a>

              {/* PHONE */}
              <a
                href="tel:+93749920930"
                className="
                  group
                  flex
                  min-w-0
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    shrink-0
                    text-[#B78B30]
                    dark:text-[#C69A3C]
                  "
                >
                  <ContactIcon type="phone" />
                </span>

                <span
                  dir="ltr"
                  className={`
                    ${linkClass}
                    text-left
                    group-hover:text-[#A77C25]
                    dark:group-hover:text-[#D5AA52]
                  `}
                  style={{
                    fontFamily:
                      "Arial, sans-serif",
                    unicodeBidi: "isolate",
                  }}
                >
                  +93 749 920 930
                </span>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:info@faqiriclothing.com"
                className="
                  group
                  flex
                  min-w-0
                  items-start
                  gap-3
                "
              >
                <span
                  className="
                    mt-1
                    shrink-0
                    text-[#B78B30]
                    dark:text-[#C69A3C]
                  "
                >
                  <ContactIcon type="mail" />
                </span>

                <span
                  dir="ltr"
                  className={`
                    ${linkClass}
                    min-w-0
                    break-all
                    text-left
                    group-hover:text-[#A77C25]
                    dark:group-hover:text-[#D5AA52]
                  `}
                  style={{
                    fontFamily:
                      "Arial, sans-serif",
                    unicodeBidi: "isolate",
                  }}
                >
                  info@faqiriclothing.com
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================
          COPYRIGHT
         ===================================== */}
      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1600px]

          px-4
          sm:px-7
          lg:px-10
        "
      >
        <div
          className="
            flex
            flex-col
            items-center
            justify-between

            gap-2

            border-t
            border-black/10

            py-5
            text-center

            dark:border-white/10

            sm:flex-row
          "
        >
          <p
            dir="ltr"
            className="
              text-[11px]
              text-[#555555]
              dark:text-[#999999]
              sm:text-[12px]
            "
          >
            © {new Date().getFullYear()} FAQIRI.{" "}
            {t.copyright}
          </p>

          <Link
            to="/info/about"
            className="
              text-[11px]
              text-[#555555]

              transition-colors
              duration-300

              hover:text-[#B78B30]

              dark:text-[#999999]
              dark:hover:text-[#C69A3C]

              sm:text-[12px]
            "
          >
            {t.tagline}
          </Link>
        </div>
      </div>
    </footer>
  );
}
