import { useState } from "react";
import { FormatInteger } from "../i18n/components/FormatInteger";
import { FormatTime } from "../i18n/components/FormatTime";
import { FormatDateAndTime } from "../i18n/components/FormatDateAndTime";
import { FormatMoney } from "../i18n/components/FormatMoney";
import { FormatPercentage } from "../i18n/components/FormatPercentage";
import { FormatDate } from "../i18n/components/FormatDate";
import { FormatDecimal } from "../i18n/components/FormatDecimal";
import { Translate } from "../i18n/components/Translate";

const data = {
  numberValue: 12345678.12345,
  percentage: 0.8765,
  name: "John Doe"
};

const choiceOptions = ["yes", "no", "maybe"];

export function Miscelaneous() {
  const [choice, setChoice] = useState(choiceOptions[0]);
  const [numberOfDogs, setNumberOfDogs] = useState(0);

  function handleNumberOfDogsChange(e) {
    const int = parseInt(e.target.value, 10);
    setNumberOfDogs(Math.max(int, 0));
  }

  return (
    <main className="flex-shrink-0">
      <div className="container">
        <h1 className="mt-5">
          <Translate id="pages.miscelaneous.title" />
        </h1>
        <table className="table">
          <tbody>
            <tr>
              <td width="50%">
                <Translate id="pages.miscelaneous.integerTitle" />
              </td>
              <td>
                <FormatInteger value={data.numberValue} />
              </td>
            </tr>
            <tr>
              <td>
                <Translate id="pages.miscelaneous.decimalTitle" />
              </td>
              <td>
                <FormatDecimal value={data.numberValue} />
              </td>
            </tr>
            <tr>
              <td>
                <Translate id="pages.miscelaneous.percentageTitle" />
              </td>
              <td>
                <FormatPercentage value={data.percentage} />
              </td>
            </tr>
            <tr>
              <td>
                <Translate id="pages.miscelaneous.percentageWithDecimalTitle" />
              </td>
              <td>
                <FormatPercentage value={data.percentage} places={2} />
              </td>
            </tr>
            <tr>
              <td>
                <Translate id="pages.miscelaneous.currencyTitle" />
              </td>
              <td>
                <FormatMoney value={data.numberValue} currency="USD" />
              </td>
            </tr>
            <tr>
              <td>
                <Translate id="pages.miscelaneous.shortDateTitle" />
              </td>
              <td>
                <FormatDate value={new Date()} />
              </td>
            </tr>
            <tr>
              <td>
                <Translate id="pages.miscelaneous.mediumDateTitle" />
              </td>
              <td>
                <FormatDate value={new Date()} medium />
              </td>
            </tr>
            <tr>
              <td>
                <Translate id="pages.miscelaneous.longDateTitle" />
              </td>
              <td>
                <FormatDate value={new Date()} long />
              </td>
            </tr>
            <tr>
              <td>
                <Translate id="pages.miscelaneous.fullDateTitle" />
              </td>
              <td>
                <FormatDate value={new Date()} full />
              </td>
            </tr>
            <tr>
              <td>
                <Translate id="pages.miscelaneous.shortTimeTitle" />
              </td>
              <td>
                <FormatTime value={new Date()} />
              </td>
            </tr>
            <tr>
              <td>
                <Translate id="pages.miscelaneous.mediumTimeTitle" />
              </td>
              <td>
                <FormatTime value={new Date()} medium />
              </td>
            </tr>
            <tr>
              <td>
                <Translate id="pages.miscelaneous.longTimeTitle" />
              </td>
              <td>
                <FormatTime value={new Date()} long />
              </td>
            </tr>
            <tr>
              <td>
                <Translate id="pages.miscelaneous.fullTimeTitle" />
              </td>
              <td>
                <FormatTime value={new Date()} full />
              </td>
            </tr>
            <tr>
              <td>
                <Translate id="pages.miscelaneous.dateAndTimeTitle" />
              </td>
              <td>
                <FormatDateAndTime value={new Date()} />
              </td>
            </tr>
            <tr>
              <td>
                <Translate id="pages.miscelaneous.textWithVariableTitle" />
              </td>
              <td>
                <Translate
                  id="pages.miscelaneous.textWithVariable"
                  values={{ name: data.name }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Translate id="pages.miscelaneous.textWithLinkTitle" />
              </td>
              <td>
                <Translate
                  id="pages.miscelaneous.textWithLink"
                  values={{
                    link: (chunk) => <a href="https://google.com">{chunk}</a>
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Translate id="pages.miscelaneous.textWithBoldTitle" />
              </td>
              <td>
                <Translate
                  id="pages.miscelaneous.textWithBold"
                  values={{
                    name: data.name,
                    bold: (chunk) => <b>{chunk}</b>
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Translate id="pages.miscelaneous.messageSelectionTitle" />
                <select
                  className="form-select"
                  value={choice}
                  onChange={(e) => setChoice(e.target.value)}
                >
                  {choiceOptions.map((choice) => (
                    <option key={choice} value={choice}>
                      <Translate
                        id={`pages.miscelaneous.choiceOptions.${choice}`}
                      />
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <Translate
                  id="pages.miscelaneous.messageSelection"
                  values={{
                    choice
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Translate id="pages.miscelaneous.pluralMessageTitle" />
                <input
                  className="form-control"
                  type="number"
                  value={numberOfDogs}
                  onChange={handleNumberOfDogsChange}
                />
              </td>
              <td>
                <Translate
                  id="pages.miscelaneous.pluralMessage"
                  values={{
                    numberOfDogs
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <Translate
            id="pages.miscelaneous.footerMessage"
            values={{
              name: data.name,
              link: (chunk) => (
                <a
                  href="https://formatjs.io/docs/core-concepts/icu-syntax#basic-principles"
                  target="_blank"
                  rel="noreferrer"
                >
                  {chunk}
                </a>
              )
            }}
          />
        </p>
      </div>
    </main>
  );
}
