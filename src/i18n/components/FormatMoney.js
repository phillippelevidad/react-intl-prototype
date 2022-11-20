/* eslint react/style-prop-object: 0 */

import { FormattedNumber } from "react-intl";

export function FormatMoney({ value, currency, places = 2 }) {
  return (
    <FormattedNumber
      value={value}
      style="currency"
      currency={currency}
      minimumFractionDigits={places}
      maximumFractionDigits={places}
    />
  );
}
