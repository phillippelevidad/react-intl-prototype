# React Intl Prototype

Showcases the use of the [react-intl](https://formatjs.io/docs/react-intl) package, which helps internationalizing and localizing apps.

I propose some components and hooks that streamline the use of the library, standardizing the output for numbers and dates by limiting the options and conventionalizing the formats, but I find that this ultimately benefits the project by eliminating confusion and developer preference when formatting these types of data. Less is more.

---

Check it live at [Code Sandbox](https://codesandbox.io/s/react-intl-prototype-vf49kt).

---

For `locale="en-US"`:

## Components

```jsx
<FormatDate value={new Date()} style="short" />
// 11/18/22
// Possible styles are: short, medium, long, full

<FormatDateAndTime value={new Date()} style="short" />
// 11/18/2022 10:16 PM
// Possible styles are: short, medium, long, full

<FormatDecimal value={12345678.12345} places={2} />
// 12,345,678.12

<FormatInteger value={12345678.12345} />
// 12,345,678

<FormatMoney value={12345678.12345} currency="USD" />
// $12,345,678.12

<FormatPercentage value={0.8765} />
// 88%

<FormatPercentage value={0.8765} places={2} />
// 87.65%

<FormatTime value={new Date()} style="short" />
// 10:16 PM
// Possible styles are: short, medium, long, full

<Translate id="message.id" />
// Some translated message

<Translate id="sayHello" value={ name: "John Doe" } />
// Hello, John Doe!
// For message `Hello, {name}!`
```

## Imperative API

The following examples assume you have this in your component:

```js
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
```

```js
formatDate(new Date(), "short");
// 11/18/22
// Possible styles are: short, medium, long, full

formatDateAndTime(new Date(), "short");
// 11/18/2022 10:16 PM
// Possible styles are: short, medium, long, full

formatDecimal(12345678.12345, 2);
// 12,345,678.12

formatInteger(12345678.12345);
// 12,345,678

formatMoney(12345678.12345, "USD");
// $12,345,678.12

formatPercentage(0.8765);
// 88%

formatPercentage(0.8765);
// 87.65%

formatTime(new Date(), "short");
// 10:16 PM
// Possible styles are: short, medium, long, full

translate("message.id");
// Some message (in the current locale)

translate("sayHello", { name: "John Doe" });
// Hello, John Doe!
// For message `Hello, {name}!`
```

## How to use it in your project

1. Copy the `i18n` folder
1. Add/modify available locales in the `i18n/Locales.js` file
1. Add/modify translations in the `i18n/translations` folder
1. Review the exported translations in the `i18n/translations/index.js` file
