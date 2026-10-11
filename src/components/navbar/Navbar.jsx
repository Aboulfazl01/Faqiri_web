
import { useEffect, useRef, useState } from "react";

import {
  Search,
  Moon,
  Sun,
  Globe,
  UserRound,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import navbarLogo from "../../assets/images/navbar-logo.png";
import { useLanguage } from "../../context/LanguageContext.jsx";

function Navbar() {
  const { language, changeLanguage, t } = useLanguage();
  const isPersian = language === "fa";

  // Theme
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });

  // Navbar states
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchRef = useRef(null);

  // Translated navigation links
  const navLinks = [
    { name: t.navbar.home, path: "/" },
    { name: t.navbar.products, path: "/products" },
    { name: t.navbar.tailoring, path: "/custom-tailoring" },
    { name: t.navbar.about, path: "/about" },
    { name: t.navbar.contact, path: "/contact" },
  ];

  // Dark / Light Mode
  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );

    try {
      localStorage.setItem(
        "theme",
        darkMode ? "dark" : "light"
      );
    } catch {
      // Theme works without localStorage.
    }
  }, [darkMode]);

  // Focus search input
  useEffect(() => {
    if (searchOpen) {
      searchRef.current?.focus();
    }
  }, [searchOpen]);

  // Close panels with Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setSearchOpen(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    const query = searchQuery.trim();
    if (!query) return;

    window.location.href =
      `/products?search=${encodeURIComponent(query)}`;
  };

  // Shared icon styles
  const iconClass =
    "relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-zinc-800 transition-colors duration-300 hover:bg-[#B58B2A]/10 hover:text-[#B58B2A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B58B2A] dark:text-zinc-100 dark:hover:text-[#D4AF37]";

  // Desktop links
  const desktopLinkClass = `
    group relative whitespace-nowrap py-3
    font-ravi font-semibold
    ${
      isPersian
        ? "text-[16px] xl:text-[17px]"
        : "text-[18px] xl:text-[20px]"
    }
    text-zinc-800 transition-colors duration-300
    hover:text-[#B58B2A]
    dark:text-zinc-100 dark:hover:text-[#D4AF37]
  `;

  // Mobile links
  const mobileLinkClass = `
    block rounded-lg px-3 py-3
    font-ravi font-semibold
    ${isPersian ? "text-[16px]" : "text-[18px]"}
    text-zinc-800 transition-colors duration-300
    hover:bg-[#B58B2A]/10 hover:text-[#B58B2A]
    dark:text-zinc-100 dark:hover:text-[#D4AF37]
  `;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/95 shadow-sm backdrop-blur-xl transition-colors duration-300 dark:border-zinc-800 dark:bg-[#0B0B0B]/95">

      {/* MAIN NAVBAR */}
      <nav
        dir="ltr"
        aria-label="Main navigation"
        className="mx-auto grid h-24 w-full max-w-[1600px] grid-cols-[1fr_auto] items-center px-5 lg:grid-cols-[1fr_auto_1fr] lg:px-7 xl:px-10"
      >

        {/* LEFT: LOGO */}
        <a
          href="/"
          aria-label="FAQIRI Home"
          className="flex w-fit items-center justify-self-start"
        >
          <img
            src={navbarLogo}
            alt="FAQIRI Logo"
            className="h-[68px] w-[68px] object-contain transition-transform duration-500 hover:scale-105"
          />
        </a>

        {/* CENTER: NAVIGATION LINKS */}
        <div
          dir={isPersian ? "rtl" : "ltr"}
          className="hidden items-center justify-center gap-4 lg:flex xl:gap-7 2xl:gap-9"
        >
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={desktopLinkClass}
            >
              {link.name}

              {/* Gold underline on hover only */}
              <span className="absolute bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#B58B2A] transition-all duration-300 group-hover:w-full dark:bg-[#D4AF37]" />
            </a>
          ))}
        </div>

        {/* RIGHT: ACTION ICONS */}
        <div className="flex items-center justify-self-end gap-0.5 sm:gap-1 xl:gap-2">

          {/* SEARCH - DESKTOP/TABLET */}
          <button
            type="button"
            onClick={toggleSearch}
            aria-label={
              searchOpen
                ? isPersian
                  ? "بستن جستجو"
                  : "Close search"
                : t.navbar.searchButton
            }
            aria-expanded={searchOpen}
            aria-controls="navbar-search"
            className={`${iconClass} hidden sm:flex`}
          >
            {searchOpen ? (
              <X size={22} strokeWidth={1.7} />
            ) : (
              <Search size={22} strokeWidth={1.7} />
            )}
          </button>

          {/* LANGUAGE - DESKTOP & MOBILE */}
          <button
            type="button"
            onClick={changeLanguage}
            aria-label={
              isPersian
                ? "تغییر زبان به انگلیسی"
                : "Switch to Persian"
            }
            title={
              isPersian
                ? "Switch to English"
                : "Switch to Persian"
            }
            className={`${iconClass} w-auto gap-1 px-1 sm:gap-2 sm:px-2`}
          >
            <Globe size={21} strokeWidth={1.7} />

            <span className="font-ravi text-sm font-semibold">
              {isPersian ? "FA" : "EN"}
            </span>
          </button>

          {/* DARK / LIGHT MODE */}
          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            className={iconClass}
          >
            {darkMode ? (
              <Sun size={22} strokeWidth={1.7} />
            ) : (
              <Moon size={22} strokeWidth={1.7} />
            )}
          </button>

          {/* ADMIN ACCOUNT */}
          <a
            href="/admin/login"
            aria-label={
              isPersian ? "ورود مدیر" : "Admin Login"
            }
            title={
              isPersian ? "پنل مدیریت" : "Admin Panel"
            }
            className={`${iconClass} hidden sm:flex`}
          >
            <UserRound size={22} strokeWidth={1.7} />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={toggleMenu}
            aria-label={
              menuOpen
                ? isPersian
                  ? "بستن منو"
                  : "Close menu"
                : isPersian
                ? "باز کردن منو"
                : "Open menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className={`${iconClass} lg:hidden`}
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>
        </div>
      </nav>

      {/* SEARCH PANEL BELOW NAVBAR */}
      {searchOpen && (
        <section
          id="navbar-search"
          dir={isPersian ? "rtl" : "ltr"}
          aria-label={t.navbar.searchButton}
          className="border-t border-zinc-200 bg-white px-5 py-7 shadow-[0_16px_35px_rgba(0,0,0,0.06)] dark:border-zinc-800 dark:bg-[#101010]"
        >
          <div className="mx-auto max-w-5xl">

            {/* SEARCH HEADER */}
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h2 className="font-ravi text-lg font-bold text-zinc-900 dark:text-white">
                  {isPersian
                    ? "دنبال چه لباسی هستید؟"
                    : "What are you looking for?"}
                </h2>

                <p className="mt-1 font-ravi text-sm text-zinc-500 dark:text-zinc-400">
                  {isPersian
                    ? "مجموعه محصولات فقیری را جستجو کنید"
                    : "Explore the FAQIRI collection"}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                aria-label={
                  isPersian ? "بستن جستجو" : "Close search"
                }
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-[#B58B2A]/10 hover:text-[#B58B2A] dark:text-zinc-300"
              >
                <X size={20} />
              </button>
            </div>

            {/* SEARCH FORM */}
            <form
              role="search"
              onSubmit={handleSearch}
              className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-2.5 transition-all duration-300 focus-within:border-[#B58B2A] focus-within:shadow-[0_0_0_4px_rgba(181,139,42,0.08)] dark:border-zinc-700 dark:bg-zinc-900"
            >
              <Search
                size={23}
                className="mx-2 shrink-0 text-[#B58B2A]"
              />

              <input
                ref={searchRef}
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder={t.navbar.search}
                aria-label={t.navbar.search}
                className="min-w-0 flex-1 bg-transparent font-ravi text-base text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-white"
              />

              <button
                type="submit"
                disabled={!searchQuery.trim()}
                className="flex shrink-0 items-center gap-2 rounded-xl bg-[#B58B2A] px-4 py-3 font-ravi text-sm font-semibold text-white transition-colors hover:bg-[#96711D] disabled:cursor-not-allowed disabled:opacity-50 sm:px-7"
              >
                {t.navbar.searchButton}
                <ArrowUpRight size={18} />
              </button>
            </form>

            {/* SEARCH SUGGESTIONS */}
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <span className="font-ravi text-xs font-medium text-zinc-400">
                {isPersian
                  ? "جستجوهای پیشنهادی:"
                  : "POPULAR SEARCHES:"}
              </span>

              {(isPersian
                ? [
                    "کت و شلوار",
                    "لباس سنتی",
                    "خیاطی سفارشی",
                  ]
                : [
                    "Men's Suits",
                    "Traditional Wear",
                    "Custom Tailoring",
                  ]
              ).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setSearchQuery(item);
                    searchRef.current?.focus();
                  }}
                  className="rounded-full border border-zinc-200 px-4 py-1.5 font-ravi text-xs text-zinc-600 transition-colors hover:border-[#B58B2A] hover:text-[#B58B2A] dark:border-zinc-700 dark:text-zinc-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          dir={isPersian ? "rtl" : "ltr"}
          className="border-t border-zinc-200 bg-white px-6 py-6 shadow-lg dark:border-zinc-800 dark:bg-[#0B0B0B] lg:hidden"
        >
          {/* MOBILE LINKS */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={mobileLinkClass}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* MOBILE ACTIONS */}
          <div className="mt-5 flex items-center gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800">

            {/* MOBILE SEARCH */}
            <button
              type="button"
              onClick={() => {
                setSearchOpen(true);
                setMenuOpen(false);
              }}
              aria-label={t.navbar.searchButton}
              className={iconClass}
            >
              <Search size={22} />
            </button>

            {/* MOBILE ADMIN */}
            <a
              href="/admin/login"
              aria-label={
                isPersian ? "ورود مدیر" : "Admin Login"
              }
              title={
                isPersian ? "پنل مدیریت" : "Admin Panel"
              }
              className={iconClass}
            >
              <UserRound size={22} strokeWidth={1.7} />
            </a>
          </div>
        </div>
      )}

      {/* GOLD ACCENT */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#B58B2A]/30 to-transparent" />
    </header>
  );
}

export default Navbar;
