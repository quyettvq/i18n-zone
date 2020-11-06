
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
 * https://regex101.com/r/KSIPNR/6
 */
function createEscapeRegex() {
    return /\[([\[\s]*[^\[]*?[\]\s]*)]/g;
}

/**
 *
 * @return {RegExp}
 *
 *
 * Full match: message param
 * Groups: notation, paramName, mixinBeforeVariationText, variationType, variationText
 * https://regex101.com/r/2QkEEc/16
 */
function createMessageParamRegex() {
    return /(:)([a-zA-Z_][a-zA-Z0-9_]*)(?:(\(\s*([A-Z]+)\s*)(|,[^]+?)\))?/g;
}

/**
 *
 * @return {RegExp}
 *
 *
 * Full match: a variant text
 * Groups: separator, mixinBeforeVariant, operator?, comparedValue?, variant
 * https://regex101.com/r/wyhpE5/6
 */
function createVariationPluralRegex() {
    return /(,)(\s*(?:(?:(|>=|<=|>|<)(\d+))|!)\s)([^,]*)/g;
}

/**
 *
 * @return {RegExp}
 *
 *
 * Full match: a variant text
 * Groups: separator, mixinBeforeVariant, mixinBeforeComparedValue?, comparedValue?, variant
 * https://regex101.com/r/wyhpE5/9
 */
function createVariationSelectRegex() {
    return /(,)((\s*\*)([^*]*)\*|)([^,]*)/g;
}

/**
 *
 * @return {RegExp}
 */
function createVariantParamRegex() {
    return /:@/g;
}

/**
 *
 * @return {RegExp}
 */
function createTrimRegex() {
    return /^\s+|\s+$/g;
}

export {
    createVariableStyleIdRegex,
    createEscapeRegex,
    createMessageParamRegex,
    createVariationPluralRegex,
    createVariationSelectRegex,
    createVariantParamRegex,
    createTrimRegex
}
