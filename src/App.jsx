
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

// =====================================
// LANGUAGE CONTEXT
// =====================================
import { useLanguage } from "./context/LanguageContext.jsx";

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
import ProductDetails from "./pages/product/ProductDetails.jsx";

import ClothingDetails from "./pages/product/ClothingDetails.jsx";

// =====================================
// HOME PAGE
// =====================================
function HomePage() {
  return (
    <main>
      {/* HERO */}
      <Hero />

      {/* CATEGORIES */}
      <Category />

      {/* EXCLUSIVE COLLECTION */}
      <ExclusiveCollection />

      {/* PRODUCTS */}
      <Products />

      {/* BENEFITS */}
      <Benefits />

      {/* FAQIRI SAYS */}
      <FaqiriSays />

      {/* FOLLOW OUR WORLD */}
      <FollowWorld />
    </main>
  );
}

// =====================================
// TEMPORARY SHOP PRODUCTS PAGE
// =====================================
function ShopProductsPage() {
  const { language } = useLanguage();

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
      {/* SECTION LABEL */}
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

      {/* TITLE */}
      <h1
        className="
          mt-4
          font-ravi
          text-[32px]
          font-semibold
          sm:text-[42px]
        "
      >
        {isFa
          ? "محصولات پوشاک فقیری"
          : "FAQIRI Clothing Products"}
      </h1>

      {/* GOLD DIVIDER */}
      <div
        className="
          mt-4
          h-[3px]
          w-14
          rounded-full
          bg-[#D4AF37]
        "
      />

      {/* DESCRIPTION */}
      <p
        className="
          mt-6
          max-w-[450px]
          font-ravi
          text-[16px]
          leading-8
          text-neutral-500
          dark:text-neutral-400
        "
      >
        {isFa
          ? "صفحه تمام محصولات پوشاک فقیری به‌زودی آماده می‌شود."
          : "Our complete FAQIRI clothing collection is coming soon."}
      </p>

      {/* BACK TO HOME */}
      <Link
        to="/"
        className="
          mt-8
          rounded-full
          border border-[#B58B2A]
          px-7 py-3
          font-ravi
          text-[15px]
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
// APP CONTENT
// =====================================
function AppContent() {
  const { transitionStage } = useLanguage();

  const animationClass =
    transitionStage === "exiting"
      ? "faqiri-language-exiting"
      : transitionStage === "entering"
      ? "faqiri-language-entering"
      : "";

  return (
    <div
      className={`
        faqiri-language-transition
        ${animationClass}
        flex
        min-h-screen
        flex-col
        bg-white
        transition-colors
        duration-300
        dark:bg-[#0A0A0A]
      `}
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

          {/* SHOP PRODUCTS */}
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
  );
}

// =====================================
// MAIN APP
// =====================================
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
