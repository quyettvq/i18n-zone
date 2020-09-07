const {translate, settings} = require('../../index');

settings.setResource('en', {});

const data = [
    [
        `There :count[haha]`,
        {count: 1},
        'There 1haha',
    ]
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