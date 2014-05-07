var assert = require('assert');
var transformequiv = require('../transformequiv');

describe('transformequiv', function () {
  it('test1, no indels', function (done) {
    var equiv;

    equiv = [
      {i: 4, j: 4},
      {i: 3, j: 3},
      {i: 2, j: 2},
      {i: 1, j: 1}
    ];

    assert.deepEqual(transformequiv(equiv), {
      equiv: {
        tgt: [1, 2, 3, 4],
        exp: [1, 2, 3, 4]
      },
      len: 4
    });

    done();
  });

  it('test2, one equivalence', function (done) {
    var equiv;

    equiv = [
      {i: 5, j: 5},
      {i: 5, j: 4},
      {i: 5, j: 3},
      {i: 5, j: 2}
    ];    

    assert.deepEqual(transformequiv(equiv), {
      equiv: {
        tgt: [2],
        exp: [5]
      },
      len: 1
    });

    done();
  });

  it('test3, sporadical equivalence', function (done) {
    var equiv;

    equiv = [
      {i: 5, j: 5},
      {i: 4, j: 5},
      {i: 3, j: 5},
      {i: 2, j: 4},
      {i: 2, j: 3},
      {i: 2, j: 2}
    ];

    assert.deepEqual(transformequiv(equiv), {
      equiv: {
        tgt: [2, 5],
        exp: [2, 3]
      },
      len: 2
    });

    done();
  });
});