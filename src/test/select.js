const {translate, settings} = require('../../index');

settings.setResource('en', {});

const data = [
    [
        'There :count(SELECT,*1*is [one] message  , *9*     are some messages     , *10*    are :@ messages[,] good job!     ,are :@ messages[,] awesome!    )',
        {count: 1},
        'There is one message',
        {count: 9},
        'There are some messages',
        {count: 10},
        'There are 10 messages, good job!',
        {count: 10000},
        'There are 10000 messages, awesome!',
    ],
    [
        'Hello:gender(SELECT, *[m]ale[,] [*]* [ ]Mr[.], * female[*] * [ ][Ms.][,,,)]][))]**, [,]) :name',
        {gender: 'male, *', name: 'Billy'},
        'Hello Mr. Billy',
        {gender: ' female* ', name: 'Jonathan'},
        'Hello Ms.,,,)]))** Jonathan',
        {gender: 'other', name: 'Jame'},
        'Hello, Jame',
    ],
    [
        ':product:option(SELECT, ** , [ ]- :@)',
        {product: 'Tissot Carson Premium Powermatic 80', option: ''},
        'Tissot Carson Premium Powermatic 80',
        {product: 'Tissot Carson Premium Powermatic 80', option: 'Gold'},
        'Tissot Carson Premium Powermatic 80 - Gold',
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
