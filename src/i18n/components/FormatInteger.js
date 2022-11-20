/* eslint react/style-prop-object: 0 */

import { FormattedNumber } from "react-intl";

export function FormatInteger({ value }) {
  return <FormattedNumber value={value} maximumFractionDigits={0} />;
}
