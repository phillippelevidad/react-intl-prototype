import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { I18nProvider } from "./i18n/I18nProvider";
import "./styles.css";

export function App() {
  return (
    <I18nProvider>
      <Header />
      <Outlet />
    </I18nProvider>
  );
}
