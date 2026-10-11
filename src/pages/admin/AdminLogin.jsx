
import { useState } from "react";

import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

import navbarLogo from "../../assets/images/navbar-logo.png";
import { useLanguage } from "../../context/LanguageContext.jsx";

function AdminLogin() {
  const { language } = useLanguage();
  const isPersian = language === "fa";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  // Authentication will be connected to backend later
  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(
      isPersian
        ? "سیستم ورود امن مدیر هنوز متصل نشده است."
        : "Secure admin authentication is not connected yet."
    );
  };

  return (
    <main
      dir={isPersian ? "rtl" : "ltr"}
      className="
        flex min-h-[calc(100vh-96px)]
        items-center justify-center
        bg-[#F8F8F7] px-4 py-10
        font-ravi transition-colors duration-300
        sm:px-6
        dark:bg-[#090909]
      "
    >
      {/* MAIN LOGIN CARD */}
      <div
        className="
          w-full max-w-[1100px]
          overflow-hidden rounded-[28px]
          border border-zinc-200
          bg-white
          shadow-[0_25px_80px_rgba(0,0,0,0.08)]
          dark:border-zinc-800
          dark:bg-[#111111]
        "
      >
        {/* Mobile: Vertical | Desktop: Horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* BRAND SECTION */}
          <div
            className="
              relative flex flex-col
              items-center justify-center
              overflow-hidden
              bg-[#111111]
              px-6 py-12 text-center
              md:min-h-[600px]
              md:px-10
            "
          >
            {/* Subtle Golden Background Glow */}
            <div
              className="
                pointer-events-none absolute inset-0
                bg-[radial-gradient(circle_at_top,rgba(181,139,42,0.16),transparent_65%)]
              "
            />

            <div className="relative z-10 flex flex-col items-center">

              {/* LOGO */}
              <img
                src={navbarLogo}
                alt="FAQIRI Logo"
                className="
                  mb-7 h-24 w-24
                  object-contain
                  md:h-32 md:w-32
                "
              />

              {/* BRAND LABEL */}
              <p
                className="
                  text-[15px] font-semibold
                  tracking-[0.18em]
                  text-[#D4AF37]
                "
              >
                FAQIRI ADMIN
              </p>

              {/* GOLD DIVIDER */}
              <div className="my-7 h-px w-20 bg-[#B58B2A]/60" />

              {/* SECURITY ICON */}
              <ShieldCheck
                size={34}
                strokeWidth={1.5}
                className="mb-5 text-[#D4AF37]"
              />

              {/* BRAND TITLE */}
              <h2
                className="
                  text-[26px] font-bold
                  leading-relaxed text-white
                  md:text-[30px]
                "
              >
                {isPersian
                  ? "پنل مدیریت فقیری"
                  : "FAQIRI Management"}
              </h2>

              {/* BRAND DESCRIPTION */}
              <p
                className="
                  mt-5 max-w-[350px]
                  text-[16px] leading-8
                  text-zinc-400
                  md:text-[18px]
                "
              >
                {isPersian
                  ? "مدیریت محصولات، مجموعه‌ها و محتوای فروشگاه از یک مکان."
                  : "Manage your products, collections and store content in one place."}
              </p>
            </div>
          </div>

          {/* LOGIN FORM SECTION */}
          <div
            className="
              flex flex-col justify-center
              px-6 py-12
              sm:px-10
              md:px-12 md:py-14
            "
          >
            {/* LOGIN HEADING */}
            <div className="mb-9">

              <div className="mb-4 flex items-center gap-2 text-[#B58B2A]">
                <ShieldCheck size={21} />

                <span className="text-[15px] font-semibold">
                  {isPersian
                    ? "دسترسی مدیران"
                    : "ADMIN ACCESS"}
                </span>
              </div>

              <h1
                className="
                  text-[32px] font-bold
                  leading-tight text-zinc-900
                  md:text-[36px]
                  dark:text-white
                "
              >
                {isPersian
                  ? "ورود به حساب مدیر"
                  : "Welcome Back"}
              </h1>

              <p
                className="
                  mt-4 text-[16px]
                  leading-8 text-zinc-500
                  md:text-[18px]
                  dark:text-zinc-400
                "
              >
                {isPersian
                  ? "برای ورود به پنل مدیریت، اطلاعات خود را وارد کنید."
                  : "Enter your credentials to access the dashboard."}
              </p>
            </div>

            {/* LOGIN FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* EMAIL FIELD */}
              <div>
                <label
                  htmlFor="admin-email"
                  className="
                    mb-3 block text-[16px]
                    font-semibold text-zinc-700
                    dark:text-zinc-300
                  "
                >
                  {isPersian ? "ایمیل" : "Email Address"}
                </label>

                <div
                  className="
                    flex h-15 items-center gap-3
                    rounded-xl border border-zinc-200
                    bg-zinc-50 px-4
                    transition-all duration-300
                    focus-within:border-[#B58B2A]
                    focus-within:shadow-[0_0_0_3px_rgba(181,139,42,0.08)]
                    dark:border-zinc-700
                    dark:bg-zinc-900
                  "
                >
                  <Mail
                    size={22}
                    className="shrink-0 text-[#B58B2A]"
                  />

                  <input
                    id="admin-email"
                    type="email"
                    required
                    dir="ltr"
                    autoComplete="username"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="admin@example.com"
                    className="
                      w-full min-w-0 bg-transparent
                      text-[16px] text-zinc-900
                      outline-none
                      placeholder:text-zinc-400
                      dark:text-white
                    "
                  />
                </div>
              </div>

              {/* PASSWORD FIELD */}
              <div>
                <label
                  htmlFor="admin-password"
                  className="
                    mb-3 block text-[16px]
                    font-semibold text-zinc-700
                    dark:text-zinc-300
                  "
                >
                  {isPersian ? "رمز عبور" : "Password"}
                </label>

                <div
                  className="
                    flex h-15 items-center gap-3
                    rounded-xl border border-zinc-200
                    bg-zinc-50 px-4
                    transition-all duration-300
                    focus-within:border-[#B58B2A]
                    focus-within:shadow-[0_0_0_3px_rgba(181,139,42,0.08)]
                    dark:border-zinc-700
                    dark:bg-zinc-900
                  "
                >
                  <LockKeyhole
                    size={22}
                    className="shrink-0 text-[#B58B2A]"
                  />

                  <input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    required
                    dir="ltr"
                    autoComplete="current-password"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="••••••••"
                    className="
                      w-full min-w-0 bg-transparent
                      text-[16px] text-zinc-900
                      outline-none
                      dark:text-white
                    "
                  />

                  {/* SHOW / HIDE PASSWORD */}
                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    aria-label={
                      isPersian
                        ? showPassword
                          ? "مخفی کردن رمز عبور"
                          : "نمایش رمز عبور"
                        : showPassword
                          ? "Hide password"
                          : "Show password"
                    }
                    className="
                      shrink-0 text-zinc-500
                      transition-colors duration-300
                      hover:text-[#B58B2A]
                    "
                  >
                    {showPassword ? (
                      <EyeOff size={21} />
                    ) : (
                      <Eye size={21} />
                    )}
                  </button>
                </div>
              </div>

              {/* STATUS MESSAGE */}
              {message && (
                <p
                  role="status"
                  className="
                    rounded-xl border
                    border-[#B58B2A]/20
                    bg-[#B58B2A]/5 p-4
                    text-[15px] leading-7
                    text-[#98731F]
                    dark:text-[#D4AF37]
                  "
                >
                  {message}
                </p>
              )}

              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="
                  flex w-full items-center
                  justify-center gap-3
                  rounded-xl bg-[#B58B2A]
                  px-5 py-4
                  text-[18px] font-semibold
                  text-white
                  transition-all duration-300
                  hover:bg-[#98731F]
                  hover:shadow-[0_8px_25px_rgba(181,139,42,0.25)]
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-[#B58B2A]
                "
              >
                {isPersian
                  ? "ورود به پنل مدیریت"
                  : "Sign In"}

                {isPersian ? (
                  <ArrowLeft size={21} />
                ) : (
                  <ArrowRight size={21} />
                )}
              </button>
            </form>

            {/* FOOTER */}
            <div
              className="
                mt-9 border-t border-zinc-200
                pt-6 text-center
                dark:border-zinc-800
              "
            >
              <p className="text-[14px] text-zinc-400">
                © FAQIRI — Authorized Administrators Only
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AdminLogin;
