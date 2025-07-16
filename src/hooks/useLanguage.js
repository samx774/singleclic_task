import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const useLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLanguage = localStorage.getItem("taskLang") ||
      localStorage.setItem('taskLang', i18n.language);
    if (currentLanguage) {
      i18n.changeLanguage(currentLanguage);
    }
    const direction = i18n.dir(i18n.language);
    document.body.setAttribute("dir", direction);
  }, [i18n.language, i18n]);

  const changeLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("taskLang", newLanguage);
  };

  return { changeLanguage };
};

export default useLanguage;
