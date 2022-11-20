/* eslint react/style-prop-object: 0 */

import { FormattedNumber } from "react-intl";

export function FormatPercentage({ value, places = 0 }) {
  return (
    <FormattedNumber
      value={value}
      style="percent"
      minimumFractionDigits={places}
      maximumFractionDigits={places}
    />
  );
}
