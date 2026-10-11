
import { Link } from "react-router-dom";

export default function CategoryCard({
  category,
  language = "en",
}) {
  const isFa = language === "fa";

  const categoryName = isFa
    ? category.nameFa
    : category.name;

  return (
    <Link
      to={`/category/${category.id}`}
      aria-label={categoryName}
      className="group relative block w-full overflow-hidden rounded-2xl bg-neutral-200 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl dark:bg-neutral-900"
    >
      {/* Category Image */}
      <div className="relative aspect-[3/4] w-full overflow-hidden">

        <img
          src={category.image}
          alt={categoryName}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Dark Gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

        {/* Category Content */}
        <div
          dir={isFa ? "rtl" : "ltr"}
          className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start p-5 text-white sm:p-6"
        >
          {/* Category Name */}
          <h3
            className={`w-full leading-snug text-white ${
              isFa
                ? "text-[clamp(18px,1.6vw,24px)] font-bold"
                : "text-[clamp(21px,1.8vw,26px)] font-medium"
            }`}
          >
            {categoryName}
          </h3>

          {/* Explore Products */}
          <div
            className={`mt-3 inline-flex items-center gap-2 border-b border-[#D4AF37] pb-1 text-white transition-colors duration-300 group-hover:text-[#D4AF37] ${
              isFa
                ? "text-sm font-semibold"
                : "text-base font-normal"
            }`}
          >
            <span>
              {isFa
                ? "مشاهده محصولات"
                : "Explore Products"}
            </span>

            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-300 group-hover:translate-x-1"
            >
              {isFa ? "←" : "→"}
            </span>
          </div>
        </div>

        {/* Subtle Border */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />

      </div>
    </Link>
  );
}
