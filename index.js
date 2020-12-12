/**
 * @type {I18nZone}
 */
const i18n = require('./dist/lib.min.js');

/**
 *
 * @param {string} id
 * @param {Object.<string,string|number|Array>|null?} params
 * @param {string?} locale
 * @return {string}
 */
module.exports.translate = (id, params, locale) => i18n.translate(id, params, locale);

/**
 *
 * @type {I18nZoneSettings}
 */
module.exports.settings = i18n.settings;

/**
 *
 * @type {I18nZoneValidator}
 */
module.exports.validator = i18n.validator;

/**
 *
 * @type {I18nZoneCollector}
 */
module.exports.collector = i18n.collector;
