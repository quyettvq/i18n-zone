module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../src/main/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../src/main/index.js":
/*!*********************************************!*\
  !*** D:/npm_package/i18n/src/main/index.js ***!
  \*********************************************/
/*! exports provided: translate, settings, runtimeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/translate */ \"../../src/main/modules/translate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"translate\", function() { return _modules_translate__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _modules_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/settings */ \"../../src/main/modules/settings.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return _modules_settings__WEBPACK_IMPORTED_MODULE_1__; });\n/* harmony import */ var _modules_runtimeValidator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/runtimeValidator */ \"../../src/main/modules/runtimeValidator.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"runtimeValidator\", function() { return _modules_runtimeValidator__WEBPACK_IMPORTED_MODULE_2__; });\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://i18nZone/D:/npm_package/i18n/src/main/index.js?");

/***/ }),

/***/ "../../src/main/modules/logTranslationMissing.js":
/*!*********************************************************************!*\
  !*** D:/npm_package/i18n/src/main/modules/logTranslationMissing.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"../../src/main/modules/settings.js\");\n\r\n\r\nconst missing = {};\r\n\r\nfunction logTranslationMissing(id, locale) {\r\n    if (locale === Object(_settings__WEBPACK_IMPORTED_MODULE_0__[\"getDefaultLocale\"])()) {\r\n        return;\r\n    }\r\n\r\n    if (!missing.hasOwnProperty(locale)) {\r\n        missing[locale] = {};\r\n    }\r\n\r\n    if (!missing[locale].hasOwnProperty(id)) {\r\n        missing[locale][id] = \"\";\r\n        console.warn(`(i18n/resources) not found: ${locale} -> ${id}`);\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (logTranslationMissing);\r\n\n\n//# sourceURL=webpack://i18nZone/D:/npm_package/i18n/src/main/modules/logTranslationMissing.js?");

/***/ }),

/***/ "../../src/main/modules/regex.js":
/*!*****************************************************!*\
  !*** D:/npm_package/i18n/src/main/modules/regex.js ***!
  \*****************************************************/
/*! exports provided: createVariableStyleIdRegex, createEscapeRegex, createMessageParamRegex, createVariationPluralRegex, createVariantParamRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createVariableStyleIdRegex\", function() { return createVariableStyleIdRegex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createEscapeRegex\", function() { return createEscapeRegex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMessageParamRegex\", function() { return createMessageParamRegex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createVariationPluralRegex\", function() { return createVariationPluralRegex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createVariantParamRegex\", function() { return createVariantParamRegex; });\n\r\n/**\r\n *\r\n * @return {RegExp}\r\n *\r\n * Full match: variable-style ID\r\n * Groups: paramNames\r\n */\r\nfunction createVariableStyleIdRegex() {\r\n    return /^[a-zA-Z_][a-zA-Z0-9_]*(?:\\{([a-zA-Z_][a-zA-Z0-9_]*(?:,[a-zA-Z_][a-zA-Z0-9_]*)*)\\})?$/;\r\n}\r\n\r\n\r\n/**\r\n *\r\n * @return {RegExp}\r\n *\r\n * Full match: sub text\r\n * Groups: escapedSubText\r\n * https://regex101.com/r/KSIPNR/3\r\n */\r\nfunction createEscapeRegex() {\r\n    return /\\[(.*?[\\]\\s]*)]/g;\r\n}\r\n\r\n/**\r\n *\r\n * @return {RegExp}\r\n *\r\n *\r\n * Full match: message param\r\n * Groups: notation, paramName, mixinBeforeVariationText, variationType, variationText\r\n * https://regex101.com/r/2QkEEc/15\r\n */\r\nfunction createMessageParamRegex() {\r\n    return /(::)([a-zA-Z_][a-zA-Z0-9_]*)(?:(\\(\\s*([A-Z]+)\\s*)(|,.+?)\\))?/g;\r\n}\r\n\r\n/**\r\n *\r\n * @return {RegExp}\r\n *\r\n *\r\n * Full match: a variant text\r\n * Groups: mixinBeforeVariant, operator, comparedValue, variant\r\n * https://regex101.com/r/wyhpE5/6\r\n */\r\nfunction createVariationPluralRegex() {\r\n    return /(,\\s*(?:(?:(|>=|<=|>|<)(\\d+))|!)\\s)([^,]+)/g;\r\n}\r\n\r\n/**\r\n *\r\n * @return {RegExp}\r\n */\r\nfunction createVariantParamRegex() {\r\n    return /:@/g;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://i18nZone/D:/npm_package/i18n/src/main/modules/regex.js?");

/***/ }),

