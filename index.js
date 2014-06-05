/**
 * Author: chenboxiang
 * Date: 14-6-5
 * Time: 下午2:28
 */
'use strict';

var oriGm = require('gm');
var thinkify = require('thunkify-wrap');

var gmGetters = [
    'identify',
    'size',
    'format',
    'depth',
    'color',
    'res',
    'filesize',
    'orientation'
];

function gm(source, height, color) {
    var gmInstance = new oriGm(source, height, color);

    // gm getters
    thinkify(gmInstance, gmInstance, gmGetters);

    // gm write
    thinkify(gmInstance, gmInstance, ['write']);

    return gmInstance;
}

module.exports = gm;