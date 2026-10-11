
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({
  product,
  language = "en",
  isFavorite = false,
  onToggleFavorite,
}) {
  const [imageError, setImageError] = useState(false);

  const isFa = language === "fa";

  const productName =
    product.name?.[language] ||
    product.name?.en ||
    "";

  const productUrl = `/products/${product.id}`;

  return (
    <article
      className="
        group
        mx-auto
        flex
        h-full
        w-full
        min-w-0
        max-w-[280px]
        flex-col
        sm:max-w-[260px]
        lg:max-w-[270px]
      "
    >
      {/* =========================
          PRODUCT IMAGE
      ========================= */}
      <div
        className="
          relative
          aspect-[2/3]
          w-full
          overflow-hidden
          rounded-[14px]
          bg-[#F0E9DF]
          dark:bg-[#292520]
        "
      >
        {/* CLICKABLE IMAGE */}
        <Link
          to={productUrl}
          aria-label={
            isFa
              ? `مشاهده مشخصات ${productName}`
              : `View details for ${productName}`
          }
          className="
            absolute
            inset-0
            block
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-[#D4AF37]
          "
        >
          {!imageError ? (
            <img
              src={product.image}
              alt={productName}
              loading="lazy"
              decoding="async"
              onError={() => setImageError(true)}
              className="
                block
                h-full
                w-full
                object-cover
                object-center
                transform-gpu
                transition-transform
                duration-700
                ease-out
                motion-safe:group-hover:scale-[1.04]
                motion-reduce:transition-none
              "
              style={{
                objectPosition:
                  product.imagePosition || "center",
              }}
            />
          ) : (
            <div className="flex h-full items-center justify-center p-4 text-center text-sm text-neutral-500 dark:text-neutral-400">
              {isFa
                ? "تصویر موجود نیست"
                : "Image unavailable"}
            </div>
          )}
        </Link>

        {/* =========================
            FAVORITE BUTTON
        ========================= */}
        <button
          type="button"
          onClick={() =>
            onToggleFavorite?.(product.id)
          }
          aria-pressed={isFavorite}
          aria-label={
            isFavorite
              ? isFa
                ? "حذف از علاقه‌مندی‌ها"
                : "Remove from favorites"
              : isFa
                ? "افزودن به علاقه‌مندی‌ها"
                : "Add to favorites"
          }
          className={`
            absolute
            right-2.5
            top-2.5
            z-20
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white/95
            shadow-md
            transition-all
            duration-300
            hover:scale-110
            focus-visible:outline-2
            focus-visible:outline-[#B58B2A]
            ${
              isFavorite
                ? "text-[#B58B2A]"
                : "text-neutral-800 hover:text-[#B58B2A]"
            }
          `}
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8Z" />
          </svg>
        </button>

        {/* GOLD HOVER LINE */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-10
            h-[2px]
            w-0
            bg-[#B58B2A]
            transition-all
            duration-500
            group-hover:w-full
            dark:bg-[#D4AF37]
          "
        />
      </div>

      {/* =========================
          PRODUCT INFORMATION
      ========================= */}
      <div className="flex flex-1 flex-col pt-3">
        <div className="min-w-0">

          {/* BRAND */}
          <p
            className="
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#B58B2A]
              dark:text-[#D4AF37]
            "
          >
            {product.brand}
          </p>

          {/* PRODUCT NAME */}
          <h3
            className="
              mt-1.5
              min-h-[48px]
              line-clamp-2
              text-[16px]
              font-semibold
              leading-[1.5]
            "
          >
            <Link
              to={productUrl}
              className="
                text-neutral-950
                transition-colors
                duration-300
                hover:text-[#B58B2A]
                dark:text-white
                dark:hover:text-[#D4AF37]
              "
            >
              {productName}
            </Link>
          </h3>

          {/* PRICE */}
          {product.price != null && (
            <p className="mt-2 text-[15px] font-semibold text-neutral-900 dark:text-white">
              {Number(product.price).toLocaleString(
                "en-US"
              )}
              {" "}
              {product.currency || "AFN"}
            </p>
          )}
        </div>

        {/* GOLD DECORATION */}
        <div
          className="
            mt-auto
            h-[2px]
            w-9
            rounded-full
            bg-[#B58B2A]
            transition-all
            duration-300
            group-hover:w-14
            dark:bg-[#D4AF37]
          "
        />
      </div>
    </article>
  );
}
