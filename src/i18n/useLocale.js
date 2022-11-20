import { useContext } from "react";
import { I18nContext } from "./I18nContext";

export function useLocale() {
  const [locale, setLocale] = useContext(I18nContext);
  return [locale, setLocale];
}
