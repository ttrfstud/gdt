var assert = require('assert');
var gss = require('../gss');

describe('gss', function () {
  it('test1', function (done) {
    var k;

    k = 3;

    assert.equal(gss(k), -2);  

    done();
  });

  it('test2', function (done) {
    var k;

    k = -3;

    assert.equal(gss(k), 0);

    done();
  });
});
