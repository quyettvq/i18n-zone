
/**
 *
 * @return {RegExp}
 *
 * Full match: variable-style ID
 * Groups: paramNames
 */
function createVariableStyleIdRegex() {
    return /^[a-zA-Z_][a-zA-Z0-9_]*(?:\{([a-zA-Z_][a-zA-Z0-9_]*(?:,[a-zA-Z_][a-zA-Z0-9_]*)*)\})?$/;
}


/**
 *
 * @return {RegExp}
 *
 * Full match: sub text
 * Groups: escapedSubText
 * https://regex101.com/r/KSIPNR/3
 */
function createEscapeRegex() {
    return /\[(.*?[\]\s]*)]/g;
}

/**
 *
 * @return {RegExp}
 *
 *
 * Full match: message param
 * Groups: notation, paramName, mixinBeforeVariationText, variationType, variationText
 * https://regex101.com/r/2QkEEc/15
 */
function createMessageParamRegex() {
    return /(::)([a-zA-Z_][a-zA-Z0-9_]*)(?:(\(\s*([A-Z]+)\s*)(|,.+?)\))?/g;
}

/**
 *
 * @return {RegExp}
 *
 *
 * Full match: a variant text
 * Groups: mixinBeforeVariant, operator, comparedValue, variant
 * https://regex101.com/r/wyhpE5/6
 */
function createVariationPluralRegex() {
    return /(,\s*(?:(?:(|>=|<=|>|<)(\d+))|!)\s)([^,]+)/g;
}

/**
 *
 * @return {RegExp}
 */
function createVariantParamRegex() {
    return /:@/g;
}

export {
    createVariableStyleIdRegex,
    createEscapeRegex,
    createMessageParamRegex,
    createVariationPluralRegex,
    createVariantParamRegex,
}
