import { useFormat } from "../i18n/helpers/useFormat";

const data = {
  numberValue: 12345678.12345,
  percentage: 0.8765,
  name: "John Doe"
};

export function ImperativeApi() {
  const {
    formatMoney,
    formatDate,
    formatDateAndTime,
    formatDecimal,
    formatInteger,
    formatPercentage,
    formatTime,
    translate
  } = useFormat();

  return (
    <main className="flex-shrink-0">
      <div className="container">
        <h1 className="mt-5">Imperative API</h1>
        <table className="table">
          <tbody>
            <tr>
              <td width="50%">
                <pre className="mb-0">formatInteger({data.numberValue})</pre>
              </td>
              <td>{formatInteger(data.numberValue)}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatDecimal({data.numberValue})</pre>
              </td>
              <td>{formatDecimal(data.numberValue)}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatPercentage({data.percentage})</pre>
              </td>
              <td>{formatPercentage(data.percentage)}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">
                  formatPercentage({data.percentage}, 2)
                </pre>
              </td>
              <td>{formatPercentage(data.percentage, 2)}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">
                  formatMoney({data.numberValue}, "USD")
                </pre>
              </td>
              <td>{formatMoney(data.numberValue, "USD")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatDate(new Date(), "short")</pre>
              </td>
              <td>{formatDate(new Date(), "short")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatDate(new Date(), "medium")</pre>
              </td>
              <td>{formatDate(new Date(), "medium")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatDate(new Date(), "long")</pre>
              </td>
              <td>{formatDate(new Date(), "long")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatDate(new Date(), "full")</pre>
              </td>
              <td>{formatDate(new Date(), "full")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatTime(new Date(), "short")</pre>
              </td>
              <td>{formatTime(new Date(), "short")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatTime(new Date(), "medium")</pre>
              </td>
              <td>{formatTime(new Date(), "medium")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatTime(new Date(), "long")</pre>
              </td>
              <td>{formatTime(new Date(), "long")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">formatTime(new Date(), "full")</pre>
              </td>
              <td>{formatTime(new Date(), "full")}</td>
            </tr>

            <tr>
              <td>
                <pre className="mb-0">
                  formatDateAndTime(new Date(), "short")
                </pre>
              </td>
              <td>{formatDateAndTime(new Date(), "short")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">
                  formatDateAndTime(new Date(), "medium")
                </pre>
              </td>
              <td>{formatDateAndTime(new Date(), "medium")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">
                  formatDateAndTime(new Date(), "long")
                </pre>
              </td>
              <td>{formatDateAndTime(new Date(), "long")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">
                  formatDateAndTime(new Date(), "full")
                </pre>
              </td>
              <td>{formatDateAndTime(new Date(), "full")}</td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">
                  translate("messageId", {"{"} {"/* see the code */"} {"}"})
                </pre>
              </td>
              <td>
                {translate("pages.imperativeApi.textWithVariable", {
                  name: data.name
                })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">
                  translate("messageId", {"{"} {"/* see the code */"} {"}"})
                </pre>
              </td>
              <td>
                {translate("pages.imperativeApi.textWithLink", {
                  link: (chunk) => <a href="https://google.com">{chunk}</a>
                })}
              </td>
            </tr>
            <tr>
              <td>
                <pre className="mb-0">
                  translate("messageId", {"{"} {"/* see the code */"} {"}"})
                </pre>
              </td>
              <td>
                {translate("pages.imperativeApi.textWithBold", {
                  name: data.name,
                  bold: (chunk) => <b>{chunk}</b>
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
