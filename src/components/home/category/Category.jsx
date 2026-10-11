import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CategoryCard from "./CategoryCard.jsx";
import { categories } from "../../../data/categories.js";

// ========================================
// CATEGORY SECTION - FAQIRI
// ========================================

export default function Category() {
  const [language, setLanguage] = useState(() =>
    document.documentElement.lang === "fa" ? "fa" : "en"
  );

  // LANGUAGE CHANGE
  useEffect(() => {
    const updateLanguage = () => {
      setLanguage(
        document.documentElement.lang === "fa" ? "fa" : "en"
      );
    };

    const observer = new MutationObserver(updateLanguage);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    return () => observer.disconnect();
  }, []);

  const isFa = language === "fa";

  return (
    <section
      id="categories"
      dir={isFa ? "rtl" : "ltr"}
      className="
        w-full
        min-w-0
        bg-white
        py-12
        text-neutral-900
        transition-colors
        duration-300
        dark:bg-[#0A0A0A]
        dark:text-white
        lg:py-16
      "
    >
      <div className="mx-auto w-full max-w-[1250px] px-4 sm:px-6 lg:px-8">

        {/* ========================================
            SECTION HEADER
        ======================================== */}
        <div
          className="
            mb-10
            flex
            w-full
            flex-col
            items-center
            gap-3
            text-center
            lg:items-start
            lg:text-start
          "
        >
          {/* SMALL TITLE */}
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
            {isFa ? "مجموعه‌های ما" : "OUR COLLECTIONS"}
          </p>

          {/* MAIN TITLE */}
          <h2
            className="
              m-0
              w-full
              max-w-full
              break-words
              text-[clamp(25px,4vw,44px)]
              font-medium
              leading-tight
              tracking-tight
            "
          >
            {isFa
              ? "خرید بر اساس دسته‌بندی"
              : "Shop by Category"}
          </h2>

          {/* VIEW ALL BUTTON */}
          <Link
            to="/categories"
            className="
              mt-3
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-[#D4AF37]
              px-6
              py-3
              text-base
              font-medium
              text-[#B58D3A]
              transition-all
              duration-300
              hover:bg-[#D4AF37]
              hover:text-black
              dark:text-[#D4AF37]
              dark:hover:text-black
            "
          >
            <span>
              {isFa ? "مشاهده همه" : "VIEW ALL"}
            </span>

            <span aria-hidden="true">
              {isFa ? "←" : "→"}
            </span>
          </Link>
        </div>

        {/* ========================================
            RESPONSIVE CATEGORY GRID
        ======================================== */}
        <div
          className="
            mx-auto
            grid
            w-full
            grid-cols-1
            justify-items-center
            gap-x-8
            gap-y-8
            sm:max-w-[620px]
            sm:grid-cols-2
            sm:gap-x-10
            sm:gap-y-8
            lg:max-w-[1030px]
            lg:grid-cols-3
            lg:gap-x-12
            lg:gap-y-10
          "
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="
                w-full
                min-w-0
                max-w-[280px]
                sm:max-w-[260px]
                lg:max-w-[270px]
              "
            >
              <CategoryCard
                category={category}
                language={language}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}