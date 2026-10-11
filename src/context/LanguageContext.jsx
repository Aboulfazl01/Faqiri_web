
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import en from "../locales/en.js";
import fa from "../locales/fa.js";

// Language Context
const LanguageContext = createContext(null);

// Timing settings
const FADE_OUT_DURATION = 200;
const TOTAL_DURATION = 500;

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const savedLanguage = localStorage.getItem("language");
      return savedLanguage === "fa" ? "fa" : "en";
    } catch {
      return "en";
    }
  });

  // idle | exiting | entering
  const [transitionStage, setTransitionStage] =
    useState("idle");

  const changingRef = useRef(false);
  const timersRef = useRef([]);

  const isPersian = language === "fa";
  const t = isPersian ? fa : en;

  // Set document language and direction
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir =
      isPersian ? "rtl" : "ltr";

    try {
      localStorage.setItem("language", language);
    } catch {
      // App still works without localStorage.
    }
  }, [language, isPersian]);

  // Clear scheduled transitions on unmount
  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, []);

  // Change language with smooth animation
  const changeLanguage = (targetLanguage) => {
    if (changingRef.current) return;

    const nextLanguage =
      targetLanguage === "fa" || targetLanguage === "en"
        ? targetLanguage
        : language === "en"
        ? "fa"
        : "en";

    if (nextLanguage === language) return;

    changingRef.current = true;

    // Step 1: Fade out old text
    setTransitionStage("exiting");

    const changeTimer = setTimeout(() => {
      // Step 2: Replace translated content
      setLanguage(nextLanguage);

      // Step 3: Fade in new content
      setTransitionStage("entering");
    }, FADE_OUT_DURATION);

    const finishTimer = setTimeout(() => {
      setTransitionStage("idle");
      changingRef.current = false;
      timersRef.current = [];
    }, TOTAL_DURATION);

    timersRef.current = [changeTimer, finishTimer];
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        isPersian,
        t,
        changeLanguage,
        transitionStage,
        isChangingLanguage: transitionStage !== "idle",
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook
export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}

export default LanguageProvider;
