/* eslint react/style-prop-object: 0 */

import { FormattedDate } from "react-intl";

export function FormatDate({ value, short, medium, long, full }) {
  const style = short
    ? "short"
    : medium
    ? "medium"
    : long
    ? "long"
    : full
    ? "full"
    : undefined;
  return <FormattedDate value={value} dateStyle={style} />;
}