/***/ "../../src/main/modules/runtimeValidator.js":
/*!****************************************************************!*\
  !*** D:/npm_package/i18n/src/main/modules/runtimeValidator.js ***!
  \****************************************************************/
/*! exports provided: validateResources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateResources\", function() { return validateResources; });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"../../src/main/modules/settings.js\");\n/* harmony import */ var _regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regex */ \"../../src/main/modules/regex.js\");\n\r\n\r\n\r\n/**\r\n *\r\n * @return {{}|null}\r\n */\r\nfunction validateResources() {\r\n    const resources = Object(_settings__WEBPACK_IMPORTED_MODULE_0__[\"getResources\"])();\r\n\r\n    const allErrors = {};\r\n\r\n    for (let locale in resources) {\r\n        if (resources.hasOwnProperty(locale)) {\r\n            const resourceErrors = {};\r\n            for (let id in resources[locale]) {\r\n                if (resources[locale].hasOwnProperty(id)) {\r\n                    const errors = validateIdAndMessage(id, resources[locale][id]);\r\n                    if (errors.length > 0) {\r\n                        resourceErrors[id] = errors;\r\n                    }\r\n                }\r\n            }\r\n            if (Object.keys(resourceErrors).length > 0) {\r\n                allErrors[locale] = resourceErrors;\r\n            }\r\n        }\r\n    }\r\n\r\n    if (Object.keys(allErrors).length > 0) {\r\n        return allErrors;\r\n    }\r\n\r\n    return null;\r\n}\r\n\r\n/**\r\n *\r\n * @param {string} id\r\n * @param {string} msg\r\n * @return {[]}\r\n */\r\nfunction validateIdAndMessage(id, msg) {\r\n    const errors = [];\r\n\r\n    const isVariableStyleId = Object(_regex__WEBPACK_IMPORTED_MODULE_1__[\"createVariableStyleIdRegex\"])().test(id);\r\n\r\n    // validate start and end white space\r\n\r\n    if (id.trim() !== id) {\r\n        errors.push(`ID should not start or end with white-space`);\r\n    }\r\n\r\n    if (msg.trim() !== msg) {\r\n        errors.push(`Message should not start or end with white-space`);\r\n    }\r\n\r\n\r\n    // validate id max length\r\n\r\n    const maxValidIdLength = 99;\r\n    if (id.length > maxValidIdLength) {\r\n        if (isVariableStyleId) {\r\n            errors.push(`ID too long: ${id.length}. Expected <= ${maxValidIdLength}`);\r\n        } else {\r\n            errors.push(`ID too long: ${id.length}. Expected <= ${maxValidIdLength}. Please consider to use variable-style ID`);\r\n        }\r\n    }\r\n\r\n\r\n    const msgParams = getParamNamesFromMessage(msg);\r\n\r\n\r\n    // validate message white-spacing\r\n\r\n    const maxSingleWordLength = 19;\r\n    if (msg.length > maxSingleWordLength && msgParams.length === 0 && !/\\s/.test(msg)) {\r\n        errors.push(`Message should be a human-readable sentence/text which includes words instead of a \"long word\" without separating by white-space. Max length of a single-word message: ${maxSingleWordLength}`);\r\n    }\r\n\r\n\r\n    // validate params\r\n    const idParams = isVariableStyleId ? getParamNamesFromVariableStyleId(id) : getParamNamesFromMessage(id);\r\n\r\n    if (msgParams.length === idParams.length) {\r\n        for (let i = 0; i < idParams.length; i++) {\r\n            if (idParams[i] !== msgParams[i]) {\r\n                errors.push(`Param at ${i} of ID and message is not the same: ${idParams[i]} vs ${msgParams[i]}`);\r\n            }\r\n        }\r\n    } else {\r\n        if (isVariableStyleId && idParams.length === 0) {\r\n            errors.push(`Variable-style IDs need to end with a list of params which are the same used in the message if any. Syntax: an_awesome_id{meaningParam,greatParamAbc,numOfItems}. Note that white-spaces are not accepted`);\r\n        } else {\r\n            errors.push(`ID params length: ${idParams.length} is not equal to message params length: ${msgParams.length}`);\r\n        }\r\n    }\r\n\r\n    return errors;\r\n}\r\n\r\nfunction getParamNamesFromMessage(message) {\r\n    const paramNames = [];\r\n\r\n    const regex = Object(_regex__WEBPACK_IMPORTED_MODULE_1__[\"createMessageParamRegex\"])();\r\n\r\n    do {\r\n        const match = regex.exec(message);\r\n\r\n        if (match === null) {\r\n            break;\r\n        }\r\n\r\n        const [fullMatch, notation, paramName] = match;\r\n\r\n        paramNames.push(paramName);\r\n\r\n    } while (true);\r\n\r\n    return paramNames;\r\n}\r\n\r\nfunction getParamNamesFromVariableStyleId(id) {\r\n    const matches = id.match(Object(_regex__WEBPACK_IMPORTED_MODULE_1__[\"createVariableStyleIdRegex\"])());\r\n\r\n    const paramNames = matches[1];\r\n\r\n    if (paramNames === undefined) {\r\n        return [];\r\n    }\r\n\r\n    return matches[1].split(',');\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://i18nZone/D:/npm_package/i18n/src/main/modules/runtimeValidator.js?");

