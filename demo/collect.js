const {collector} = require('../../index');
const path = require('path');

collector.collect(
    path.resolve(__dirname, '../demo/resources'),
    path.resolve(__dirname, '../demo')
);
