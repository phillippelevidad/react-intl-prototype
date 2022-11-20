/* eslint react/style-prop-object: 0 */

import { FormatDate } from "./FormatDate";
import { FormatTime } from "./FormatTime";

export function FormatDateAndTime({
  value,
  short,
  medium,
  long,
  full,
  dateAndTimeSeparator = " "
}) {
  return (
    <>
      <FormatDate
        value={value}
        short={short}
        medium={medium}
        long={long}
        full={full}
      />
      {dateAndTimeSeparator}
      <FormatTime
        value={value}
        short={short}
        medium={medium}
        long={long}
        full={full}
      />
    </>
  );
}
