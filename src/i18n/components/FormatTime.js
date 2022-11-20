/* eslint react/style-prop-object: 0 */

import { FormattedTime } from "react-intl";

export function FormatTime({ value, short, medium, long, full }) {
  const style = short
    ? "short"
    : medium
    ? "medium"
    : long
    ? "long"
    : full
    ? "full"
    : undefined;
  return <FormattedTime value={value} timeStyle={style} />;
}
