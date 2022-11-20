import { FormatMoney } from "../../i18n/components/FormatMoney";
import { Translate } from "../../i18n/components/Translate";

export function PricingBox({
  planName,
  price,
  currency,
  perks,
  ctaText,
  highlightPlan,
  highlightCtaButton
}) {
  return (
    <div
      className={`card mb-4 rounded-3 shadow-sm ${
        highlightPlan ? "border-primary" : null
      }`}
    >
      <div
        className={`card-header py-3 ${
          highlightPlan ? "text-bg-primary border-primary" : null
        }`}
      >
        <h4 className="my-0 fw-normal">{planName}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title pricing-card-title">
          <FormatMoney value={price} currency={currency} places={0} />
          <small className="text-muted fw-light">
            <Translate id="pages.pricing.perMonth" />
          </small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          {perks.map((perk, index) => (
            <li key={index}>{perk}</li>
          ))}
        </ul>
        <button
          type="button"
          className={`w-100 btn btn-lg ${
            highlightCtaButton ? "btn-primary" : "btn-outline-primary"
          }`}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}
