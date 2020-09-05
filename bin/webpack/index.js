const webpack = require('webpack');
const args = process.argv.slice(2);
const buildConfig = require('./webpack.config.builder');
const commandOpt = args[0];

if (commandOpt === '--watch') {
    console.log('webpack --watch start');

    webpack(buildConfig('development')).watch({}, (err, stats) => {
        console.log(`[${getTimestamp()}] webpack is watching...`);
        logResult(err, stats);
    });

    return;
}

if (commandOpt === '--min') {
    console.log('webpack --min start');

    webpack(buildConfig('production')).run((err, stats) => {
        logResult(err, stats);
        console.log('webpack --min done');
    });

    return;
}

{
    console.log('webpack start');

    webpack(buildConfig('development')).run((err, stats) => {
        logResult(err, stats);
        console.log('webpack done');
    });
}

function logResult(err, stats) {
    if (err) {
        console.error(err);
        return;
    }

    if (stats.compilation.errors.length > 0) {
        console.error(stats.compilation.errors);
        return;
    }

    // show output file paths
    let i = 0;
    for (let assetName in stats.compilation.assets) {
        if (!stats.compilation.assets.hasOwnProperty(assetName)) {
            continue;
        }
        console.log((i === 0 ? '---> ' : '     ') + stats.compilation.assets[assetName].existsAt);
        i++;
    }
}

function getTimestamp() {
    const now = new Date();
    const pad = t => t < 10 ? `0${t}` : `${t}`;
    return `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`
}
