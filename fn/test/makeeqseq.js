var assert = require('assert');
var makeeqseq = require('../makeeqseq');

describe('makeeqseq', function () {
  it('test1', function (done) {
    var seq1;
    var seq2;
    var equiv;
    
    var res1;
    var res2;

            01234567;
    seq1 = 'АБВГДЕЖЗ';
    seq2 = 'ABCDEFGH';

    // equiv = [
    //   { i: 5, j: 6 },
    //   { i: 4, j: 5 },
    //   { i: 3, j: 5 },
    //   { i: 2, j: 4 },
    //   { i: 1, j: 3 }
    // ];

    equiv = {
      tgt: [5, 4, 2, 1],
      exp: [6, 5, 4, 3]
    }

    res1 = makeeqseq(seq1, equiv.tgt);
    res2 = makeeqseq(seq2, equiv.exp);

    assert.deepEqual(res1, ['Е', 'Д', 'В', 'Б']);
    assert.deepEqual(res2, ['G', 'F', 'E', 'D']);

    done();
  });

  it('test1', function (done) {
    var seq1;
    var seq2;
    var equiv;
    
    var res1;
    var res2;

            01234567;
    seq1 = 'АБВГДЕЖЗ';
    seq2 = 'ABCDEFGH';

    // equiv = [
    //   { i: 5, j: 6 },
    //   { i: 4, j: 5 },
    //   { i: 3, j: 5 },
    //   { i: 2, j: 4 },
    //   { i: 1, j: 3 }
    // ];

    equiv = {
      tgt: [3, 2, 0],
      exp: [7, 4, 2]
    }

    res1 = makeeqseq(seq1, equiv.tgt);
    res2 = makeeqseq(seq2, equiv.exp);

    assert.deepEqual(res1, ['Г', 'В', 'А']);
    assert.deepEqual(res2, ['H', 'E', 'C']);

    done();
  });
});