/***/ }),

/***/ "../../src/main/modules/settings.js":
/*!********************************************************!*\
  !*** D:/npm_package/i18n/src/main/modules/settings.js ***!
  \********************************************************/
/*! exports provided: setLocale, setDefaultLocale, getLocale, getDefaultLocale, setResource, getResource, setResources, getResources, setNumberFormatter, getNumberFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLocale\", function() { return setLocale; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setDefaultLocale\", function() { return setDefaultLocale; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLocale\", function() { return getLocale; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDefaultLocale\", function() { return getDefaultLocale; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setResource\", function() { return setResource; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getResource\", function() { return getResource; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setResources\", function() { return setResources; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getResources\", function() { return getResources; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setNumberFormatter\", function() { return setNumberFormatter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNumberFormatter\", function() { return getNumberFormatter; });\n\r\nconst settings = {\r\n    locale: 'en',\r\n    defaultLocale: 'en',\r\n    resources: {},\r\n    numberFormatter: (number, locale, options) => Number(number).toLocaleString(locale, options),\r\n};\r\n\r\nfunction setLocale(locale) {\r\n    settings.locale = locale;\r\n}\r\n\r\nfunction setDefaultLocale(defaultLocale) {\r\n    settings.defaultLocale = defaultLocale;\r\n}\r\n\r\nfunction getLocale() {\r\n    return settings.locale;\r\n}\r\n\r\nfunction getDefaultLocale() {\r\n    return settings.defaultLocale;\r\n}\r\n\r\nfunction setResource(locale, resource) {\r\n    settings.resources[locale] = resource;\r\n}\r\n\r\nfunction getResource(locale) {\r\n    return settings.resources[locale];\r\n}\r\n\r\nfunction setResources(resources) {\r\n    settings.resources = resources;\r\n}\r\n\r\nfunction getResources() {\r\n    return settings.resources;\r\n}\r\n\r\nfunction setNumberFormatter(numberFormatter) {\r\n    settings.numberFormatter = numberFormatter;\r\n}\r\n\r\nfunction getNumberFormatter() {\r\n    return settings.numberFormatter;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://i18nZone/D:/npm_package/i18n/src/main/modules/settings.js?");

/***/ }),

