
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { categories } from "../../data/categories";
import { products } from "../../data/products";

export default function CategoryProducts() {
  const { categoryId } = useParams();

  const [language, setLanguage] = useState(() =>
    document.documentElement.lang === "fa" ? "fa" : "en"
  );

  // LANGUAGE CHANGE OBSERVER
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setLanguage(
        document.documentElement.lang === "fa" ? "fa" : "en"
      );
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    return () => observer.disconnect();
  }, []);

  const isFa = language === "fa";
  const t = (fa, en) => (isFa ? fa : en);

  // FIND CATEGORY
  const category = categories.find(
    (item) => item.id === categoryId
  );

  // CATEGORY NOT FOUND
  if (!category) {
    return (
      <main className="min-h-screen bg-white px-5 py-24 text-center text-neutral-900 dark:bg-[#0A0A0A] dark:text-white">
        <h1 className="text-3xl font-medium">
          {t(
            "دسته‌بندی پیدا نشد",
            "Collection Not Found"
          )}
        </h1>

        <Link
          to="/"
          className="mt-6 inline-block text-[#D4AF37]"
        >
          {t("بازگشت به خانه", "Back to Home")}
        </Link>
      </main>
    );
  }

  // FILTER PRODUCTS
  const categoryProducts = products.filter(
    (product) =>
      product.categoryId === category.id &&
      product.active !== false
  );

  return (
    <main
      dir={isFa ? "rtl" : "ltr"}
      className="min-h-screen bg-white text-neutral-900 transition-colors duration-300 dark:bg-[#0A0A0A] dark:text-white"
    >
      <div className="mx-auto max-w-[1250px] px-4 pb-16 pt-6 sm:px-6 lg:px-8">

        {/* ============================
            BREADCRUMB
        ============================ */}
        <nav className="mb-7 flex flex-wrap items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
          <Link
            to="/"
            className="transition-colors hover:text-[#D4AF37]"
          >
            {t("خانه", "Home")}
          </Link>

          <span>/</span>

          <span className="text-neutral-900 dark:text-white">
            {t(category.nameFa, category.name)}
          </span>
        </nav>

        {/* ============================
            COLLECTION HEADER
        ============================ */}
        <header className="relative overflow-hidden rounded-2xl bg-[#F7F4EF] px-6 py-9 text-center dark:bg-[#171717] sm:px-9 sm:py-12 sm:text-start">

          {/* GOLD BACKGROUND EFFECT */}
          <div className="pointer-events-none absolute -end-16 -top-16 h-52 w-52 rounded-full bg-[#D4AF37]/10 blur-3xl" />

          <div className="relative">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#B68D32] dark:text-[#D4AF37]">
              {t(
                "مجموعه‌های فقیری",
                "FAQIRI COLLECTIONS"
              )}
            </p>

            <h1 className="text-3xl font-medium leading-tight sm:text-4xl">
              {t(category.nameFa, category.name)}
            </h1>

            {/* GOLD DIVIDER */}
            <div className="mx-auto mt-5 h-[2px] w-14 bg-[#D4AF37] sm:mx-0" />

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-400 sm:mx-0 sm:text-base">
              {t(
                "مجموعه لباس‌های ما را مشاهده کنید و استایل مورد علاقه خود را انتخاب نمایید.",
                "Explore our collection and discover the perfect style for you."
              )}
            </p>
          </div>
        </header>

        {/* ============================
            PRODUCTS HEADER
        ============================ */}
        <div className="mb-7 mt-10 flex flex-col items-center gap-4 border-b border-neutral-200 pb-5 text-center dark:border-neutral-800 sm:flex-row sm:items-end sm:justify-between sm:text-start">

          <div>
            <h2 className="text-xl font-medium sm:text-2xl">
              {t(
                "محصولات این مجموعه",
                "Explore Products"
              )}
            </h2>

            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              {categoryProducts.length}{" "}
              {t("محصول", "Products")}
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#B68D32] transition-colors hover:text-[#D4AF37] dark:text-[#D4AF37]"
          >
            <span aria-hidden="true">
              {isFa ? "→" : "←"}
            </span>

            {t(
              "بازگشت به خانه",
              "Back to Home"
            )}
          </Link>
        </div>

        {/* ============================
            PRODUCTS GRID
        ============================ */}
        {categoryProducts.length === 0 ? (
          <div className="rounded-2xl border border-neutral-200 px-5 py-16 text-center dark:border-neutral-800">
            <p className="text-neutral-500 dark:text-neutral-400">
              {t(
                "هنوز محصولی در این مجموعه ثبت نشده است.",
                "No products have been added to this collection yet."
              )}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start justify-items-center gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">

            {categoryProducts.map((product) => {
              const productName = t(
                product.nameFa || product.name,
                product.name
              );

              const price =
                product.price != null
                  ? `${Number(product.price).toLocaleString("en-US")} AFN`
                  : t(
                      "قیمت ثبت نشده",
                      "Price unavailable"
                    );

              return (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  aria-label={productName}
                  className="group block w-full min-w-0 max-w-[350px]"
                >

                  {/* =====================
                      PRODUCT IMAGE
                  ===================== */}
                  <div className="relative w-full overflow-hidden rounded-2xl">

                    <img
                      src={product.image}
                      alt={productName}
                      loading="lazy"
                      className="block h-auto w-full"
                    />

                    {/* OUT OF STOCK */}
                    {product.available === false && (
                      <span className="absolute start-3 top-3 rounded-full bg-black/85 px-3 py-1.5 text-xs text-white">
                        {t("ناموجود", "Sold Out")}
                      </span>
                    )}

                    {/* SUBTLE BORDER */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 dark:ring-white/10" />

                  </div>

                  {/* =====================
                      PRODUCT INFORMATION
                  ===================== */}
                  <div className="pt-5 text-center sm:text-start">

                    {/* CATEGORY NAME */}
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {t(
                        category.nameFa,
                        category.name
                      )}
                    </p>

                    {/* PRODUCT NAME */}
                    <h3 className="mx-auto mt-2 max-w-full text-[21px] font-medium leading-snug transition-colors duration-300 group-hover:text-[#D4AF37] sm:mx-0">
                      {productName}
                    </h3>

                    {/* PRODUCT PRICE */}
                    <p
                      dir="ltr"
                      className={`mt-3 text-center text-xl font-medium text-[#B68D32] dark:text-[#D4AF37] ${
                        isFa
                          ? "sm:text-right"
                          : "sm:text-left"
                      }`}
                    >
                      {price}
                    </p>

                    {/* VIEW DETAILS BUTTON */}
                    <div className="mt-5 flex justify-center sm:justify-start">

                      <div className="inline-flex items-center justify-center gap-3 rounded-full border border-[#D4AF37] px-6 py-3 text-sm font-medium transition-all duration-300 group-hover:bg-[#D4AF37] group-hover:text-black">

                        <span>
                          {t(
                            "مشاهده مشخصات",
                            "View Details"
                          )}
                        </span>

                        <span
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          {isFa ? "←" : "→"}
                        </span>

                      </div>

                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
