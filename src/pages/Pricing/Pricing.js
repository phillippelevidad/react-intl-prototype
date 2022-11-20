import { useLocale } from "../../i18n/useLocale";
import { Currencies } from "../../i18n/Currencies";
import { PricingBox } from "./PricingBox";
import { Translate } from "../../i18n/components/Translate";

const UsdPrices = {
  free: 0,
  pro: 15,
  enterprise: 29
};

// Conversion rates should come from an API.
// I hard-coded them because this API call is not the focus here.
// https://www.geeksforgeeks.org/how-to-create-a-currency-converter-app-in-reactjs/
// https://reactjsexample.com/a-currency-converter-app-built-with-react/
const UsdConvertionRates = {
  USD: 1,
  BRL: 5.33
};

function getLocalizedPrice(usdPrice, toCurrency) {
  const rate = UsdConvertionRates[toCurrency];
  return usdPrice * rate;
}

export function Pricing() {
  const [locale] = useLocale();
  const currencyCode = Currencies[locale].code;

  return (
    <div className="container">
      <header>
        <div className="mt-5 py-5 pb-md-4 mx-auto text-center">
          <h1 className="">
            <Translate id="pages.pricing.title" />
          </h1>
          <p className="fs-5 text-muted">
            <Translate id="pages.pricing.lead" />
          </p>
        </div>
      </header>

      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <PricingBox
              planName={<Translate id="pages.pricing.plans.free.name" />}
              price={getLocalizedPrice(UsdPrices.free, currencyCode)}
              currency={currencyCode}
              perks={[
                <Translate id="pages.pricing.plans.free.perk1" />,
                <Translate id="pages.pricing.plans.free.perk2" />,
                <Translate id="pages.pricing.plans.free.perk3" />,
                <Translate id="pages.pricing.plans.free.perk4" />
              ]}
              ctaText={<Translate id="pages.pricing.plans.free.cta" />}
            />
          </div>
          <div className="col">
            <PricingBox
              planName={<Translate id="pages.pricing.plans.pro.name" />}
              price={getLocalizedPrice(UsdPrices.pro, currencyCode)}
              currency={currencyCode}
              perks={[
                <Translate id="pages.pricing.plans.pro.perk1" />,
                <Translate id="pages.pricing.plans.pro.perk2" />,
                <Translate id="pages.pricing.plans.pro.perk3" />,
                <Translate id="pages.pricing.plans.pro.perk4" />
              ]}
              ctaText={<Translate id="pages.pricing.plans.free.cta" />}
              highlightCtaButton
            />
          </div>
          <div className="col">
            <PricingBox
              planName={<Translate id="pages.pricing.plans.enterprise.name" />}
              price={getLocalizedPrice(UsdPrices.enterprise, currencyCode)}
              currency={currencyCode}
              perks={[
                <Translate id="pages.pricing.plans.enterprise.perk1" />,
                <Translate id="pages.pricing.plans.enterprise.perk2" />,
                <Translate id="pages.pricing.plans.enterprise.perk3" />,
                <Translate id="pages.pricing.plans.enterprise.perk4" />
              ]}
              ctaText={<Translate id="pages.pricing.plans.enterprise.cta" />}
              highlightPlan
              highlightCtaButton
            />
          </div>
        </div>
      </main>
    </div>
  );
}