/***/ "../../src/main/modules/translate.js":
/*!*********************************************************!*\
  !*** D:/npm_package/i18n/src/main/modules/translate.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ \"../../src/main/modules/settings.js\");\n/* harmony import */ var _logTranslationMissing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logTranslationMissing */ \"../../src/main/modules/logTranslationMissing.js\");\n/* harmony import */ var _regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regex */ \"../../src/main/modules/regex.js\");\n\r\n\r\n\r\n\r\n\r\nfunction translate(id, params = null, locale = Object(_settings__WEBPACK_IMPORTED_MODULE_0__[\"getLocale\"])()) {\r\n    const message = getMessage(id, locale);\r\n\r\n    if (params === null) {\r\n        return message;\r\n    }\r\n\r\n    const [escapedMessage, escapedItems] = escapeMessage(message);\r\n\r\n    const deparametrizedEscapedMessage = escapedDeparametrize(escapedMessage, escapedItems, params, id, locale);\r\n\r\n    return unescapeMessage(deparametrizedEscapedMessage, escapedItems);\r\n}\r\n\r\nfunction getMessage(id, locale) {\r\n    if (Object(_settings__WEBPACK_IMPORTED_MODULE_0__[\"getResource\"])(locale).hasOwnProperty(id)) {\r\n        return Object(_settings__WEBPACK_IMPORTED_MODULE_0__[\"getResource\"])(locale)[id];\r\n    }\r\n\r\n    Object(_logTranslationMissing__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id, locale);\r\n\r\n    return id;\r\n}\r\n\r\nfunction escapedDeparametrize(escapedMessage, escapedItems, params, id, locale) {\r\n    return escapedMessage.replace(\r\n        Object(_regex__WEBPACK_IMPORTED_MODULE_2__[\"createMessageParamRegex\"])(),\r\n        (\r\n            fullMatch, notation, paramName,\r\n            mixinBeforeVariationText = '', variationType = '', variationText = '',\r\n            fullMatchIndex\r\n        ) => {\r\n            const variantResult = getParamVariantValue(\r\n                params[paramName], paramName,\r\n                variationType, variationText,\r\n                id, locale\r\n            );\r\n\r\n            const variationTextRelativeIndex = (notation + paramName + mixinBeforeVariationText).length;\r\n\r\n            updateSliceIndexesAfterReplaceOneMessageParamByValue(\r\n                escapedItems, fullMatchIndex, fullMatch.length,\r\n                variationTextRelativeIndex, variantResult.value,\r\n                variantResult.paramReplacements, variantResult.origin\r\n            );\r\n\r\n            return variantResult.value;\r\n        }\r\n    );\r\n}\r\n\r\nfunction escapeMessage(message) {\r\n    let escapedMessage = '';\r\n    let escapedItems = [];\r\n\r\n    const handleEscaped = (escapedSubtext, subtext, sliceIndex) => {\r\n        // replace by a safe string\r\n        escapedMessage += subtext.replace(/[^\\s]/g, 'z');\r\n\r\n        escapedItems.push({\r\n            escapedSubtext,\r\n            subtext,\r\n            sliceIndex,\r\n            sliceIndexChange: 0,\r\n            retainedInResult: true\r\n        });\r\n    };\r\n\r\n    const handleNormal = (subtext, sliceIndex) => {\r\n        escapedMessage += subtext;\r\n    };\r\n\r\n    forEscape(message, handleEscaped, handleNormal);\r\n\r\n    return [escapedMessage, escapedItems];\r\n}\r\n\r\nfunction unescapeMessage(message, escapedItems) {\r\n    let dynamicIndexChange = 0;\r\n\r\n    escapedItems.forEach(item => {\r\n        if (!item.retainedInResult) {\r\n            return;\r\n        }\r\n\r\n        const sliceIndex = item.sliceIndex + item.sliceIndexChange + dynamicIndexChange;\r\n\r\n        const p1 = message.substring(0, sliceIndex);\r\n        const p2 = message.substring(sliceIndex + item.subtext.length, message.length);\r\n\r\n        message = p1 + item.escapedSubtext + p2;\r\n        dynamicIndexChange += item.escapedSubtext.length - item.subtext.length;\r\n    });\r\n\r\n    return message;\r\n}\r\n\r\n/**\r\n *\r\n * @param {object[]} escapedItems\r\n * @param {number} fullMatchIndex\r\n * @param {number} fullMatchLength\r\n * @param {number} variationTextRelativeIndex\r\n * @param {string} value\r\n * @param {object[]|undefined} variantParamReplacements\r\n * @param {object|undefined} variantOrigin\r\n */\r\nfunction updateSliceIndexesAfterReplaceOneMessageParamByValue\r\n(\r\n    escapedItems,\r\n    fullMatchIndex,\r\n    fullMatchLength,\r\n    variationTextRelativeIndex,\r\n    value,\r\n    variantParamReplacements = null,\r\n    variantOrigin = {index: 0, length: 0}\r\n)\r\n{\r\n    escapedItems.forEach((item) => {\r\n        // if this item is before full match\r\n        // just simply next\r\n        if (item.sliceIndex < fullMatchIndex) {\r\n            return;\r\n        }\r\n\r\n        // if this item is behind full match\r\n        // update slice index change\r\n        // next\r\n        if (item.sliceIndex >= fullMatchIndex + fullMatchLength) {\r\n            item.sliceIndexChange += value.length - fullMatchLength;\r\n            return;\r\n        }\r\n\r\n        const variantRelativeIndex = variationTextRelativeIndex + variantOrigin.index;\r\n        const variantAbsoluteIndex = fullMatchIndex + variantRelativeIndex;\r\n\r\n        // if this item is not contained in range of selected variant\r\n        // mark this item is not retained in result\r\n        // next\r\n        if (item.sliceIndex < variantAbsoluteIndex ||\r\n            item.sliceIndex >= variantAbsoluteIndex + variantOrigin.length\r\n        ) {\r\n            item.retainedInResult = false;\r\n            return;\r\n        }\r\n\r\n        // update slice index change\r\n        item.sliceIndexChange += -variantRelativeIndex;\r\n\r\n        // if no variant param replacements\r\n        // next\r\n        if (variantParamReplacements === null) {\r\n            return;\r\n        }\r\n\r\n        // base on variant param replacements\r\n        // continue update slice index change\r\n        variantParamReplacements.forEach(({index: paramIndex, oldLength, newLength}) => {\r\n            const paramAbsoluteIndex = fullMatchIndex + variationTextRelativeIndex + variantOrigin.index + paramIndex;\r\n\r\n            // if this item is behind the end of variant param\r\n            // update slice index change\r\n            if (item.sliceIndex >= paramAbsoluteIndex + oldLength) {\r\n                item.sliceIndexChange += newLength - oldLength;\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\n/**\r\n *\r\n * @param {*} rawValue\r\n * @param {string} paramName\r\n * @param {string} variationType\r\n * @param {string} variationText\r\n * @param {string} id\r\n * @param {string} locale\r\n * @return {*}\r\n */\r\nfunction getParamVariantValue(rawValue, paramName, variationType, variationText, id, locale) {\r\n    if (rawValue === undefined) {\r\n        console.error(`(i18n/translate) value for param: ${paramName} is not provided when translate message: ${id}`);\r\n\r\n        return {value: paramName};\r\n    }\r\n\r\n    if (rawValue instanceof Array) {\r\n        return getParamArrayValue(rawValue, locale);\r\n    }\r\n\r\n    if ('number' === typeof rawValue) {\r\n        if (variationType === 'PLURAL') {\r\n            return getParamPluralValue(rawValue, variationText, locale);\r\n        }\r\n\r\n        return getParamNumberValue(rawValue, locale);\r\n    }\r\n\r\n    return {value: String(rawValue)};\r\n}\r\n\r\nfunction getParamArrayValue(rawValue, locale) {\r\n    return {value: rawValue.join(', ')};\r\n}\r\n\r\nfunction getParamNumberValue(rawValue, locale) {\r\n    return {value: (Object(_settings__WEBPACK_IMPORTED_MODULE_0__[\"getNumberFormatter\"])())(rawValue, locale)};\r\n}\r\n\r\nfunction getParamPluralValue(rawValue, variationText, locale) {\r\n    const formattedValue = (Object(_settings__WEBPACK_IMPORTED_MODULE_0__[\"getNumberFormatter\"])())(rawValue, locale);\r\n\r\n    const toVariantValue = (variant) => {\r\n        const paramReplacements = [];\r\n\r\n        let value = variant.replace(Object(_regex__WEBPACK_IMPORTED_MODULE_2__[\"createVariantParamRegex\"])(), (paramMatch, paramMatchIndex) => {\r\n            paramReplacements.push({\r\n                index: paramMatchIndex,\r\n                oldLength: paramMatch.length,\r\n                newLength: formattedValue.length\r\n            });\r\n\r\n            return formattedValue;\r\n        });\r\n\r\n        return {value, paramReplacements};\r\n    };\r\n\r\n    const regex = Object(_regex__WEBPACK_IMPORTED_MODULE_2__[\"createVariationPluralRegex\"])();\r\n\r\n    let match;\r\n\r\n    do {\r\n        match = regex.exec(variationText);\r\n\r\n        if (match === null) {\r\n            break;\r\n        }\r\n\r\n        const [_, mixinBeforeVariant, operator, comparedValue, variant] = match;\r\n\r\n        const variantIndex = match.index + mixinBeforeVariant.length;\r\n        const variantLength = variant.length;\r\n\r\n        if (comparedValue === undefined) {\r\n            return {\r\n                ...toVariantValue(variant),\r\n                origin: {\r\n                    index: variantIndex,\r\n                    length: variantLength\r\n                }\r\n            };\r\n        }\r\n\r\n        const rawNumber = Number(rawValue);\r\n        const comparedNumber = Number(comparedValue);\r\n\r\n        let passed = (\r\n            operator === '>' && rawNumber > comparedNumber\r\n            || operator === '>=' && rawNumber >= comparedNumber\r\n            || operator === '<' && rawNumber < comparedNumber\r\n            || operator === '<=' && rawNumber <= comparedNumber\r\n            || operator === '' && rawNumber === comparedNumber\r\n        );\r\n\r\n        if (passed) {\r\n            return {\r\n                ...toVariantValue(variant),\r\n                origin: {\r\n                    index: variantIndex,\r\n                    length: variantLength\r\n                }\r\n            };\r\n        }\r\n\r\n    } while (true);\r\n\r\n    return {value: formattedValue};\r\n}\r\n\r\nfunction forEscape(text, handleEscaped, handleNormal) {\r\n    const regex = Object(_regex__WEBPACK_IMPORTED_MODULE_2__[\"createEscapeRegex\"])();\r\n\r\n    // slice indexes separate text to interleaved normal and escaped subtext:\r\n    // | normal | escaped | normal | escaped | normal |\r\n    // start and end of string always is normal subtext\r\n    // start subtext and end subtext can be empty\r\n    // slice index is an even number -> normal subtext\r\n    // slice index is an odd number  -> escaped subtext\r\n    // initialize with the first slice index\r\n    const sliceIndexes = [0];\r\n\r\n    // Map: [slice index -> escaped subtext]\r\n    const escapedMap = new Map();\r\n\r\n    let match;\r\n\r\n    do {\r\n        match = regex.exec(text);\r\n\r\n        // if no match\r\n        // add the last slice index\r\n        // finish here\r\n        if (match === null) {\r\n            sliceIndexes.push(text.length);\r\n            break;\r\n        }\r\n\r\n        const [subtext, escapedSubtext] = match;\r\n\r\n        sliceIndexes.push(match.index);\r\n        sliceIndexes.push(match.index + subtext.length);\r\n\r\n        escapedMap.set(match.index, escapedSubtext);\r\n\r\n    } while (true);\r\n\r\n    for (let i = 0; i < sliceIndexes.length - 1; i++) {\r\n        const sliceIndex = sliceIndexes[i];\r\n        const nextSliceIndex = sliceIndexes[i + 1];\r\n\r\n        const subtext = text.substring(sliceIndex, nextSliceIndex);\r\n\r\n        // slice index is an even number -> normal subtext\r\n        if (i % 2 === 0) {\r\n            handleNormal(subtext, sliceIndex);\r\n            continue;\r\n        }\r\n\r\n        // escaped subtext\r\n        const escapedSubtext = escapedMap.get(sliceIndex);\r\n        handleEscaped(escapedSubtext, subtext, sliceIndex);\r\n    }\r\n}\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (translate);\r\n\n\n//# sourceURL=webpack://i18nZone/D:/npm_package/i18n/src/main/modules/translate.js?");

/***/ })

/******/ });