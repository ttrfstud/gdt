var assert = require('assert');
var addequivlen = require('../addequivlen');

describe('addequivlen', function () {
  it('test1', function (done) {
    var equiv;

    equiv = {
      tgt: [1, 2, 3],
      exp: [1, 2, 4]
    };

    assert.deepEqual(addequivlen(equiv), {
      equiv: equiv,
      len: 3
    });

    done();
  });
});