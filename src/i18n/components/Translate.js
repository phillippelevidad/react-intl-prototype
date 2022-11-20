/* eslint react/style-prop-object: 0 */

import { FormattedMessage } from "react-intl";

export function Translate({ id, values }) {
  return <FormattedMessage id={id} values={values} />;
}
