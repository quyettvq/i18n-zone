const {translate, settings} = require('../../index');

settings.setResource('en', {});

const data = [
    [
        'There :count(PLURAL, 1    is [one] message  ,\
        <10     are some messages     ,\
        <100    are :@ messages[,] good job!     ,\
        !    are :@ messages[,] awesome!    )',
        {count: 1},
        'There is one message',
        {count: 9},
        'There are some messages',
        {count: 10},
        'There are 10 messages, good job!',
        {count: 10000},
        'There are 10,000 messages, awesome!',
    ],
    [
        'There :numOfDays(PLURAL, 1 is :@ :yourName [[day]], 0 is no days, <10 are some days, 365 is one year, ! are :@ days) for :yourName kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
        {numOfDays: 1, yourName: 'Quyết'},
        'There is 1 :yourName [day] for Quyết kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
        {numOfDays: 0, yourName: 'Quyết'},
        '"There is no days for Quyết kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
        {numOfDays: 6, yourName: 'Quyết'},
        'There are some days for Quyết kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
        {numOfDays: 365, yourName: 'Quyết'},
        'There is one year for Quyết kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
        {numOfDays: 8000, yourName: 'Quyết'},
        'There are 8,000 days for Quyết kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',

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
