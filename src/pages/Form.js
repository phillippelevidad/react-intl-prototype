import { useFormat } from "../i18n/helpers/useFormat";
import { Translate } from "../i18n/components/Translate";

export function Form() {
  const { translate } = useFormat();

  return (
    <main className="flex-shrink-0">
      <div className="container">
        <h1 className="mt-5">
          <Translate id="pages.form.title" />
        </h1>
        <div className="col-md-6 col-xs-12">
          <form>
            <div className="mb-3">
              <label htmlFor="emailAddress" className="form-label">
                <Translate id="pages.form.fields.email.label" />
              </label>
              <input
                type="email"
                className="form-control"
                id="emailAddress"
                aria-describedby="emailHelp"
                placeholder={translate("pages.form.fields.email.placeholder")}
              />
              <div id="emailHelp" className="form-text">
                <Translate id="pages.form.fields.email.help" />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                <Translate id="pages.form.fields.subject.label" />
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder={translate("pages.form.fields.subject.placeholder")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                <Translate id="pages.form.fields.message.label" />
              </label>
              <textarea className="form-control" id="message" />
            </div>
            <button type="submit" className="btn btn-primary">
              <Translate id="pages.form.submit" />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
