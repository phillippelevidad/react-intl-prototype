import { Translate } from "../i18n/components/Translate";

export function Home() {
  return (
    <main className="flex-shrink-0">
      <div className="container">
        <h1 className="mt-5">
          <Translate id="pages.home.title" />
        </h1>
        <p className="lead">
          <Translate
            id="pages.home.lead"
            values={{
              link: (chunk) => (
                <a
                  href="https://www.npmjs.com/package/react-intl"
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
