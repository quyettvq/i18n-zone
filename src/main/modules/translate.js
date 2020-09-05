import {getLocale, getResource, getNumberFormatter} from "./settings";
import {logResourceNotFound, logTranslationNotFound} from "./log";
import {
    createEscapeRegex,
    createMessageParamRegex,
    createVariationPluralRegex,
    createVariantParamRegex,
} from './regex';


function translate(id, params = null, locale = getLocale()) {
    const message = getMessage(id, locale);

    if (params === null) {
        return message;
    }

    const [escapedMessage, escapedItems] = escapeMessage(message);

    const deparametrizedEscapedMessage = escapedDeparametrize(escapedMessage, escapedItems, params, id, locale);

    return unescapeMessage(deparametrizedEscapedMessage, escapedItems);
}

function getMessage(id, locale) {
    const resource = getResource(locale);

    try {
        if (resource.hasOwnProperty(id)) {
            return resource[id];
        }

        logTranslationNotFound(id, locale);

    } catch (error) {

        logResourceNotFound(locale);
    }

    return id;
}

function escapedDeparametrize(escapedMessage, escapedItems, params, id, locale) {
    return escapedMessage.replace(
        createMessageParamRegex(),
        (
            fullMatch, notation, paramName,
            mixinBeforeVariationText = '', variationType = '', variationText = '',
            fullMatchIndex
        ) => {
            const variantResult = getParamVariantValue(
                params[paramName], paramName,
                variationType, variationText,
                id, locale
            );

            const variationTextRelativeIndex = (notation + paramName + mixinBeforeVariationText).length;

            updateSliceIndexesAfterReplaceOneMessageParamByValue(
                escapedItems, fullMatchIndex, fullMatch.length,
                variationTextRelativeIndex, variantResult.value,
                variantResult.paramReplacements, variantResult.origin
            );

            return variantResult.value;
        }
    );
}

function escapeMessage(message) {
    let escapedMessage = '';
    let escapedItems = [];

    const handleEscaped = (escapedSubtext, subtext, sliceIndex) => {
        // replace by a safe string
        escapedMessage += subtext.replace(/[^\s]/g, 'z');

        escapedItems.push({
            escapedSubtext,
            subtext,
            sliceIndex,
            sliceIndexChange: 0,
            retainedInResult: true
        });
    };

    const handleNormal = (subtext, sliceIndex) => {
        escapedMessage += subtext;
    };

    forEscape(message, handleEscaped, handleNormal);

    return [escapedMessage, escapedItems];
}

function unescapeMessage(message, escapedItems) {
    let dynamicIndexChange = 0;

    escapedItems.forEach(item => {
        if (!item.retainedInResult) {
            return;
        }

        const sliceIndex = item.sliceIndex + item.sliceIndexChange + dynamicIndexChange;

        const p1 = message.substring(0, sliceIndex);
        const p2 = message.substring(sliceIndex + item.subtext.length, message.length);

        message = p1 + item.escapedSubtext + p2;
        dynamicIndexChange += item.escapedSubtext.length - item.subtext.length;
    });

    return message;
}

/**
 *
 * @param {object[]} escapedItems
 * @param {number} fullMatchIndex
 * @param {number} fullMatchLength
 * @param {number} variationTextRelativeIndex
 * @param {string} value
 * @param {object[]|undefined} variantParamReplacements
 * @param {object|undefined} variantOrigin
 */
function updateSliceIndexesAfterReplaceOneMessageParamByValue
(
    escapedItems,
    fullMatchIndex,
    fullMatchLength,
    variationTextRelativeIndex,
    value,
    variantParamReplacements = null,
    variantOrigin = {index: 0, length: 0}
)
{
    escapedItems.forEach((item) => {
        // if this item is before full match
        // just simply next
        if (item.sliceIndex < fullMatchIndex) {
            return;
        }

        // if this item is behind full match
        // update slice index change
        // next
        if (item.sliceIndex >= fullMatchIndex + fullMatchLength) {
            item.sliceIndexChange += value.length - fullMatchLength;
            return;
        }

        const variantRelativeIndex = variationTextRelativeIndex + variantOrigin.index;
        const variantAbsoluteIndex = fullMatchIndex + variantRelativeIndex;

        // if this item is not contained in range of selected variant
        // mark this item is not retained in result
        // next
        if (item.sliceIndex < variantAbsoluteIndex ||
            item.sliceIndex >= variantAbsoluteIndex + variantOrigin.length
        ) {
            item.retainedInResult = false;
            return;
        }

        // update slice index change
        item.sliceIndexChange += -variantRelativeIndex;

        // if no variant param replacements
        // next
        if (variantParamReplacements === null) {
            return;
        }

        // base on variant param replacements
        // continue update slice index change
        variantParamReplacements.forEach(({index: paramIndex, oldLength, newLength}) => {
            const paramAbsoluteIndex = fullMatchIndex + variationTextRelativeIndex + variantOrigin.index + paramIndex;

            // if this item is behind the end of variant param
            // update slice index change
            if (item.sliceIndex >= paramAbsoluteIndex + oldLength) {
                item.sliceIndexChange += newLength - oldLength;
            }
        });
    });
}

