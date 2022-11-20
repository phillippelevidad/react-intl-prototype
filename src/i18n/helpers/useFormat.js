import { useIntl } from "react-intl";

export function useFormat() {
  const intl = useIntl();

  return {
    formatDate: (value, style) => intl.formatDate(value, { dateStyle: style }),

    formatDateAndTime: (value, style, dateAndTimeSeparator = " ") =>
      intl.formatDate(value, { dateStyle: style }) +
      dateAndTimeSeparator +
      intl.formatDate(value, { timeStyle: style }),

    formatDecimal: (value, places = 2) =>
      intl.formatNumber(value, {
        style: "decimal",
        minimumFractionDigits: places,
        maximumFractionDigits: places
      }),

    formatInteger: (value) =>
      intl.formatNumber(value, {
        maximumFractionDigits: 0
      }),

    formatMoney: (value, currency, places = 2) =>
      intl.formatNumber(value, {
        style: "currency",
        currency,
        minimumFractionDigits: places,
        maximumFractionDigits: places
      }),

    formatPercentage: (value, places = 0) =>
      intl.formatNumber(value, {
        style: "percent",
        minimumFractionDigits: places,
        maximumFractionDigits: places
      }),

    formatTime: (value, style) => intl.formatDate(value, { timeStyle: style }),

    translate: (id, values) => intl.formatMessage({ id }, values)
  };
}
