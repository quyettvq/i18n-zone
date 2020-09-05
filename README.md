# i18n-zone

A lightweight translation module for JavaScript.

[![NPM version][npm-image]][npm-url]

[npm-image]: https://badge.fury.io/js/i18n-zone.svg
[npm-url]: https://www.npmjs.com/package/i18n-zone

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
    "there_are_some_dogs{numOfDogs}": "Có :numOfDogs con chó."
}
```

`en.json`
```
{
    "there_are_some_dogs{numOfDogs}": "There :numOfDogs(PLURAL, 1 is one dog, ! are :@ dogs)."
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

## Translate
```javascript
const {translate} = require('i18n-zone');

translate('What is your name?');
// -> Tên bạn là gì?

translate('My name is :myName.', {myName: 'Quyết'});
// -> Tên tôi là Quyết.

```

## Pluralization

```javascript
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

// more variants
// use wildcard :@ to insert value into variant
translate('There :count(PLURAL, 0 are no comments, 1 is one comment, <10 are some comments, <=100 are :@ comments, ! are a lot of comments)', {count: 10});
// -> There are 10 comments.
```

## Number formatter

```javascript
// change the way to format number

/**
 * @return {string} formatted number
 */
const formatNumber = (number, locale) => {
    // your code goes here
    // by default, Number.prototype.toLocaleString is used
    return Number(number).toLocaleString(locale);
}

settings.setNumberFormatter(formatNumber);
```

```javascript
translate('there_are_some_dogs{numOfDogs}', {numOfDogs: 10000});
// -> There are 100,000 dog.

translate('That car costs :price dollars', {price: 55000});
// -> That car costs 55,000 dollars

// Use string if you don't want to format
translate('This year is :year', {year: '2014'});
// -> This year is 2014
```

## Escaping

Place the text in square brackets to escape

```javascript
translate('Hi :police, [:criminal] has been [[escaped]]', {police: 'Jame', criminal: 'Billy'});
// -> Hi Jame, :criminal has been [escaped]

translate('Hi :police, :criminal has been [arrested]', {police: 'Jame', criminal: 'Billy'});
// -> Hi Jame, Billy has been arrested

// if no params, raw message will be returned
translate(':nothing will be [escaped] if no params');
// -> :nothing will be [escaped] if no params

// escaping in variants
translate('There :count(PLURAL, 1 is one comment, >=100 are :@ comments[,] awesome!, ! are :@ comments)', {count: 100});
// -> There are 100 comments, awesome!
```
## Runtime validator

```javascript
const {runtimeValidator} from 'i18n-zone';

runtimeValidator.validateResources();
// No errors:
// -> null
// Has errors:
// -> {'vi': {'message ID': ['error 1', 'error 2']}}
```
## Interfaces
[Link to interfaces](https://github.com/quyettvq/i18n-zone/tree/master/interfaces)
