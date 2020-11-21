const {translate, settings} = require('../../index');

settings.setResource('en', {});
settings.setDateFormatter((date, locale, style) => {
    const d = new Date(date);

    const pad = t => (t < 10 ? '0' : '') + t;

    return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
});

const data = [
    [
        'Today is :today(DATE)',
        {today: '2020-11-20'},
        'Today is 20/11/2020',
    ],
    [
        'Updated on :date(DATE)',
        {date: '2021-02-01 23:00:00'},
        'Updated on 01/02/2021',
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
