import {getResources} from "./settings";
import {
    createVariableStyleIdRegex,
    createMessageParamRegex,
} from './regex';

const options = {
    idShouldBeTrimmed: true, // boolean
    messageShouldBeTrimmed: true, // boolean
    idMaxLength: 100, // number | null
    singleWordMessageMaxLength: 20, // number | null
    idShouldReflectParams: true, // boolean
};

function logOptionNotExisted(name) {
    console.error(`(i18n/validator) option not existed: ${name}`);
}

function setOption(name, value) {
    if (options.hasOwnProperty(name)) {
        options[name] = value;
    } else {
        logOptionNotExisted(name);
    }
}

function setOptions(newOptions) {
    for (let name in newOptions) {
        if (newOptions.hasOwnProperty(name)) {
            if (options.hasOwnProperty(name)) {
                options[name] = newOptions[name];
            } else {
                logOptionNotExisted(name);
            }
        }
    }
}

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

    if (options.idShouldBeTrimmed) {
        validate_idShouldBeTrimmed(errors, id);
    }

    if (options.messageShouldBeTrimmed) {
        validate_messageShouldBeTrimmed(errors, msg);
    }

    if (options.idMaxLength !== null) {
        validate_idMaxLength(errors, id, options.idMaxLength);
    }

    if (options.singleWordMessageMaxLength !== null) {
        validate_singleWordMessageMaxLength(errors, msg, options.singleWordMessageMaxLength);
    }

    if (options.idShouldReflectParams) {
        validate_idShouldReflectParams(errors, id, msg);
    }

    return errors;
}

function validate_idShouldBeTrimmed(errors, id) {
    if (id.trim() !== id) {
        errors.push(`IDs should not start or end with whitespaces`);
    }
}

function validate_messageShouldBeTrimmed(errors, msg) {
    if (msg.trim() !== msg) {
        errors.push(`Messages should not start or end with whitespaces`);
    }
}

function validate_idMaxLength(errors, id, idMaxLength) {
    if (id.length > idMaxLength) {
        if (isVariableStyle(id)) {
            errors.push(`ID too long: ${id.length}. Expected <= ${idMaxLength}`);
        } else {
            errors.push(`ID too long: ${id.length}. Expected <= ${idMaxLength}. Please consider to use variable-style ID`);
        }
    }
}

function validate_singleWordMessageMaxLength(errors, msg, singleWordMessageMaxLength) {
    if (msg.length <= singleWordMessageMaxLength) {
        return;
    }

    if (/\s/.test(msg)) {
        return;
    }

    const msgParams = getParamNamesFromMessage(msg);

    if (msgParams.length > 0) {
        return;
    }

    errors.push(`A message should be a human-readable sentence/text which includes words instead of being a "long word" without any whitespace. Max length of a single-word message: ${singleWordMessageMaxLength}`);
}

function validate_idShouldReflectParams(errors, id, msg) {
    const idIsVariableStyle = isVariableStyle(id);
    const msgParams = getParamNamesFromMessage(msg);
    const idParams = idIsVariableStyle ? getParamNamesFromVariableStyleId(id) : getParamNamesFromMessage(id);

    if (msgParams.length === idParams.length) {
        for (let i = 0; i < idParams.length; i++) {
            if (idParams[i] !== msgParams[i]) {
                errors.push(`The param at ${i} of ID and message is not the same: ${idParams[i]} vs ${msgParams[i]}`);
            }
        }
        return;
    }

    if (idIsVariableStyle && idParams.length === 0) {
        errors.push(`Variable-style IDs need to end with a list of params which are the same used in the message if any. Syntax: an_awesome_id{meaningParam,numOfDays}. Note that whitespaces are not accepted`);
    } else {
        errors.push(`ID params length: ${idParams.length} is not equal to message params length: ${msgParams.length}`);
    }
}

function isVariableStyle(id) {
    return createVariableStyleIdRegex().test(id);
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

    return paramNames.split(',');
}

export {
    validateResources,
    setOption,
    setOptions
}
