import { Locales } from "../Locales";
import { flatten } from "flat";

export default {
  [Locales.PT_BR]: flatten({
    siteName: "Demonstração i18n",
    menu: {
      home: "Início",
      form: "Formulário",
      pricing: "Preços",
      miscelaneous: "Diversos",
      imperativeApi: "API imperativa"
    },
    pages: {
      home: {
        title: "Bem vindo(a) à demonstração de i18n (internacionalização)",
        lead:
          "Esta demonstração usa a biblioteca <link>react-intl</link> para fornecer tranduções e formatações para algumas localidades suportadas."
      },
      form: {
        title: "Formulário de contato",
        fields: {
          email: {
            label: "Email",
            placeholder: "exemplo@dominio.com",
            help: "Seu email nunca será compartilhado com ninguém."
          },
          subject: {
            label: "Assunto",
            placeholder: "Use 3 a 5 palavras"
          },
          message: {
            label: "Mensagem"
          }
        },
        submit: "Enviar"
      },
      pricing: {
        title: "Preços",
        lead:
          "Crie rapidamente uma tabela de preços eficaz para seus potenciais clientes com este exemplo de Bootstrap. É construído com componentes e utilitários padrão do Bootstrap com pouca personalização.",
        price: "{price, number, ::currency/BRL}",
        perMonth: "/mês",
        plans: {
          free: {
            name: "Grátis",
            perk1: "10 usuários",
            perk2: "2 GB de armazenamento",
            perk3: "Suporte por email",
            perk4: "Help Center",
            cta: "Use grátis"
          },
          pro: {
            name: "Pro",
            perk1: "20 usuários",
            perk2: "10 GB de armazenamento",
            perk3: "Suporte prioritário por email",
            perk4: "Help Center",
            cta: "Comece já"
          },
          enterprise: {
            name: "Enterprise",
            perk1: "30 usuários",
            perk2: "15 GB de armazenamento",
            perk3: "Suporte por email e telefone",
            perk4: "Help Center",
            cta: "Entre em contato"
          }
        }
      },
      miscelaneous: {
        title: "Exemplos diversos",
        integerTitle: "Inteiro",
        decimalTitle: "Decimal",
        percentageTitle: "Porcentagem",
        percentageWithDecimalTitle: "Porcentagem com casas decimais",
        currencyTitle: "Monetário",
        shortDateTitle: "Data curta",
        mediumDateTitle: "Data média",
        longDateTitle: "Data longa",
        fullDateTitle: "Data completa",
        shortTimeTitle: "Hora curta",
        mediumTimeTitle: "Hora média",
        longTimeTitle: "Hora longa",
        fullTimeTitle: "Hora completa",
        dateAndTimeTitle: "Data e hora",
        textWithVariableTitle: "Texto com variável",
        textWithVariable: "Meu nome é {name}",
        textWithLinkTitle: "Texto com um link",
        textWithLink: "Reserve um tempo para visitar o <link>Google</link>",
        textWithBoldTitle: "Texto com partes em negrito",
        textWithBold: "Veja meu nome em negrito: <bold>{name}</bold>",
        messageSelectionTitle: "Seleção: você iria numa casa mal-assombrada?",
        messageSelection:
          '{choice, select, yes {Sim, eu iria!} no {De jeito nenhum!} maybe {É, quem sabe...} other {A opção "other" é obrigatória, mesmo não usada; veja a documentação}}',
        pluralMessageTitle: "Plural: quantos cachorros você tem?",
        pluralMessage:
          "Você {numberOfDogs, plural, =0 {não tem cachorro} one {tem 1 cachorro} other {tem # cachorros}}",
        choiceOptions: {
          yes: "Sim",
          no: "Não",
          maybe: "Talvez"
        },
        footerMessage:
          "Feito com Format.JS, que usa a Sintaxe de Formatação ICU. <link>Saiba mais</link>."
      }
    }
  })
};
