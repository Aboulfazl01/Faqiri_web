
/*
========================================
FAQIRI - PRODUCT IMAGES
========================================
*/

// Load images from assets/images
// Including images inside subfolders

const imageModules = import.meta.glob(
  "../assets/images/**/*.{png,jpg,jpeg,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

// =====================================
// FIND IMAGE AUTOMATICALLY
// =====================================

function getProductImage(...names) {
  const imagePaths = Object.keys(imageModules);

  for (const name of names) {
    const normalizedName = name
      .toLowerCase()
      .replace(/\.[^.]+$/, "")
      .replace(/[^a-z0-9]/g, "");

    const match = imagePaths.find((path) => {
      const fileName = path
        .split("/")
        .pop()
        .toLowerCase()
        .replace(/\.[^.]+$/, "")
        .replace(/[^a-z0-9]/g, "");

      return fileName === normalizedName;
    });

    if (match) {
      return imageModules[match];
    }
  }

  console.warn(
    "FAQIRI: Product image not found:",
    names
  );

  return "";
}

// =====================================
// PRODUCT IMAGES
// =====================================

const hijabChapan = getProductImage(
  "hijab-and-chapan.jpg.jpg",
  "Hijab and Chapan.jpg",
  "hijab-and-chapan"
);

const customDesigns = getProductImage(
  "custom-designs.jpg.jpeg",
  "Custom Designs.jpeg",
  "custom-designs"
);

const afghanGand = getProductImage(
  "afghan-gand-dresses.jpg.png",
  "Afghan Gand Dresses.png",
  "afghan-gand-dresses"
);

const occasionDress = getProductImage(
  "womens-occasion-dresses.jpg.png",
  "Women's Occasion Dresses.webp",
  "womens-occasion-dresses"
);

const dayDress = getProductImage(
  "womens-day-dresses.jpg.webp",
  "Women's Day Dresses.webp",
  "womens-day-dresses"
);

const femalePunjabis = getProductImage(
  "female-punjabis.jpg.jpg",
  "Female Punjabis.jpg",
  "female-punjabis"
);



// SAMPLE DATA ONLY
// Replace all specifications with verified product details
// before publishing the website.

export const products = [
  {
    id: "product-001",
    categoryId: "hijab-and-chapan",
    name: "Elegant Blue Hijab & Chapan",
    nameFa: "حجاب و چپن آبی شیک",
    sku: "HC-001",
    image: hijabChapan,

    price: 2500,
    currency: "AFN",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Sky Blue"],
    colorsFa: ["مشکی", "آبی آسمانی"],

    fabric: "Soft crepe fabric",
    fabricFa: "پارچه کرپ نرم",

    sleeveType: "Long sleeves",
    sleeveTypeFa: "آستین بلند",

    neckline: "Modest neckline",
    necklineFa: "یقه پوشیده",

    designDetails: "Blue decorative embroidery on sleeves and front.",
    designDetailsFa: "دارای تزئینات آبی روی آستین‌ها و قسمت جلو لباس.",

    occasion: "Everyday wear and special gatherings",
    occasionFa: "استفاده روزمره و محافل ویژه",

    description:
      "An elegant modest outfit featuring a contrasting blue hijab and decorative sleeve details. Designed for a graceful and comfortable appearance.",

    descriptionFa:
      "لباس پوشیده و شیک همراه با حجاب آبی و تزئینات زیبا روی آستین‌ها. مناسب برای داشتن ظاهری آراسته و راحت.",

    careInstructions:
      "Gentle hand wash with cold water. Avoid bleach. Dry in shade.",

    careInstructionsFa:
      "با آب سرد و به‌آرامی شست‌وشو شود. از سفیدکننده استفاده نشود و در سایه خشک گردد.",

    deliveryInfo:
      "Delivery time and shipping cost are confirmed when ordering.",

    deliveryInfoFa:
      "زمان تحویل و هزینه ارسال هنگام ثبت سفارش مشخص می‌شود.",

    available: true,
    active: true,
  },

  {
    id: "product-002",
    categoryId: "custom-designs",
    name: "Elegant Burgundy Velvet Dress",
    nameFa: "لباس مخمل زرشکی مجلسی",
    sku: "CD-001",
    image: customDesigns,

    price: 2500,
    currency: "AFN",
    sizes: ["S", "M", "L"],
    colors: ["Burgundy"],
    colorsFa: ["زرشکی"],

    fabric: "Velvet fabric",
    fabricFa: "پارچه مخمل",

    sleeveType: "Short puff sleeves",
    sleeveTypeFa: "آستین کوتاه پفی",

    neckline: "Sweetheart neckline",
    necklineFa: "یقه قلبی",

    designDetails:
      "Decorative golden neckline and flowing flared skirt.",

    designDetailsFa:
      "تزئینات طلایی در قسمت یقه همراه با دامن چین‌دار و آزاد.",

    occasion: "Parties, celebrations and formal gatherings",
    occasionFa: "مهمانی‌ها، جشن‌ها و محافل رسمی",

    description:
      "A sophisticated burgundy dress with elegant puff sleeves, decorative golden accents and a graceful flared silhouette. A beautiful choice for special occasions.",

    descriptionFa:
      "لباس مجلسی زرشکی با آستین‌های پفی، تزئینات طلایی و دامن آزاد و زیبا. انتخابی شیک برای جشن‌ها و محافل خاص.",

    careInstructions:
      "Professional dry cleaning recommended. Avoid direct heat and strong sunlight.",

    careInstructionsFa:
      "خشک‌شویی تخصصی پیشنهاد می‌شود. از حرارت مستقیم و نور شدید آفتاب جلوگیری گردد.",

    deliveryInfo:
      "Delivery time and shipping cost are confirmed when ordering.",

    deliveryInfoFa:
      "زمان تحویل و هزینه ارسال هنگام ثبت سفارش مشخص می‌شود.",

    available: true,
    active: true,
  },

  {
    id: "product-003",
    categoryId: "afghan-gand-dresses",
    name: "Traditional Afghan Embroidered Dress",
    nameFa: "لباس گند افغانی گلدوزی‌شده",
    sku: "AG-001",
    image: afghanGand,

    price: 4500,
    currency: "AFN",
    sizes: ["M", "L", "XL"],
    colors: ["Maroon", "Multicolor"],
    colorsFa: ["زرشکی تیره", "چندرنگ"],

    fabric: "Traditional woven fabric",
    fabricFa: "پارچه بافت سنتی",

    sleeveType: "Long embroidered sleeves",
    sleeveTypeFa: "آستین بلند گلدوزی‌شده",

    neckline: "Traditional round neckline",
    necklineFa: "یقه گرد سنتی",

    designDetails:
      "Colorful traditional Afghan embroidery with decorative patterns.",

    designDetailsFa:
      "گلدوزی رنگارنگ افغانی همراه با نقش‌ها و تزئینات سنتی.",

    occasion: "Cultural celebrations, weddings and festivals",
    occasionFa: "جشن‌های فرهنگی، عروسی‌ها و جشنواره‌ها",

    description:
      "A traditional Afghan outfit inspired by the richness of Afghan cultural clothing, featuring colorful embroidery and elegant decorative details.",

    descriptionFa:
      "لباس سنتی افغانی با الهام از فرهنگ و پوشاک اصیل افغانستان، همراه با گلدوزی‌های رنگارنگ و جزئیات تزئینی زیبا.",

    careInstructions:
      "Gentle hand wash separately in cold water. Avoid rubbing embroidered areas.",

    careInstructionsFa:
      "با آب سرد و به‌صورت جداگانه شست‌وشو شود. قسمت‌های گلدوزی‌شده مالش داده نشوند.",

    deliveryInfo:
      "Delivery time and shipping cost are confirmed when ordering.",

    deliveryInfoFa:
      "زمان تحویل و هزینه ارسال هنگام ثبت سفارش مشخص می‌شود.",

    available: true,
    active: true,
  },

  {
    id: "product-004",
    categoryId: "womens-occasion-dresses",
    name: "Elegant Maroon Occasion Dress",
    nameFa: "لباس مجلسی زرشکی زنانه",
    sku: "WO-001",
    image: occasionDress,

    price: 3500,
    currency: "AFN",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Dark Maroon"],
    colorsFa: ["زرشکی تیره"],

    fabric: "Velvet with sheer sleeve details",
    fabricFa: "مخمل با جزئیات آستین حریر",

    sleeveType: "Long sheer sleeves",
    sleeveTypeFa: "آستین بلند حریر",

    neckline: "High neckline",
    necklineFa: "یقه بلند",

    designDetails:
      "Decorative draped front with elegant embellishments.",

    designDetailsFa:
      "طراحی چین‌دار در قسمت جلو همراه با تزئینات ظریف.",

    occasion: "Formal events and evening celebrations",
    occasionFa: "محافل رسمی و جشن‌های شبانه",

    description:
      "An elegant occasion dress with a rich maroon appearance, delicate sheer sleeves and a graceful draped design.",

    descriptionFa:
      "لباس مجلسی زیبا با رنگ زرشکی، آستین‌های ظریف حریر و طراحی چین‌دار برای محافل ویژه.",

    careInstructions:
      "Dry clean recommended. Iron at low temperature using a protective cloth.",

    careInstructionsFa:
      "خشک‌شویی پیشنهاد می‌شود. با حرارت کم و پارچه محافظ اتو گردد.",

    deliveryInfo:
      "Delivery time and shipping cost are confirmed when ordering.",

    deliveryInfoFa:
      "زمان تحویل و هزینه ارسال هنگام ثبت سفارش مشخص می‌شود.",

    available: true,
    active: true,
  },

  {
    id: "product-005",
    categoryId: "womens-day-dresses",
    name: "Elegant Blue Everyday Dress",
    nameFa: "لباس روزمره آبی زنانه",
    sku: "WD-001",
    image: dayDress,

    price: 2200,
    currency: "AFN",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Navy Blue"],
    colorsFa: ["آبی سرمه‌ای"],

    fabric: "Lightweight blended fabric",
    fabricFa: "پارچه ترکیبی سبک",

    sleeveType: "Long sleeves",
    sleeveTypeFa: "آستین بلند",

    neckline: "Round neckline",
    necklineFa: "یقه گرد",

    designDetails:
      "Decorative waist embroidery with a relaxed flowing design.",

    designDetailsFa:
      "تزئینات گلدوزی در قسمت کمر همراه با طراحی راحت و آزاد.",

    occasion: "Daily wear and family gatherings",
    occasionFa: "استفاده روزمره و مهمانی‌های خانوادگی",

    description:
      "A graceful blue outfit designed for everyday elegance, featuring decorative waist details and a comfortable silhouette.",

    descriptionFa:
      "لباس آبی شیک و راحت برای استفاده روزمره، با تزئینات زیبا در قسمت کمر و طراحی آزاد.",

    careInstructions:
      "Machine wash on a gentle cycle with similar colors. Dry in shade.",

    careInstructionsFa:
      "با برنامه ملایم ماشین لباس‌شویی و رنگ‌های مشابه شست‌وشو شود. در سایه خشک گردد.",

    deliveryInfo:
      "Delivery time and shipping cost are confirmed when ordering.",

    deliveryInfoFa:
      "زمان تحویل و هزینه ارسال هنگام ثبت سفارش مشخص می‌شود.",

    available: true,
    active: true,
  },

  {
    id: "product-006",
    categoryId: "female-punjabis",
    name: "Elegant Floral Punjabi Outfit",
    nameFa: "لباس پنجابی گل‌دار زنانه",
    sku: "FP-001",
    image: femalePunjabi,

    price: 2800,
    currency: "AFN",
    sizes: ["M", "L", "XL"],
    colors: ["Navy Blue", "Multicolor"],
    colorsFa: ["آبی سرمه‌ای", "چندرنگ"],

    fabric: "Soft printed fabric",
    fabricFa: "پارچه نرم طرح‌دار",

    sleeveType: "Three-quarter sleeves",
    sleeveTypeFa: "آستین سه‌ربع",

    neckline: "V-shaped neckline",
    necklineFa: "یقه هفت",

    designDetails:
      "Colorful floral patterns with coordinating scarf.",

    designDetailsFa:
      "طرح‌های گل‌دار رنگارنگ همراه با شال هماهنگ.",

    occasion: "Daily wear, family visits and casual gatherings",
    occasionFa: "استفاده روزمره، دیدارهای خانوادگی و محافل دوستانه",

    description:
      "A stylish Punjabi-inspired outfit with beautiful floral patterns and a coordinated scarf, combining traditional elegance with everyday comfort.",

    descriptionFa:
      "لباس پنجابی شیک با طرح‌های گل‌دار و شال هماهنگ که زیبایی پوشاک سنتی را با راحتی روزمره ترکیب می‌کند.",

    careInstructions:
      "Wash gently with similar colors and avoid strong bleach.",

    careInstructionsFa:
      "با رنگ‌های مشابه و به‌آرامی شست‌وشو شود. از سفیدکننده قوی استفاده نشود.",

    deliveryInfo:
      "Delivery time and shipping cost are confirmed when ordering.",

    deliveryInfoFa:
      "زمان تحویل و هزینه ارسال هنگام ثبت سفارش مشخص می‌شود.",

    available: true,
    active: true,
  },
];
