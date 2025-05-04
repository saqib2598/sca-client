import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import ApplicationForm from "./pages/ApplicationForm";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { getAppTheme } from "./theme/theme"; // adjust if needed
import "./utils/i18n";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

function App() {
  const { i18n } = useTranslation();
  const theme = useMemo(() => getAppTheme(i18n.language === "ar" ? "rtl" : "ltr"), [i18n.language]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<ApplicationForm />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
