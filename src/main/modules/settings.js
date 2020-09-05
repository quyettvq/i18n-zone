
const settings = {
    locale: 'en',
    defaultLocale: 'en',
    resources: {},
    numberFormatter: (number, locale, options) => Number(number).toLocaleString(locale, options),
};

function setLocale(locale) {
    settings.locale = locale;
}

function setDefaultLocale(defaultLocale) {
    settings.defaultLocale = defaultLocale;
}

function getLocale() {
    return settings.locale;
}

function getDefaultLocale() {
    return settings.defaultLocale;
}

function setResource(locale, resource) {
    settings.resources[locale] = resource;
}

function getResource(locale) {
    return settings.resources[locale];
}

function setResources(resources) {
    settings.resources = resources;
}

function getResources() {
    return settings.resources;
}

function setNumberFormatter(numberFormatter) {
    settings.numberFormatter = numberFormatter;
}

function getNumberFormatter() {
    return settings.numberFormatter;
}

export {
    setLocale,
    setDefaultLocale,
    getLocale,
    getDefaultLocale,
    setResource,
    getResource,
    setResources,
    getResources,
    setNumberFormatter,
    getNumberFormatter,
};
