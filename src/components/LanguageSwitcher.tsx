import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { useEffect } from "react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <Button onClick={toggleLanguage} variant="outlined" size="small" sx={{ position: "absolute", top: 10, right: 10 }}>
      {i18n.language === "en" ? "عربى" : "English"}
    </Button>
  );
}
