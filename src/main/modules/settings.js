const settings = {
    locale: 'en',
    defaultLocale: 'en',
    resources: {},
    numberFormatter: (number, locale) => Number(number).toLocaleString(locale),
    currencyFormatter: (amount, locale, style) => Number(amount).toLocaleString(locale, {style: 'currency', currency: 'USD'}),
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

function setCurrencyFormatter(currencyFormatter) {
    settings.currencyFormatter = currencyFormatter;
}

function getCurrencyFormatter() {
    return settings.currencyFormatter;
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
    setCurrencyFormatter,
    getCurrencyFormatter,
};
