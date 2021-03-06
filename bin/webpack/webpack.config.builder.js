const path = require('path');

const rootDir = path.resolve(__dirname, '../../');
const srcDir = path.resolve(rootDir, 'src/');
const bundlesDir = path.resolve(rootDir, 'dist/');

function buildConfig(mode = 'development') {

    const useMinify = mode === 'production';

    const ext = useMinify ? 'min.js' : 'js';

    return {
        mode: mode,
        context: __dirname,
        entry: {
            'lib': path.resolve(srcDir, 'main/index.js')
        },
        output: {
            path: bundlesDir,
            library: 'i18nZone',
            filename: `[name].${ext}`,
            libraryTarget: 'commonjs2'
        },
        optimization: {
            minimize: useMinify,
        },
        node: {
            fs: 'empty'
        },
        target: 'node'
    };
}

module.exports = buildConfig;
