import {getResources} from "./settings";
import {
    createVariableStyleIdRegex,
    createMessageParamRegex,
} from './regex';

/**
 *
 * @return {{}|null}
 */
function validateResources() {
    const resources = getResources();

    const allErrors = {};

    for (let locale in resources) {
        if (resources.hasOwnProperty(locale)) {
            const resourceErrors = {};
            for (let id in resources[locale]) {
                if (resources[locale].hasOwnProperty(id)) {
                    const errors = validateIdAndMessage(id, resources[locale][id]);
                    if (errors.length > 0) {
                        resourceErrors[id] = errors;
                    }
                }
            }
            if (Object.keys(resourceErrors).length > 0) {
                allErrors[locale] = resourceErrors;
            }
        }
    }

    if (Object.keys(allErrors).length > 0) {
        return allErrors;
    }

    return null;
}

/**
 *
 * @param {string} id
 * @param {string} msg
 * @return {[]}
 */
function validateIdAndMessage(id, msg) {
    const errors = [];

    const isVariableStyleId = createVariableStyleIdRegex().test(id);

    // validate start and end white space

    if (id.trim() !== id) {
        errors.push(`ID should not start or end with white-space`);
    }

    if (msg.trim() !== msg) {
        errors.push(`Message should not start or end with white-space`);
    }


    // validate id max length

    const maxValidIdLength = 99;
    if (id.length > maxValidIdLength) {
        if (isVariableStyleId) {
            errors.push(`ID too long: ${id.length}. Expected <= ${maxValidIdLength}`);
        } else {
            errors.push(`ID too long: ${id.length}. Expected <= ${maxValidIdLength}. Please consider to use variable-style ID`);
        }
    }


    const msgParams = getParamNamesFromMessage(msg);


    // validate message white-spacing

    const maxSingleWordLength = 19;
    if (msg.length > maxSingleWordLength && msgParams.length === 0 && !/\s/.test(msg)) {
        errors.push(`Message should be a human-readable sentence/text which includes words instead of a "long word" without separating by white-space. Max length of a single-word message: ${maxSingleWordLength}`);
    }


    // validate params
    const idParams = isVariableStyleId ? getParamNamesFromVariableStyleId(id) : getParamNamesFromMessage(id);

    if (msgParams.length === idParams.length) {
        for (let i = 0; i < idParams.length; i++) {
            if (idParams[i] !== msgParams[i]) {
                errors.push(`Param at ${i} of ID and message is not the same: ${idParams[i]} vs ${msgParams[i]}`);
            }
        }
    } else {
        if (isVariableStyleId && idParams.length === 0) {
            errors.push(`Variable-style IDs need to end with a list of params which are the same used in the message if any. Syntax: an_awesome_id{meaningParam,greatParamAbc,numOfItems}. Note that white-spaces are not accepted`);
        } else {
            errors.push(`ID params length: ${idParams.length} is not equal to message params length: ${msgParams.length}`);
        }
    }

    return errors;
}

function getParamNamesFromMessage(message) {
    const paramNames = [];

    const regex = createMessageParamRegex();

    do {
        const match = regex.exec(message);

        if (match === null) {
            break;
        }

        const [fullMatch, notation, paramName] = match;

        paramNames.push(paramName);

    } while (true);

    return paramNames;
}

function getParamNamesFromVariableStyleId(id) {
    const matches = id.match(createVariableStyleIdRegex());

    const paramNames = matches[1];

    if (paramNames === undefined) {
        return [];
    }

    return matches[1].split(',');
}

export {
    validateResources
}
