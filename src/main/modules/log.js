import {getDefaultLocale} from './settings';


const resourcesNotFound = {};

function logResourceNotFound(locale) {
    if (!resourcesNotFound.hasOwnProperty(locale)) {
        resourcesNotFound[locale] = "";
        console.warn(`(i18n/resources) resource not found: ${locale}`);
    }
}


const translationsNotFound = {};

function logTranslationNotFound(id, locale) {
    if (locale === getDefaultLocale()) {
        return;
    }

    if (!translationsNotFound.hasOwnProperty(locale)) {
        translationsNotFound[locale] = {};
    }

    if (!translationsNotFound[locale].hasOwnProperty(id)) {
        translationsNotFound[locale][id] = "";
        console.warn(`(i18n/resources) translation not found: ${locale} -> ${id}`);
    }
}


export {
    logResourceNotFound,
    logTranslationNotFound
};
