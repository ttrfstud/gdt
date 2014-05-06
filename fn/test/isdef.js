var assert = require('assert');
var isdef = require('../isdef');

describe('isdef', function () {
  it('test1, true', function (done) {
    assert(isdef(''));
    assert(isdef(null));
    assert(isdef(0));
    assert(isdef(1));
    assert(isdef('abc'));
    assert(isdef({}));
    assert(isdef(NaN));
    assert(isdef(false));
    assert(isdef(true));
    assert(isdef({}));
    assert(isdef({ prop: 'val' }));
    assert(isdef([]));
    assert(isdef([ 1, 2, 3 ]));

    done();
  });
  
  it('test2, false', function (done) {
    assert.equal(isdef(void 0), false);

    done();
  });
});