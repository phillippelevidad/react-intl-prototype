import { Fragment, useState } from "react";
import { IntlProvider } from "react-intl";
import { I18nContext } from "./I18nContext";
import { DEFAULT_LOCALE } from "./Locales";
import { translations } from "./translations";

export function I18nProvider({ locale, children }) {
  const [localeValue, setLocaleValue] = useState(locale ?? DEFAULT_LOCALE);
  const contextValue = [localeValue, setLocaleValue];

  return (
    <I18nContext.Provider value={contextValue}>
      <IntlProvider
        locale={localeValue}
        textComponent={Fragment}
        messages={translations[localeValue]}
      >
        {children}
      </IntlProvider>
    </I18nContext.Provider>
  );
}
