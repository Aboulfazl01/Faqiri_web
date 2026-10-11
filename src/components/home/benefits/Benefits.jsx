
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  Award,
  Headphones,
} from "lucide-react";

import { useLanguage } from "../../../context/LanguageContext.jsx";
import "./Benefits.css";

// =====================================
// BENEFITS DATA
// =====================================

const benefits = [
  {
    id: 1,
    icon: Truck,
    en: {
      title: "Fast Shipping",
      description: "Reliable delivery for your orders.",
    },
    fa: {
      title: "ارسال سریع",
      description: "ارسال سریع و مطمئن سفارش‌های شما.",
    },
  },
  {
    id: 2,
    icon: RotateCcw,
    en: {
      title: "Easy Returns",
      description: "Simple and convenient returns.",
    },
    fa: {
      title: "بازگشت آسان",
      description: "بازگشت آسان و راحت محصولات.",
    },
  },
  {
    id: 3,
    icon: ShieldCheck,
    en: {
      title: "Secure Payment",
      description: "Shop with greater confidence.",
    },
    fa: {
      title: "پرداخت امن",
      description: "خرید آسان و با اطمینان کامل.",
    },
  },
  {
    id: 4,
    icon: Award,
    en: {
      title: "Premium Quality",
      description: "Products selected with care.",
    },
    fa: {
      title: "کیفیت عالی",
      description: "محصولات باکیفیت و انتخاب‌شده.",
    },
  },
  {
    id: 5,
    icon: Headphones,
    en: {
      title: "Customer Support",
      description: "Here to help with your questions.",
    },
    fa: {
      title: "پشتیبانی مشتریان",
      description: "همیشه آماده پاسخ‌گویی به شما.",
    },
  },
];

// =====================================
// SINGLE GROUP
// =====================================

function BenefitsGroup({ language, duplicate = false }) {
  const isFa = language === "fa";

  return (
    <div
      className="faqiri-loop-group"
      dir="ltr"
      aria-hidden={duplicate ? "true" : undefined}
    >
      {benefits.map((benefit) => {
        const Icon = benefit.icon;
        const content = isFa ? benefit.fa : benefit.en;

        return (
          <div
            key={benefit.id}
            className="faqiri-loop-item"
            dir={isFa ? "rtl" : "ltr"}
          >
            {/* ICON */}
            <div
              className="
                flex
                h-[42px]
                w-[42px]
                items-center
                justify-center
                rounded-xl
                bg-[#F6F5F3]
                text-black
                dark:bg-[#202020]
                dark:text-white
              "
            >
              <Icon size={21} strokeWidth={1.8} />
            </div>

            {/* TITLE */}
            <h3
              className="
                mt-3
                text-[17px]
                font-semibold
                leading-6
                text-[#151515]
                dark:text-white
              "
            >
              {content.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                mt-1.5
                text-[15px]
                leading-[1.6]
                text-[#888888]
                dark:text-[#A3A3A3]
              "
            >
              {content.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

// =====================================
// MAIN BENEFITS
// =====================================

export default function Benefits() {
  const { language } = useLanguage();

  return (
    <section
      aria-label={
        language === "fa"
          ? "مزایای خرید از فقیری"
          : "Why Shop With Faqiri"
      }
      className="
        w-full
        overflow-hidden
        border-y
        border-gray-100
        bg-white
        py-4
        dark:border-white/10
        dark:bg-[#0A0A0A]
        sm:py-5
      "
    >
      <div className="faqiri-loop-viewport" dir="ltr">
        <div className="faqiri-loop-track" dir="ltr">
          <BenefitsGroup language={language} />

          <BenefitsGroup
            language={language}
            duplicate={true}
          />
        </div>
      </div>
    </section>
  );
}
