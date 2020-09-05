const fs = require('fs');
const path = require('path');

const i18n = require('../index.js');

i18n.settings.setResource('en', require('./resources/en.json'));
i18n.settings.setResource('vi', require('./resources/vi.json'));
i18n.settings.setNumberFormatter((number, locale, options) => formatNumberLocalized(number, null, locale));

console.log('validate resources:');
console.log(i18n.runtimeValidator.validateResources());

i18n.settings.setLocale('vi');

console.log(i18n.translate('choosing_number_of_days{numOfDays}', {numOfDays: 120000000000}));


function formatNumber(number, n, s, c) {
    if (typeof number !== 'number') {
        console.error(`${JSON.stringify(number)} is not a number`);
        return String(number);
    }
    let re = '\\d(?=(\\d{3})+' + (n > 0 ? '\\D' : '$') + ')';
    let num = number.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
}

function formatNumberLocalized(number, n = null, lang) {
    let s = ',';
    let c = '.';
    if (lang === 'vi') {
        s = '.';
        c = ',';
    }
    if (n === null) {
        let decimalPart = number.toString().split('.')[1];
        if (decimalPart) {
            n = decimalPart.length;
        } else {
            n = 0;
        }
    }
    return formatNumber(number, n, s, c);
}
