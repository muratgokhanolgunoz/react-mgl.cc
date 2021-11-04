import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import language_tr from "./utils/languages/tr/tr.json";
import language_en from "./utils/languages/en/en.json";

const defaultLanguageIsSet = () => {
    let browserLanguage = window.navigator.language;

    if (browserLanguage.indexOf("tr") === 0) {
        return "tr";
    } else {
        return "en";
    }
};

i18next.init({
    interpolation: { escapeValue: false },
    lng: defaultLanguageIsSet(),
    resources: {
        tr: {
            translation: language_tr,
        },
        en: {
            translation: language_en,
        },
    },
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>,
    document.getElementById("root")
);
