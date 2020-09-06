# I18n module for JavaScript

***i18n-zone**: A module with the simple and clear syntax, supports internationalization in projects using JavaScript. Main features: translating, number formatting, pluralization, selection.*

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
```json
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
// use wildcard :@ to insert value into variants
translate('There :count(PLURAL, 0 are no comments, 1 is one comment, <10 are some comments, <=100 are :@ comments, ! are a lot of comments)', {count: 10});
// -> There are 10 comments.
```

## Number formatting

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
translate('there_are_some_dogs{numOfDogs}', {numOfDogs: 100000});
// -> There are 100,000 dog.

translate('That car costs :price USD', {price: 55000});
// -> That car costs 55,000 USD

// Use string if you don't want to format
translate('This year is :year', {year: '2020'});
// -> This year is 2020
```

## Selection

```javascript
translate('Hello :gender(SELECT, *male* Mr., *female* Ms.) :name!', {gender: 'male', name: 'Jame'});
// -> Hello Mr. Jame!
```

## Escaping

Place the text in square brackets to escape

```javascript
translate('Hi :police, [:criminal] has been [[escaped]]', {police: 'Jame', criminal: 'Billy'});
// -> Hi Jame, :criminal has been [escaped]

translate('Hi :police, :criminal has been [arrested]', {police: 'Jame', criminal: 'Billy'});
// -> Hi Jame, Billy has been arrested

// if no params passed, raw message will be returned
translate(':nothing will be [escaped] if no params');
// -> :nothing will be [escaped] if no params

// escaping in variants
translate('There :count(PLURAL, 1 is one comment, >=100 are :@ comments[,] awesome!, ! are :@ comments)', {count: 100});
// -> There are 100 comments, awesome!

translate('Hello:gender(SELECT, *male* [ ]Mr., *female* [ ]Ms., [,]) :name!', {gender: 'other', name: 'Jack'});
// -> Hello, Jack!
```
## Validator

```javascript
const {validator} from 'i18n-zone';

validator.validateResources();
```

If no errors found, returns:

```javascript
null
```

If has errors, returns an object contains errors correspond with each ID:

```javascript
{
    "vi": {
        "message_id": [
            "error 1",
            "error 2"
        ]
    }
}
```

### Validator options:

#### idShouldBeTrimmed

Validate that IDs do not start or end with whitespaces

Type: `boolean`

Default: `true`

```javascript
validator.setOption('idShouldBeTrimmed', false);
```

#### messageShouldBeTrimmed

Validate that messages do not start or end with whitespaces

Type: `boolean`

Default: `true`

```javascript
validator.setOption('messageShouldBeTrimmed', false);
```

#### idMaxLength

Validate that IDs do not contains too many characters. Set `null` to disable.

Type: `number|null`

Default: `100`

```javascript
validator.setOption('idMaxLength', null);
```

#### singleWordMessageMaxLength

Validate that single-word messages do not contains too many characters. Set `null` to disable.

_(Single-word messages are messages contain only one word, no whitespaces between)._

Type: `number|null`

Default: `20`

```javascript
validator.setOption('singleWordMessageMaxLength', null);
```

#### idShouldReflectParams

Validate that IDs reflect exactly the same params with corresponding messages.

Type: `boolean`

Default: `true`

```javascript
validator.setOption('idShouldReflectParams', false);
```


## Interfaces
[Link to interfaces](https://github.com/quyettvq/i18n-zone/tree/master/interfaces)
