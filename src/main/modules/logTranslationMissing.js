import {getDefaultLocale} from './settings';

const missing = {};

function logTranslationMissing(id, locale) {
    if (locale === getDefaultLocale()) {
        return;
    }

    if (!missing.hasOwnProperty(locale)) {
        missing[locale] = {};
    }

    if (!missing[locale].hasOwnProperty(id)) {
        missing[locale][id] = "";
        console.warn(`(i18n/resources) not found: ${locale} -> ${id}`);
    }
}


export default logTranslationMissing;
