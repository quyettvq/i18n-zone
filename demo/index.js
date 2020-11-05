const {translate, settings, validator} = require('../index.js');

settings.setResource('en', require('./resources/en.json'));
settings.setResource('vi', require('./resources/vi.json'));

// validator.setOption('idShouldReflectParams', false);
// validator.setOptions({'idShouldBeTrimmed': false});
// validator.setOptions({'messageShouldBeTrimmed': false});
// validator.setOptions({'singleWordMessageMaxLength': null, 'idMaxLength': null});
console.log('validate resources:');
console.log(validator.validateResources());

settings.setLocale('en');


translate('', 34, '22');

console.log(translate('choosing_number_of_days{numOfDays}', {l: 'fff'}));

settings.setResource('en', {l: 'fff'});

console.log(translate('Hello:gender(SELECT, *[m]ale[,] [*]*  Mr., *femal[f]e* [ ][Ms.][,,,[))])**], [,]) :name', {gender: 'femalfe', name: 'Billy'}));

