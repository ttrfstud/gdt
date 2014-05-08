var assert = require('assert');
var recalcequiv = require('../recalcequiv');

describe('recalcequiv', function () {
  it('test', function (done) {
    var sw;
    var res;

    var seq1;
    var seq2;

    var simfunc;
    var gss;

    var flag;

    seq1 = {};
    seq2 = {};
    simfunc = {};
    gss = {};

    sw = function (sq1, sq2, gs, sf) {
      assert.equal(seq1, sq1);
      assert.equal(seq2, sq2);
      
      assert.equal(gss, gs);
      assert.equal(simfunc, sf);

      flag = true;

      return [
        {i: 1, j: 2},
        {i: 2, j: 3},
        {i: 3, j: 4}
      ];
    };

    assert.deepEqual(recalcequiv(seq1, seq2, sw, simfunc, gss), {
      equiv: {
        tgt: [4, 3, 2],
        exp: [3, 2, 1]
      },
      len: 3
    });

    assert(flag);

    done();
  });
});