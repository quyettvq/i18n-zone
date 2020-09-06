const {translate, settings, validator} = require('../index.js');

settings.setResource('en', require('./resources/en.json'));
settings.setResource('vi', require('./resources/vi.json'));

console.log('validate resources:');
console.log(validator.validateResources());

settings.setLocale('en');

console.log(translate('choosing_number_of_days{numOfDays}', {numOfDays: 1200}));

console.log(translate('Hello:gender(SELECT, *male*  Mr., *female*  Ms., [,]) :name', {gender: 'male', name: 'Billy'}));
