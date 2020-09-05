const {run} = require('jest');
const path = require('path');

run([`--config=${path.resolve(__dirname, './jest.config.js')}`]);
