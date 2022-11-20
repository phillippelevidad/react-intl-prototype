import { Locales } from "./../i18n/Locales";
import { useLocale } from "./../i18n/useLocale";

export function LocalePicker() {
  const [locale, setLocale] = useLocale();
  const options = Object.values(Locales);

  return (
    <div className="d-flex">
      {options.map((option) => (
        <button
          key={option}
          className="btn btn-light me-2"
          onClick={() => setLocale(option)}
          disabled={option === locale}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
