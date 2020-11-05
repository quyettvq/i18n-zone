const {translate, settings} = require('../../index');

settings.setResource('en', {});
settings.setCurrencyFormatter((amount, locale, style) => {
    if (style === 'short') {
        return translate('$:amount', {amount}, locale);
    }

    return translate(':amount USD', {amount}, locale);
});

const data = [
    [
        'Total amount is :amount(CURRENCY)',
        {amount: 10000},
        'Total amount is 10,000 USD',
    ],
    [
        'Total amount is :amount(CURRENCY, short)',
        {amount: 10000},
        'Total amount is $10,000',
    ],
];



data.forEach(item => {
    const [message, ...inputOutputs] = item;

    for (let i = 0; i < inputOutputs.length - 1; i += 2) {
        const params = inputOutputs[i];
        const output = inputOutputs[i + 1];

        test(JSON.stringify([message, params]), () => {
            expect(translate(message, params)).toBe(output);
        });
    }
});
