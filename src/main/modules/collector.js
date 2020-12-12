const fs = require('fs');
const path = require('path');


function collect(jsonSrc, rootDir, options) {
    const foundMessages = forEachFile(rootDir, options);

    const jsonFiles = ('string' === typeof jsonSrc ? fs.readdirSync(jsonSrc).map(file => path.resolve(jsonSrc, file)) : jsonSrc)
        .filter(f => f.endsWith('.json') && !f.endsWith('.trash.json'));

    jsonFiles.forEach(jsonFile => {
        const existingMessages = JSON.parse(fs.readFileSync(jsonFile));
        const currentMessages = {};
        const deletedMessages = {};

        for (let messageId in existingMessages) {
            if (existingMessages.hasOwnProperty(messageId)) {
                if (foundMessages.hasOwnProperty(messageId)) {
                    currentMessages[messageId] = existingMessages[messageId];
                } else {
                    deletedMessages[messageId] = existingMessages[messageId];
                }
            }
        }

        for (let messageId in foundMessages) {
            if (foundMessages.hasOwnProperty(messageId)) {
                if (!existingMessages.hasOwnProperty(messageId)) {
                    currentMessages[messageId] = messageId;
                }
            }
        }

        const currentFile = jsonFile;
        const deletedFile = jsonFile.slice(0, -5) + '.trash.json';

        fs.writeFileSync(currentFile, JSON.stringify(currentMessages, null, 2) + '\n');
        console.log(`---> ${currentFile}`);

        fs.writeFileSync(deletedFile, JSON.stringify(deletedMessages, null, 2) + '\n');
        console.log(`     ${deletedFile}`);
    });
}


function forEachFile(rootDir, options = {}) {
    const {
        allowsDir,
        allowsFile,
        fnNames
    } = options;

    const files = walk(rootDir, allowsDir, allowsFile);

    const foundMessages = {};

    files.forEach(file => {
        const fileContent = fs.readFileSync(file, 'utf8');

        const regex = createMessageRegex(fnNames);

        let match;

        do {
            match = regex.exec(fileContent);

            if (match === null) {
                break;
            }

            const [ , , message, message2] = match;

            if (message !== undefined) {
                foundMessages[message] = message;
            } else {
                foundMessages[message2] = message2;
            }

        } while (true);
    });

    return foundMessages;
}


function createMessageRegex(fnNames = ['translate', '__']) {
    // TODO need to update .*

    return new RegExp(`(?:${fnNames.join('|')})\\(\\s*('(.*?)'|"(.*?)")(,\\s*{[^]*?})?\\s*(,[^]*?)?\\s*\\)`, 'g');
}


function walk(
    dir,
    allowsDir = dir => !dir.includes('node_modules'),
    allowsFile = file => file.endsWith('.js')
) {
    if (!allowsDir(dir)) {
        return [];
    }

    const results = [];

    fs.readdirSync(dir).forEach(function(filename) {
        const file = dir + '/' + filename;

        const stat = fs.statSync(file);

        if (stat && stat.isDirectory()) {
            results.push(...walk(file, allowsDir, allowsFile));
            return;
        }

        if (allowsFile(file)) {
            results.push(file);
        }
    });

    return results;
}


module.exports = {
    collect
};
