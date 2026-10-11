
import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";
import { products } from "./productsData";

// =====================================
// RANDOM PRODUCTS
// =====================================

function shuffleProducts(items) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [
      result[j],
      result[i],
    ];
  }

  if (typeof window === "undefined") {
    return result;
  }

  try {
    const storage = window.sessionStorage;

    const previous = JSON.parse(
      storage.getItem("faqiri-home-last-six") || "[]"
    );

    if (
      result.length > 6 &&
      Array.isArray(previous) &&
      previous.length === 6
    ) {
      const sameSelection = result
        .slice(0, 6)
        .every((item) => previous.includes(item.id));

      if (sameSelection) {
        const outsideIndex = result.findIndex(
          (item, index) =>
            index >= 6 && !previous.includes(item.id)
        );

        if (outsideIndex !== -1) {
          [result[5], result[outsideIndex]] = [
            result[outsideIndex],
            result[5],
          ];
        }
      }
    }

    storage.setItem(
      "faqiri-home-last-six",
      JSON.stringify(
        result.slice(0, 6).map((item) => item.id)
      )
    );
  } catch {
    // Randomization works without storage
  }

  return result;
}

const randomizedProducts = shuffleProducts(products);

// =====================================
// RESPONSIVE PRODUCT COUNT
// =====================================

function getInitialCount() {
  if (typeof window === "undefined") return 6;

  if (window.innerWidth < 640) return 2;

  if (window.innerWidth < 1024) return 4;

  return 6;
}

// =====================================
// LANGUAGE
// =====================================

function getDocumentLanguage() {
  if (typeof document === "undefined") return "en";

  return document.documentElement.lang
    .toLowerCase()
    .startsWith("fa")
    ? "fa"
    : "en";
}

const translations = {
  en: {
    subtitle: "EXCLUSIVE FAQIRI COLLECTION",
    title: "Explore Our Collection",
    more: "More Products",
    less: "Show Less",
    empty: "No products available.",
  },

  fa: {
    subtitle: "کالکشن اختصاصی فقیری",
    title:"محصولات پوشاک فقیری",
    more: "محصولات بیشتر",
    less: "نمایش کمتر",
    empty: "محصولی موجود نیست.",
  },
};

// =====================================
// MAIN COMPONENT
// =====================================

export default function Products({ language }) {
  const [documentLanguage, setDocumentLanguage] =
    useState(getDocumentLanguage);

  const [pageSize, setPageSize] =
    useState(getInitialCount);

  const [visibleCount, setVisibleCount] =
    useState(getInitialCount);

  const [favorites, setFavorites] = useState(() => {
    if (typeof window === "undefined") return [];

    try {
      const saved = JSON.parse(
        window.localStorage.getItem(
          "faqiri-favorites"
        ) || "[]"
      );

      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

  // LANGUAGE CHANGES
  useEffect(() => {
    const updateLanguage = () => {
      setDocumentLanguage(getDocumentLanguage());
    };

    updateLanguage();

    const observer = new MutationObserver(updateLanguage);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    return () => observer.disconnect();
  }, []);

  // RESPONSIVE
  useEffect(() => {
    const updateSize = () => {
      const nextSize = getInitialCount();

      setPageSize((previous) =>
        previous === nextSize ? previous : nextSize
      );
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () =>
      window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    setVisibleCount(pageSize);
  }, [pageSize]);

  // SAVE FAVORITES
  useEffect(() => {
    try {
      window.localStorage.setItem(
        "faqiri-favorites",
        JSON.stringify(favorites)
      );
    } catch {
      // Storage unavailable
    }
  }, [favorites]);

  const currentLanguage = language
    ? String(language).toLowerCase().startsWith("fa")
      ? "fa"
      : "en"
    : documentLanguage;

  const isFa = currentLanguage === "fa";

  const t = translations[currentLanguage];

  const visibleProducts = randomizedProducts.slice(
    0,
    visibleCount
  );

  const hasMore =
    visibleCount < randomizedProducts.length;

  const canShowLess =
    visibleCount > pageSize;

  // MORE PRODUCTS - MOBILE
  const handleMore = () => {
    setVisibleCount((previous) =>
      Math.min(
        previous + 2,
        randomizedProducts.length
      )
    );
  };

  // SHOW LESS
  const handleLess = () => {
    setVisibleCount(pageSize);

    document
      .getElementById("products")
      ?.scrollIntoView({
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "auto"
          : "smooth",
        block: "start",
      });
  };

  // FAVORITES
  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  return (
    <section
      id="products"
      dir={isFa ? "rtl" : "ltr"}
      className="
        w-full
        bg-[#F7F5F1]
        py-10
        transition-colors duration-300
        dark:bg-[#101010]
        sm:py-12
        lg:py-14
      "
    >
      <div
        key={currentLanguage}
        className="
          products-language-enter
          mx-auto
          w-full
          max-w-[1200px]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* TITLE */}
        <div className="mb-8">

          <p
            className="
              mb-2
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-[#B58B2A]
              dark:text-[#D4AF37]
            "
          >
            {t.subtitle}
          </p>

          <h2
            className="
              text-[30px]
              font-semibold
              leading-tight
              tracking-tight
              text-neutral-950
              dark:text-white
              sm:text-[35px]
              lg:text-[39px]
            "
            style={{
              fontFamily: isFa
                ? "inherit"
                : "Georgia, 'Times New Roman', serif",
            }}
          >
            {t.title}
          </h2>

          {/* GOLD LINE */}
          <div
            className="
              mt-3
              h-[3px] w-12
              rounded-full
              bg-[#B58B2A]
              dark:bg-[#D4AF37]
            "
          />
        </div>

        {/* PRODUCTS GRID */}
        {visibleProducts.length > 0 ? (
          <div
            className="
              grid
              w-full
              grid-cols-1
              items-stretch
              gap-x-5
              gap-y-8
              sm:grid-cols-2
              sm:gap-x-6
              sm:gap-y-9
              lg:grid-cols-3
              lg:gap-x-7
              lg:gap-y-10
            "
          >
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                language={currentLanguage}
                isFavorite={favorites.includes(
                  product.id
                )}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[180px] items-center justify-center rounded-xl border border-[#B58B2A]/20 p-5 text-center text-sm text-neutral-500 dark:text-neutral-400">
            {t.empty}
          </div>
        )}

        {/* MOBILE ONLY MORE PRODUCTS */}
        {(hasMore || canShowLess) && (
          <div
            className="
              mt-9
              flex flex-col
              items-center
              justify-center
              gap-3
              sm:hidden
            "
          >
            {hasMore && (
              <button
                type="button"
                onClick={handleMore}
                className="
                  inline-flex
                  min-h-[44px]
                  min-w-[160px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border border-[#B58B2A]
                  bg-transparent
                  px-6 py-3
                  text-[13px]
                  font-semibold
                  text-[#98721E]
                  transition-all duration-300
                  hover:bg-[#B58B2A]
                  hover:text-white
                  active:scale-[0.97]
                  dark:border-[#D4AF37]
                  dark:text-[#D4AF37]
                  dark:hover:bg-[#D4AF37]
                  dark:hover:text-black
                "
              >
                {t.more}

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            )}

            {canShowLess && (
              <button
                type="button"
                onClick={handleLess}
                className="
                  px-5 py-2
                  text-[12px]
                  font-medium
                  text-neutral-500
                  underline
                  underline-offset-4
                  transition-colors
                  hover:text-[#B58B2A]
                  dark:text-neutral-300
                  dark:hover:text-[#D4AF37]
                "
              >
                {t.less}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
