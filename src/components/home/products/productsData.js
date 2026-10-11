
import afghanGand from "../../../assets/images/products/Afghan Gand Dresses.png";
import customDesigns from "../../../assets/images/products/Custom Designs.jpeg";
import femalePunjabis from "../../../assets/images/products/Female Punjabis.jpg";
import hijabChapan from "../../../assets/images/products/Hijab and Chapan.jpg";
import dayDresses from "../../../assets/images/products/Women's Day Dresses.webp";
import occasionDresses from "../../../assets/images/products/Women's Occasion Dresses.webp";

// NEW FAQIRI PRODUCT IMAGES
import blackWhiteDress from "../../../assets/images/products/FC-028-1789479886-1.png";
import greenOutfit from "../../../assets/images/products/FC-022-1789481127-1.png";
import purpleDress from "../../../assets/images/products/FC-015-1789224861-8.png";
import blackGoldChapan from "../../../assets/images/products/FC-026-1789479758-1.png";
import whiteAfghanDress from "../../../assets/images/products/FC-004-1789204510-12.webp";

// FILTER CATEGORIES
export const productCategories = [
  {
    id: "all",
    en: "All Products",
    fa: "همه محصولات",
  },
  {
    id: "afghan",
    en: "Afghan Dresses",
    fa: "لباس افغانی",
  },
  {
    id: "custom",
    en: "Custom Designs",
    fa: "طرح سفارشی",
  },
  {
    id: "punjabi",
    en: "Punjabi Dresses",
    fa: "لباس پنجابی",
  },
  {
    id: "hijab",
    en: "Hijab & Chapan",
    fa: "حجاب و چپن",
  },
  {
    id: "daily",
    en: "Daily Wear",
    fa: "لباس روزمره",
  },
  {
    id: "occasion",
    en: "Occasion Wear",
    fa: "لباس مجلسی",
  },
];

// ALL FAQIRI PRODUCTS
export const products = [
  {
    id: 1,
    brand: "FAQIRI",
    category: "afghan",
    name: {
      en: "Afghan Gand Dresses",
      fa: "لباس‌های محلی افغانی",
    },
    image: afghanGand,
    price: null,
    colors: [],
  },
  {
    id: 2,
    brand: "FAQIRI",
    category: "custom",
    name: {
      en: "Custom Designs",
      fa: "طرح‌های سفارشی",
    },
    image: customDesigns,
    price: null,
    colors: [],
  },
  {
    id: 3,
    brand: "FAQIRI",
    category: "punjabi",
    name: {
      en: "Female Punjabis",
      fa: "لباس‌های پنجابی زنانه",
    },
    image: femalePunjabis,
    price: null,
    colors: [],
  },
  {
    id: 4,
    brand: "FAQIRI",
    category: "hijab",
    name: {
      en: "Hijab and Chapan",
      fa: "حجاب و چپن",
    },
    image: hijabChapan,
    price: null,
    colors: [],
  },
  {
    id: 5,
    brand: "FAQIRI",
    category: "daily",
    name: {
      en: "Women's Day Dresses",
      fa: "لباس‌های روزمره زنانه",
    },
    image: dayDresses,
    price: null,
    colors: [],
  },
  {
    id: 6,
    brand: "FAQIRI",
    category: "occasion",
    name: {
      en: "Women's Occasion Dresses",
      fa: "لباس‌های مجلسی زنانه",
    },
    image: occasionDresses,
    price: null,
    colors: [],
  },

  // NEW PRODUCTS

  {
    id: 7,
    brand: "FAQIRI",
    category: "afghan",
    name: {
      en: "Black & White Afghan Dress",
      fa: "لباس افغانی سیاه و سفید",
    },
    image: blackWhiteDress,
    price: null,
    colors: ["#111111", "#FFFFFF"],
  },
  {
    id: 8,
    brand: "FAQIRI",
    category: "daily",
    name: {
      en: "Emerald Green Printed Set",
      fa: "ست سبز طرح‌دار زنانه",
    },
    image: greenOutfit,
    price: null,
    colors: ["#075842"],
  },
  {
    id: 9,
    brand: "FAQIRI",
    category: "occasion",
    name: {
      en: "Purple Embroidered Dress",
      fa: "لباس بنفش گلدوزی‌شده",
    },
    image: purpleDress,
    price: null,
    colors: ["#60229C"],
  },
  {
    id: 10,
    brand: "FAQIRI",
    category: "hijab",
    name: {
      en: "Black & Gold Chapan",
      fa: "چپن مشکی و طلایی",
    },
    image: blackGoldChapan,
    price: null,
    colors: ["#111111", "#D4AF37"],
  },
  {
    id: 11,
    brand: "FAQIRI",
    category: "afghan",
    name: {
      en: "White Afghan Embroidered Dress",
      fa: "لباس افغانی سفید گلدوزی‌شده",
    },
    image: whiteAfghanDress,
    price: null,
    colors: ["#FFFFFF", "#E2B34D"],
  },
];
