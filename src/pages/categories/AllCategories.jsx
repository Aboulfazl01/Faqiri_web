
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CategoryCard from "../../components/home/category/CategoryCard.jsx";
import { categories } from "../../data/categories.js";

export default function AllCategories() {
  const [language, setLanguage] = useState(() =>
    document.documentElement.lang === "fa" ? "fa" : "en"
  );

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
  const t = (fa, en) => (isFa ? fa : en);

  return (
    <main
      dir={isFa ? "rtl" : "ltr"}
      className="min-h-screen w-full bg-white text-neutral-900 transition-colors duration-300 dark:bg-[#0A0A0A] dark:text-white"
    >
      <div className="mx-auto max-w-[1250px] px-4 pb-16 pt-7 sm:px-6 lg:px-8">

        {/* BREADCRUMB */}
        <nav className="mb-8 flex flex-wrap items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
          <Link
            to="/"
            className="transition-colors hover:text-[#D4AF37]"
          >
            {t("خانه", "Home")}
          </Link>

          <span className="text-[#D4AF37]">/</span>

          <span className="text-neutral-900 dark:text-white">
            {t("همه دسته‌بندی‌ها", "All Categories")}
          </span>
        </nav>

        {/* PAGE HEADER */}
        <header className="relative mb-10 overflow-hidden rounded-2xl border border-neutral-200 bg-[#F8F6F2] px-5 py-10 text-center dark:border-white/10 dark:bg-[#151515] sm:px-9 lg:px-12 lg:text-start">

          <div className="pointer-events-none absolute -end-16 -top-20 h-56 w-56 rounded-full bg-[#D4AF37]/10 blur-3xl" />

          <div className="relative z-10">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#B58D3A] dark:text-[#D4AF37]">
              {t(
                "مجموعه‌های فقیری",
                "FAQIRI COLLECTIONS"
              )}
            </p>

            <h1 className="text-[clamp(26px,4vw,44px)] font-medium leading-tight">
              {t(
                "همه دسته‌بندی‌ها",
                "Explore All Categories"
              )}
            </h1>

            <div className="mx-auto mt-5 h-[2px] w-14 bg-[#D4AF37] lg:mx-0" />

            <p className="mx-auto mt-5 max-w-[650px] text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:text-base lg:mx-0">
              {t(
                "مجموعه لباس‌های فقیری را کشف کنید و دسته‌بندی مورد علاقه خود را انتخاب نمایید.",
                "Discover our fashion collections and find your perfect style."
              )}
            </p>
          </div>
        </header>

        {/* COLLECTIONS HEADING */}
        <div className="mb-8 flex flex-col items-center justify-between gap-4 border-b border-neutral-200 pb-5 text-center dark:border-white/10 sm:flex-row sm:text-start">

          <div>
            <h2 className="text-xl font-medium sm:text-2xl">
              {t("مجموعه‌های ما", "Our Collections")}
            </h2>

            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              {categories.length}{" "}
              {t("دسته‌بندی", "Collections")}
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37] px-5 py-2.5 text-sm font-medium text-[#B58D3A] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black dark:text-[#D4AF37] dark:hover:text-black"
          >
            {t("بازگشت به خانه", "Back to Home")}
            <span aria-hidden="true">
              {isFa ? "→" : "←"}
            </span>
          </Link>
        </div>

        {/* RESPONSIVE CATEGORY GRID */}
        <section aria-label={t("دسته‌بندی‌ها", "Categories")}>
          <div
            className="
              mx-auto
              grid
              w-full
              grid-cols-1
              justify-items-center
              gap-x-5
              gap-y-6
              sm:max-w-[540px]
              sm:grid-cols-2
              lg:max-w-[850px]
              lg:grid-cols-3
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
        </section>

        {/* BOTTOM */}
        <div className="mt-14 flex flex-col items-center gap-4 border-t border-neutral-200 pt-8 text-center dark:border-white/10">

          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {t(
              "دسته‌بندی مورد علاقه خود را انتخاب کنید.",
              "Choose your favorite collection."
            )}
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-7 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-[#BD9439]"
          >
            {t(
              "بازگشت به صفحه اصلی",
              "Return to Homepage"
            )}
            <span aria-hidden="true">
              {isFa ? "←" : "→"}
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
