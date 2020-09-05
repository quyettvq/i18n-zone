# i18n-zone

A lightweigt translation module for JavaScript.

## Install
```bash
npm install i18n-zone
```

## Usage

### Settings
```javascript
const {settings} = require('i18n-zone');

settings.setResource('vi', {'greeting': 'Xin chào!'});
settings.setResource('en', {'greeting': 'Hello!'})

settings.setDefaultLocale('en');
settings.setLocale('vi');

```

### Translate
```javascript
const {translate} = require('i18n-zone');

translate('greeting');
// -> Xin chào
```
