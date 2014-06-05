/**
 * Author: chenboxiang
 * Date: 14-6-5
 * Time: 下午3:18
 */
'use strict';

var gm = require('../index');
var path = require('path');
var expect = require('expect.js');
var fs = require('fs');

var pending = function(n, fn) {
    return function(err) {
        if (err) return fn(err);
        --n || fn();
    }
};

describe('gm getters', function() {
    it('getters should not throw error', function(done) {
        var getters = [
            'identify',
            'size',
            'format',
            'depth',
            'color',
            'res',
            'filesize',
            'orientation'
        ];
        done = pending(getters.length, done);
        getters.forEach(function(getter) {
            gm(path.join(__dirname, 'test.gif'))[getter]()(function(err) {
                expect(err).not.to.be.an(Error);
                done();
            })
        })
    })
})

describe('gm.write(file)', function() {
    it('write should generate a new file', function(done) {
        gm(path.join(__dirname, 'test.gif'))
            .resize(50, 50)
            .noProfile()
            .write(path.join(__dirname, 'test_gen.gif'))
            (
                function(err) {
                    expect(err).not.to.be.an(Error);
                    expect(fs.existsSync(path.join(__dirname, 'test_gen.gif'))).to.be(true);
                    done();
                }
            )
    })
})