/**
 *
 * @param {*} rawValue
 * @param {string} paramName
 * @param {string} variationType
 * @param {string} variationText
 * @param {string} id
 * @param {string} locale
 * @return {*}
 */
function getParamVariantValue(rawValue, paramName, variationType, variationText, id, locale) {
    if (rawValue === undefined) {
        console.error(`(i18n/translate) value for param: ${paramName} is not provided when translate message: ${id}`);

        return {value: paramName};
    }

    if (rawValue instanceof Array) {
        return getParamArrayValue(rawValue, locale);
    }

    if ('number' === typeof rawValue) {
        if (variationType === 'PLURAL') {
            return getParamPluralValue(rawValue, variationText, locale);
        }

        return getParamNumberValue(rawValue, locale);
    }

    return {value: String(rawValue)};
}

function getParamArrayValue(rawValue, locale) {
    return {value: rawValue.join(', ')};
}

function getParamNumberValue(rawValue, locale) {
    return {value: (getNumberFormatter())(rawValue, locale)};
}

function getParamPluralValue(rawValue, variationText, locale) {
    const formattedValue = (getNumberFormatter())(rawValue, locale);

    const toVariantValue = (variant) => {
        const paramReplacements = [];

        let value = variant.replace(createVariantParamRegex(), (paramMatch, paramMatchIndex) => {
            paramReplacements.push({
                index: paramMatchIndex,
                oldLength: paramMatch.length,
                newLength: formattedValue.length
            });

            return formattedValue;
        });

        return {value, paramReplacements};
    };

    const regex = createVariationPluralRegex();

    let match;

    do {
        match = regex.exec(variationText);

        if (match === null) {
            break;
        }

        const [_, mixinBeforeVariant, operator, comparedValue, variant] = match;

        const variantIndex = match.index + mixinBeforeVariant.length;
        const variantLength = variant.length;

        if (comparedValue === undefined) {
            return {
                ...toVariantValue(variant),
                origin: {
                    index: variantIndex,
                    length: variantLength
                }
            };
        }

        const rawNumber = Number(rawValue);
        const comparedNumber = Number(comparedValue);

        let passed = (
            operator === '>' && rawNumber > comparedNumber
            || operator === '>=' && rawNumber >= comparedNumber
            || operator === '<' && rawNumber < comparedNumber
            || operator === '<=' && rawNumber <= comparedNumber
            || operator === '' && rawNumber === comparedNumber
        );

        if (passed) {
            return {
                ...toVariantValue(variant),
                origin: {
                    index: variantIndex,
                    length: variantLength
                }
            };
        }

    } while (true);

    return {value: formattedValue};
}

function forEscape(text, handleEscaped, handleNormal) {
    const regex = createEscapeRegex();

    // slice indexes separate text to interleaved normal and escaped subtext:
    // | normal | escaped | normal | escaped | normal |
    // start and end of string always is normal subtext
    // start subtext and end subtext can be empty
    // slice index is an even number -> normal subtext
    // slice index is an odd number  -> escaped subtext
    // initialize with the first slice index
    const sliceIndexes = [0];

    // Map: [slice index -> escaped subtext]
    const escapedMap = new Map();

    let match;

    do {
        match = regex.exec(text);

        // if no match
        // add the last slice index
        // finish here
        if (match === null) {
            sliceIndexes.push(text.length);
            break;
        }

        const [subtext, escapedSubtext] = match;

        sliceIndexes.push(match.index);
        sliceIndexes.push(match.index + subtext.length);

        escapedMap.set(match.index, escapedSubtext);

    } while (true);

    for (let i = 0; i < sliceIndexes.length - 1; i++) {
        const sliceIndex = sliceIndexes[i];
        const nextSliceIndex = sliceIndexes[i + 1];

        const subtext = text.substring(sliceIndex, nextSliceIndex);

        // slice index is an even number -> normal subtext
        if (i % 2 === 0) {
            handleNormal(subtext, sliceIndex);
            continue;
        }

        // escaped subtext
        const escapedSubtext = escapedMap.get(sliceIndex);
        handleEscaped(escapedSubtext, subtext, sliceIndex);
    }
}


export default translate;
