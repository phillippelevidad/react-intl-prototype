/* eslint react/style-prop-object: 0 */

import { FormattedNumber } from "react-intl";

export function FormatDecimal({ value, places = 2 }) {
  return (
    <FormattedNumber
      value={value}
      minimumFractionDigits={places}
      maximumFractionDigits={places}
    />
  );
}
