import { useState } from "react";
import logo from "../../assets/images/logo.png";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Size guide", href: "/measurements" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

// ================= SEARCH ICON =================
function SearchIcon() {
  return (
    <svg
      className="w-[25px] h-[25px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

// ================= CLOSE ICON =================
function CloseIcon() {
  return (
    <svg
      className="w-[21px] h-[21px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

// ================= CART ICON =================
function CartIcon() {
  return (
    <svg
      className="w-[25px] h-[25px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M3 4h2l2.2 11h10.6L21 7H6" />
      <circle cx="9" cy="19" r="1.5" />
      <circle cx="18" cy="19" r="1.5" />
    </svg>
  );
}

// ================= MENU ICON =================
function MenuIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f7f5f0]/95 backdrop-blur-xl">

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 py-2">

        {/* ================= NAVBAR ================= */}
        <nav className="relative rounded-[16px] border border-[#e7dfd1] bg-white shadow-[0_6px_22px_rgba(50,40,25,0.06)]">

          {/* ================= MAIN BAR ================= */}
          <div className="h-[70px] px-5 lg:px-8 flex items-center justify-between">

            {/* ================= LOGO ================= */}
            <a
              href="/"
              className="flex items-center gap-3 shrink-0"
            >

              {/* Logo */}
              <div className="w-[40px] h-[40px] flex items-center justify-center">
                <img
                  src={logo}
                  alt="FAQIRI Clothing"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Brand Text */}
              <div className="flex flex-col justify-center">

                <h1
                  className="
                    text-[20px]
                    leading-none
                    font-serif
                    font-normal
                    tracking-[0.04em]
                    text-[#292824]
                  "
                >
                  FAQIRI
                </h1>

                <p
                  className="
                    mt-[5px]
                    text-[8px]
                    leading-none
                    tracking-[0.30em]
                    text-[#55514b]
                  "
                >
                  CLOTHING
                </p>

              </div>

            </a>


            {/* ================= DESKTOP LINKS ================= */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 ml-8">

              {links.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  className="
                    group
                    relative
                    py-2
                    text-[14px]
                    font-medium
                    text-[#302e2a]
                    hover:text-[#a77d31]
                    transition-colors
                    duration-300
                    whitespace-nowrap
                  "
                >

                  {link.name}

                  {/* Hover Line */}
                  <span
                    className="
                      absolute
                      left-0
                      right-0
                      bottom-0
                      h-[2px]
                      w-0
                      rounded-full
                      bg-[#b78932]
                      group-hover:w-full
                      transition-all
                      duration-300
                    "
                  />

                </a>

              ))}

            </div>


            {/* ================= RIGHT SIDE ================= */}
            <div className="hidden lg:flex items-center gap-1">

              {/* ================= SEARCH ================= */}
              <div className="relative">

                <button
                  type="button"
                  onClick={toggleSearch}
                  aria-label="Search"
                  className="
                    w-11
                    h-11
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-[#292824]
                    hover:bg-[#f5f0e7]
                    hover:text-[#a77d31]
                    transition-all
                    duration-300
                  "
                >
                  {searchOpen ? <CloseIcon /> : <SearchIcon />}
                </button>

              </div>


              {/* ================= CART ================= */}
              <button
                type="button"
                aria-label="Shopping Cart"
                className="
                  relative
                  w-11
                  h-11
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-[#292824]
                  hover:bg-[#f5f0e7]
                  hover:text-[#a77d31]
                  transition-all
                  duration-300
                "
              >

                <CartIcon />

                {/* Cart Number */}
                <span
                  className="
                    absolute
                    -top-1
                    -right-1
                    w-[18px]
                    h-[18px]
                    rounded-full
                    bg-[#b78932]
                    text-white
                    text-[9px]
                    flex
                    items-center
                    justify-center
                  "
                >
                  0
                </span>

              </button>


              {/* ================= LOGIN ================= */}
              <a
                href="#login"
                className="
                  ml-2
                  min-w-[88px]
                  h-[38px]
                  px-4
                  rounded-[11px]
                  border
                  border-[#b78932]
                  flex
                  items-center
                  justify-center
                  text-[13px]
                  font-medium
                  text-[#936d2d]
                  hover:bg-[#b78932]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                Login
              </a>

            </div>


            {/* ================= MOBILE BUTTON ================= */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                lg:hidden
                w-9
                h-9
                rounded-lg
                bg-[#f5f1e8]
                flex
                items-center
                justify-center
                text-[#292824]
              "
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>

          </div>


          {/* ===================================================== */}
          {/*                     SEARCH PANEL                      */}
          {/* ===================================================== */}

          {searchOpen && (

            <div
              className="
                absolute
                left-0
                right-0
                top-[76px]
                z-[100]
                px-2
              "
            >

              <div
                className="
                  bg-white
                  border
                  border-[#e5dccd]
                  rounded-[20px]
                  shadow-[0_20px_50px_rgba(45,35,20,0.15)]
                  p-6
                  lg:p-7
                "
              >

                {/* Search Header */}
                <div className="flex items-center justify-between mb-5">

                  <div>

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.22em]
                        text-[#b78932]
                        font-medium
                        mb-1
                      "
                    >
                      Search
                    </p>

                    <h2
                      className="
                        text-[22px]
                        font-serif
                        text-[#292824]
                      "
                    >
                      What are you looking for?
                    </h2>

                  </div>

                  {/* Close Search */}
                  <button
                    type="button"
                    onClick={() => setSearchOpen(false)}
                    className="
                      w-9
                      h-9
                      rounded-full
                      bg-[#f6f2eb]
                      flex
                      items-center
                      justify-center
                      text-[#55514b]
                      hover:bg-[#eee6d8]
                      transition
                    "
                  >
                    <CloseIcon />
                  </button>

                </div>


                {/* Search Input */}
                <div
                  className="
                    h-[58px]
                    rounded-[15px]
                    border
                    border-[#dcd1c0]
                    bg-[#faf8f4]
                    flex
                    items-center
                    px-4
                    gap-3
                    focus-within:border-[#b78932]
                    focus-within:shadow-[0_0_0_3px_rgba(183,137,50,0.08)]
                    transition-all
                  "
                >

                  <div className="text-[#a77d31]">
                    <SearchIcon />
                  </div>

                  <input
                    autoFocus
                    type="text"
                    placeholder="Search products, collections..."
                    className="
                      flex-1
                      bg-transparent
                      outline-none
                      text-[15px]
                      text-[#292824]
                      placeholder:text-[#9b958b]
                    "
                  />

                  <span
                    className="
                      hidden
                      sm:block
                      text-[10px]
                      text-[#aaa39a]
                      border
                      border-[#ded5c8]
                      rounded-md
                      px-2
                      py-1
                    "
                  >
                    ESC
                  </span>

                </div>


                {/* Quick Search */}
                <div className="mt-6">

                  <p
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.18em]
                      text-[#817a70]
                      mb-3
                    "
                  >
                    Quick Search
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {[
                      "New Arrivals",
                      "Shirts",
                      "Jackets",
                      "Trousers",
                      "Collections",
                    ].map((item) => (

                      <button
                        key={item}
                        type="button"
                        className="
                          px-4
                          py-2
                          rounded-full
                          border
                          border-[#e1d8ca]
                          text-[12px]
                          text-[#4b4741]
                          hover:border-[#b78932]
                          hover:text-[#9a712c]
                          hover:bg-[#faf6ee]
                          transition-all
                        "
                      >
                        {item}
                      </button>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          )}


          {/* ================= MOBILE MENU ================= */}
          {menuOpen && (

            <div className="lg:hidden border-t border-[#eee7dc] px-5 py-4">

              {links.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    block
                    py-3
                    text-[14px]
                    font-medium
                    text-[#302e2a]
                    border-b
                    border-[#f0ebe3]
                    hover:text-[#a77d31]
                  "
                >
                  {link.name}
                </a>

              ))}

              <div className="pt-4">

                {/* Mobile Search */}
                <button
                  type="button"
                  onClick={toggleSearch}
                  className="
                    w-full
                    h-11
                    rounded-xl
                    bg-[#f5f1e8]
                    flex
                    items-center
                    justify-center
                    gap-2
                    text-[14px]
                  "
                >
                  <SearchIcon />
                  Search
                </button>

                {/* Mobile Login */}
                <a
                  href="#login"
                  className="
                    mt-3
                    w-full
                    h-11
                    rounded-xl
                    border
                    border-[#b78932]
                    flex
                    items-center
                    justify-center
                    text-[#936d2d]
                    font-semibold
                  "
                >
                  Login
                </a>

              </div>

            </div>

          )}

        </nav>

      </div>

    </header>
  );
}