
import { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// =====================================
// GLOBAL COMPONENTS
// =====================================
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";

// =====================================
// HOME COMPONENTS
// =====================================
import Hero from "./components/home/hero/Hero.jsx";

import Category from "./components/home/category/Category.jsx";

import ExclusiveCollection from "./components/home/featured/ExclusiveCollection.jsx";

import Products from "./components/home/products/Products.jsx";

import Benefits from "./components/home/benefits/Benefits.jsx";

import FaqiriSays from "./components/home/faqiriSays/FaqiriSays.jsx";

import FollowWorld from "./components/home/followWorld/FollowWorld.jsx";

// =====================================
// PAGES
// =====================================
import AdminLogin from "./pages/admin/AdminLogin.jsx";

import AllCategories from "./pages/categories/AllCategories.jsx";

import CategoryProducts from "./pages/category/CategoryProducts.jsx";

// =====================================
// PRODUCT DETAILS
// =====================================

// CATEGORY PRODUCT DETAILS
import ProductDetails from "./pages/product/ProductDetails.jsx";

// HOME CLOTHING DETAILS
import ClothingDetails from "./pages/product/ClothingDetails.jsx";

// =====================================
// HOME PAGE
// =====================================
function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <Hero />

      {/* CATEGORY SECTION */}
      <Category />

      {/* EXCLUSIVE COLLECTION */}
      <ExclusiveCollection />

      {/* PRODUCTS SECTION */}
      <Products />

      {/* BENEFITS SECTION */}
      <Benefits />

      {/* FAQIRI SAYS SECTION */}
      <FaqiriSays />

      {/* FOLLOW OUR WORLD SECTION */}
      <FollowWorld />
    </main>
  );
}

// =====================================
// TEMPORARY SHOP PRODUCTS PAGE
// =====================================
function ShopProductsPage() {
  const getLanguage = () => {
    if (typeof document === "undefined") {
      return "en";
    }

    return document.documentElement.lang
      .toLowerCase()
      .startsWith("fa")
      ? "fa"
      : "en";
  };

  const [language, setLanguage] = useState(getLanguage);

  useEffect(() => {
    const updateLanguage = () => {
      setLanguage(getLanguage());
    };

    updateLanguage();

    const observer = new MutationObserver(updateLanguage);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    return () => observer.disconnect();
  }, []);

  const isFa = language === "fa";

  return (
    <main
      dir={isFa ? "rtl" : "ltr"}
      className="
        flex min-h-[75vh]
        flex-col
        items-center
        justify-center
        bg-white
        px-5 py-16
        text-center
        text-neutral-900
        dark:bg-[#0A0A0A]
        dark:text-white
      "
    >
      <p
        className="
          text-[12px]
          font-semibold
          tracking-[0.2em]
          text-[#B58B2A]
          dark:text-[#D4AF37]
        "
      >
        FAQIRI COLLECTION
      </p>

      <h1
        className="
          mt-4
          text-[32px]
          font-semibold
          sm:text-[42px]
        "
      >
        {isFa
          ? "محصولات فقیری"
          : "Shop Products"}
      </h1>

      <div
        className="
          mt-4
          h-[3px]
          w-14
          rounded-full
          bg-[#D4AF37]
        "
      />

      <p
        className="
          mt-6
          max-w-[450px]
          text-[15px]
          leading-8
          text-neutral-500
          dark:text-neutral-400
        "
      >
        {isFa
          ? "صفحه تمام محصولات فقیری به‌زودی آماده می‌شود."
          : "Our complete FAQIRI collection is coming soon."}
      </p>

      <Link
        to="/"
        className="
          mt-8
          rounded-full
          border border-[#B58B2A]
          px-7 py-3
          text-[13px]
          font-medium
          text-[#B58B2A]
          transition-all
          duration-300
          hover:bg-[#B58B2A]
          hover:text-white
          dark:border-[#D4AF37]
          dark:text-[#D4AF37]
          dark:hover:bg-[#D4AF37]
          dark:hover:text-black
        "
      >
        {isFa
          ? "بازگشت به خانه"
          : "Back to Home"}
      </Link>
    </main>
  );
}

// =====================================
// MAIN APP
// =====================================
function App() {
  return (
    <BrowserRouter>
      <div
        className="
          flex
          min-h-screen
          flex-col
          bg-white
          transition-colors
          duration-300
          dark:bg-[#0A0A0A]
        "
      >
        {/* =====================================
            GLOBAL NAVBAR
           ===================================== */}
        <Navbar />

        {/* =====================================
            WEBSITE PAGE CONTENT
           ===================================== */}
        <div className="flex-1">
          <Routes>

            {/* HOME PAGE */}
            <Route
              path="/"
              element={<HomePage />}
            />

            {/* ALL CATEGORIES */}
            <Route
              path="/categories"
              element={<AllCategories />}
            />

            {/* CATEGORY PRODUCTS */}
            <Route
              path="/category/:categoryId"
              element={<CategoryProducts />}
            />

            {/* CATEGORY PRODUCT DETAILS */}
            <Route
              path="/product/:productId"
              element={<ProductDetails />}
            />

            {/* SHOP PRODUCTS PAGE */}
            <Route
              path="/products"
              element={<ShopProductsPage />}
            />

            {/* CLOTHING DETAILS */}
            <Route
              path="/products/:productId"
              element={<ClothingDetails />}
            />

            {/* ADMIN LOGIN */}
            <Route
              path="/admin/login"
              element={<AdminLogin />}
            />

          </Routes>
        </div>

        {/* =====================================
            GLOBAL FOOTER
           ===================================== */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
