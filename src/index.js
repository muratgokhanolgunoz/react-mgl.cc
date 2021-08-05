import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import { I18nextProvider } from "react-i18next"
import i18next from "i18next"

import common_tr from "./tools/languages/tr/common.json";
import common_en from "./tools/languages/en/common.json";
import common_zh from "./tools/languages/zh/common.json";
import common_fa from "./tools/languages/fa/common.json";
import common_ar from "./tools/languages/ar/common.json";

i18next.init({
    interpolation: { escapeValue: false },
    lng: 'us',
    resources: {
        tr: {
            common: common_tr
        },
        us: {
            common: common_en
        },
        zh: {
            common: common_zh
        },
        fa: {
            common: common_fa
        },
        ar: {
            common: common_ar
        }
    },
})

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App />
    </I18nextProvider>,
    document.getElementById('root'))
