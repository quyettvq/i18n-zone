# i18n-zone

A lightweigt translation module for JavaScript.

## Install
```bash
npm install i18n-zone
```

## Resources
`vi.json`
```json
{
    "What is your name?": "Tên bạn là gì?",
    "My name is :myName.": "Tên tôi là :myName.",
    "there_are_some_dogs{numOfDogs}": "Có :numOfDogs con chó.",
    "This is [:escaped] text"
}
```

`en.json`
```
{
    "there_are_some_dogs{numOfDogs}": "There :numOfDogs(PLURAL, 1 is one dog, ! are :@ dogs).",
    "This is [:escaped] text"
}
```

## Settings
```javascript
const {settings} = require('i18n-zone');

settings.setResource('vi', require('/path/to/vi.json'));
settings.setResource('en', require('/path/to/en.json'));

settings.setDefaultLocale('en');
settings.setLocale('vi');

```

### Translate
```javascript
const {translate} = require('i18n-zone');

translate('What is your name?');
// -> Tên bạn là gì?

translate('My name is :myName.', {myName: 'Quyết'});
// -> Tên tôi là Quyết.

translate('there_are_some_dogs{numOfDogs}', {numOfDogs: 10});
// -> Có 10 con chó

// current locale is 'vi'
// however, we can force locale to be 'en' by passing it as third argument
translate('there_are_some_dogs{numOfDogs}', {numOfDogs: 10}, 'en');
// -> There are 10 dogs.

// change locale to 'en'
settings.setLocale('en');

translate('there_are_some_dogs{numOfDogs}', {numOfDogs: 1});
// -> There is one dog.

// numbers will be formatted
translate('there_are_some_dogs{numOfDogs}', {numOfDogs: 10000});
// -> There are 100,000 dog.

// change the way to format number
const formatNumber = (number, locale, options) => {
    // your code goes here
    // by default, Number.prototype.toLocaleString is used
    
    return formattedNumber;
}

settings.setNumberFormatter(formatNumber);

```

