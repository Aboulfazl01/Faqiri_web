
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../../data/products";
import { categories } from "../../data/categories";

// ==============================
// ACCORDION
// ==============================
function ProductAccordion({ title, children }) {
  return (
    <details className="group border-b border-neutral-200 dark:border-white/10">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
        <span className="text-[15px] font-medium">
          {title}
        </span>

        <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-[#C49A45] transition-all duration-300 group-open:rotate-45 group-open:border-[#D4AF37] group-open:bg-[#D4AF37]/10 dark:border-white/15">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </summary>

      <div className="pb-5 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
        {children}
      </div>
    </details>
  );
}

// ==============================
// PRODUCT DETAILS
// ==============================
export default function ProductDetails() {
  const { productId } = useParams();

  const [language, setLanguage] = useState(
    () => document.documentElement.lang === "fa"
      ? "fa"
      : "en"
  );

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    const updateLanguage = () => {
      setLanguage(
        document.documentElement.lang === "fa"
          ? "fa"
          : "en"
      );
    };

    const observer = new MutationObserver(updateLanguage);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setSelectedSize("");
    setSelectedColor(null);
  }, [productId]);

  const isFa = language === "fa";
  const t = (fa, en) => isFa ? fa : en;

  const product = products.find(
    (item) =>
      item.id === productId &&
      item.active !== false
  );

  if (!product) {
    return (
      <main className="min-h-screen bg-white px-5 py-24 text-center text-neutral-900 dark:bg-[#0A0A0A] dark:text-white">
        <h1 className="text-2xl font-medium">
          {t("محصول پیدا نشد", "Product Not Found")}
        </h1>

        <Link
          to="/"
          className="mt-6 inline-block text-[#C49A45]"
        >
          {t("بازگشت به خانه", "Back to Home")}
        </Link>
      </main>
    );
  }

  const category = categories.find(
    (item) => item.id === product.categoryId
  );

  const name = t(
    product.nameFa || product.name,
    product.name
  );

  const localized = (enKey, faKey) =>
    isFa
      ? product[faKey] || product[enKey] || ""
      : product[enKey] || product[faKey] || "";

  const sizes = product.sizes || [];
  const colors = isFa && product.colorsFa?.length
    ? product.colorsFa
    : product.colors || [];

  const available = product.available !== false;

  const validPrice =
    product.price !== null &&
    product.price !== undefined &&
    product.price !== "" &&
    Number.isFinite(Number(product.price));

  const price = validPrice
    ? Number(product.price).toLocaleString("en-US")
    : null;

  const description = localized(
    "description",
    "descriptionFa"
  );

  const care = localized(
    "careInstructions",
    "careInstructionsFa"
  );

  const delivery = localized(
    "deliveryInfo",
    "deliveryInfoFa"
  );

  const specifications = [
    {
      label: t("جنس پارچه", "Fabric"),
      value: localized("fabric", "fabricFa"),
    },
    {
      label: t("نوع آستین", "Sleeves"),
      value: localized("sleeveType", "sleeveTypeFa"),
    },
    {
      label: t("مدل یقه", "Neckline"),
      value: localized("neckline", "necklineFa"),
    },
    {
      label: t("طراحی لباس", "Design"),
      value: localized("designDetails", "designDetailsFa"),
    },
    {
      label: t("مناسبت استفاده", "Occasion"),
      value: localized("occasion", "occasionFa"),
    },
  ].filter((item) => Boolean(item.value));

  return (
    <main
      dir={isFa ? "rtl" : "ltr"}
      className="min-h-screen bg-white text-neutral-900 transition-colors duration-300 dark:bg-[#0A0A0A] dark:text-white"
    >
      <div className="mx-auto max-w-[1100px] px-4 pb-16 pt-5 sm:px-7 lg:px-8">

        {/* BREADCRUMB */}
        <nav className="mb-7 flex flex-wrap items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
          <Link
            to="/"
            className="transition-colors hover:text-[#D4AF37]"
          >
            {t("خانه", "Home")}
          </Link>

          <span className="opacity-50">/</span>

          {category && (
            <>
              <Link
                to={`/category/${category.id}`}
                className="transition-colors hover:text-[#D4AF37]"
              >
                {t(category.nameFa, category.name)}
              </Link>
              <span className="opacity-50">/</span>
            </>
          )}

          <span className="text-neutral-800 dark:text-neutral-200">
            {name}
          </span>
        </nav>

        {/* MAIN PRODUCT GRID */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-14">

          {/* PRODUCT PHOTO */}
          <div className="mx-auto w-full max-w-[290px] sm:max-w-[340px] lg:mx-0">
            <div className="overflow-hidden rounded-xl ring-1 ring-neutral-200 dark:ring-white/10">
              <img
                src={product.image}
                alt={name}
                className="block h-auto w-full"
                loading="eager"
              />
            </div>
          </div>

          {/* PRODUCT INFORMATION */}
          <div className="min-w-0">

            {/* COLLECTION LABEL */}
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-7 bg-[#D4AF37]" />

              <span className="text-xs font-medium tracking-wide text-[#B58D3A] dark:text-[#D4AF37]">
                {category
                  ? t(category.nameFa, category.name)
                  : "FAQIRI COLLECTION"}
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-[28px] font-medium leading-[1.3] sm:text-[35px]">
              {name}
            </h1>

            {/* PRODUCT CODE */}
            <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
              {t("کد محصول", "Product Code")}
              <span className="mx-2">·</span>
              <span dir="ltr" className="inline-block">
                {product.sku || product.id}
              </span>
            </p>

            {/* PRICE */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-neutral-200 py-5 dark:border-white/10">
              <div>
                <p className="mb-2 text-xs text-neutral-500 dark:text-neutral-400">
                  {t("قیمت", "Price")}
                </p>

                {price !== null ? (
                  <div
                    dir="ltr"
                    className="flex items-baseline gap-2 text-[#B58D3A] dark:text-[#D4AF37]"
                  >
                    <span className="text-[36px] font-medium leading-none">
                      {price}
                    </span>
                    <span className="text-base">
                      AFN
                    </span>
                  </div>
                ) : (
                  <p className="text-base text-[#B58D3A] dark:text-[#D4AF37]">
                    {t("قیمت ثبت نشده", "Price unavailable")}
                  </p>
                )}
              </div>

              {/* STOCK */}
              <div
                className={`flex items-center gap-2 text-xs ${
                  available
                    ? "text-emerald-700 dark:text-emerald-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    available ? "bg-emerald-500" : "bg-red-500"
                  }`}
                />
                {available
                  ? t("موجود", "In Stock")
                  : t("ناموجود", "Out of Stock")}
              </div>
            </div>

            {/* SIZE */}
            {sizes.length > 0 && (
              <div className="mt-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h2 className="text-sm font-medium">
                    {t("انتخاب سایز", "Select Size")}
                  </h2>

                  {selectedSize && (
                    <span className="text-xs text-[#B58D3A] dark:text-[#D4AF37]">
                      {selectedSize}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      aria-pressed={selectedSize === size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[49px] rounded-lg border px-4 py-2.5 text-sm font-normal transition-all duration-200 ${
                        selectedSize === size
                          ? "border-[#D4AF37] bg-[#D4AF37] text-black"
                          : "border-neutral-200 bg-white text-neutral-900 hover:border-[#D4AF37] dark:border-neutral-700 dark:bg-[#171717] dark:text-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* COLORS */}
            {colors.length > 0 && (
              <div className="mt-6">
                <h2 className="mb-3 text-sm font-medium">
                  {t("رنگ‌های موجود", "Available Colors")}
                </h2>

                <div className="flex flex-wrap gap-2">
                  {colors.map((color, index) => (
                    <button
                      key={`${color}-${index}`}
                      type="button"
                      aria-pressed={selectedColor === index}
                      onClick={() => setSelectedColor(index)}
                      className={`rounded-full border px-4 py-2 text-sm transition-all duration-200 ${
                        selectedColor === index
                          ? "border-[#D4AF37] bg-[#D4AF37]/15 text-[#A67C25] dark:text-[#D4AF37]"
                          : "border-neutral-200 text-neutral-600 hover:border-[#D4AF37] dark:border-neutral-700 dark:text-neutral-300"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* PRODUCT DETAILS */}
            {(description ||
              specifications.length > 0 ||
              care ||
              delivery) && (
              <section className="mt-7">
                <div className="mb-1 flex items-center gap-3">
                  <span className="h-5 w-[3px] rounded-full bg-[#D4AF37]" />
                  <h2 className="text-base font-medium">
                    {t("جزئیات محصول", "Product Details")}
                  </h2>
                </div>

                <div className="border-t border-neutral-200 dark:border-white/10">

                  {description && (
                    <ProductAccordion
                      title={t("توضیحات لباس", "Description")}
                    >
                      <p className="whitespace-pre-line">
                        {description}
                      </p>
                    </ProductAccordion>
                  )}

                  {specifications.length > 0 && (
                    <ProductAccordion
                      title={t("مشخصات لباس", "Specifications")}
                    >
                      <div className="space-y-3">
                        {specifications.map((item) => (
                          <div
                            key={item.label}
                            className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-5"
                          >
                            <span className="text-neutral-500">
                              {item.label}
                            </span>
                            <span className="text-neutral-900 dark:text-white sm:max-w-[65%] sm:text-end">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </ProductAccordion>
                  )}

                  {care && (
                    <ProductAccordion
                      title={t("راهنمای نگهداری", "Care Instructions")}
                    >
                      <p className="whitespace-pre-line">
                        {care}
                      </p>
                    </ProductAccordion>
                  )}

                  {delivery && (
                    <ProductAccordion
                      title={t("ارسال و تحویل", "Delivery & Shipping")}
                    >
                      <p className="whitespace-pre-line">
                        {delivery}
                      </p>
                    </ProductAccordion>
                  )}
                </div>
              </section>
            )}

            {/* ORDER NOTICE */}
            <p className="mt-6 text-xs leading-6 text-neutral-500 dark:text-neutral-400">
              {t(
                "امکان ثبت سفارش از طریق واتساپ به‌زودی فعال می‌شود.",
                "WhatsApp ordering will be available soon."
              )}
            </p>

            {/* BACK TO COLLECTION */}
            {category && (
              <Link
                to={`/category/${category.id}`}
                className="mt-4 inline-flex items-center gap-3 rounded-lg border border-[#D4AF37] px-5 py-3 text-sm font-medium text-[#A67C25] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black dark:text-[#D4AF37] dark:hover:text-black"
              >
                {t("مشاهده محصولات بیشتر", "Explore More Products")}
                <span aria-hidden="true">
                  {isFa ? "←" : "→"}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
