import { Locales } from "../Locales";
import { flatten } from "flat";

export default {
  [Locales.EN_US]: flatten({
    siteName: "i18n demo",
    menu: {
      home: "Home",
      form: "Form",
      pricing: "Pricing",
      miscelaneous: "Miscelaneous",
      imperativeApi: "Imperative API"
    },
    pages: {
      home: {
        title: "Welcome to the i18n (internationalization) sample",
        lead:
          "This sample uses the <link>react-intl</link> library to provide translations and formatting to some supported locales."
      },
      pricing: {
        title: "Pricing",
        lead:
          "Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.",
        price: "{price, number, ::currency/USD}",
        perMonth: "/mo",
        plans: {
          free: {
            name: "Free",
            perk1: "10 users included",
            perk2: "2 GB of storage",
            perk3: "Email support",
            perk4: "Help center access",
            cta: "Sign up for free"
          },
          pro: {
            name: "Pro",
            perk1: "20 users included",
            perk2: "10 GB of storage",
            perk3: "Priority email support",
            perk4: "Help center access",
            cta: "Get started"
          },
          enterprise: {
            name: "Enterprise",
            perk1: "30 users included",
            perk2: "15 GB of storage",
            perk3: "Phone and email support",
            perk4: "Help center access",
            cta: "Contact us"
          }
        }
      },
      form: {
        title: "Contact form",
        fields: {
          email: {
            label: "Email address",
            placeholder: "example@acme.com",
            help: "We'll never share your email with anyone."
          },
          subject: {
            label: "Subject",
            placeholder: "Please use 3 to 5 words"
          },
          message: {
            label: "Message"
          }
        },
        submit: "Submit"
      },
      miscelaneous: {
        title: "Miscelaneous",
        integerTitle: "Inteiro",
        decimalTitle: "Decimal",
        percentageTitle: "Percentage",
        percentageWithDecimalTitle: "Percentage with decimal places",
        currencyTitle: "Currency",
        shortDateTitle: "Short date",
        mediumDateTitle: "Mediu date",
        longDateTitle: "Long date",
        fullDateTitle: "Full date",
        shortTimeTitle: "Short time",
        mediumTimeTitle: "Medium time",
        longTimeTitle: "Long time",
        fullTimeTitle: "Full time",
        dateAndTimeTitle: "Date and time",
        textWithVariableTitle: "Text with variable",
        textWithVariable: "My name is {name}",
        textWithLinkTitle: "Text with a link",
        textWithLink: "Take a moment to visit <link>Google</link>",
        textWithBoldTitle: "Text with parts in bold",
        textWithBold: "See my name in bold: <bold>{name}</bold>",
        messageSelectionTitle: "Selection: would you visit a haunted house?",
        messageSelection:
          '{choice, select, yes {Yes, I would!} no {Most certainly not!} maybe {Yeah, who knows...} other {The "other" entry is mandatory, although not used; see the docs}}',
        pluralMessageTitle: "Plural: how many dogs do you have?",
        pluralMessage:
          "You have {numberOfDogs, plural, =0 {no dogs} one {1 dog} other {# dogs}}",
        choiceOptions: {
          yes: "Yes",
          no: "No",
          maybe: "Maybe"
        },
        footerMessage:
          "Made with Format.JS, which uses the ICU Message Syntax. <link>Learn more</link>."
      },
      imperativeApi: {
        textWithVariable: "My name is {name}",
        textWithLink: "Take a moment to visit <link>Google</link>",
        textWithBold: "See my name in bold: <bold>{name}</bold>"
      }
    }
  })
};
