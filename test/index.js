var assert = require('assert');
var gdt = require('../');

/** 
  Hack is used to test gdt. Memcond is attached as property to gdt function,
  allowing to override it. This in fact could be useful, but this is a hack.
**/

describe('gdt', function () {
  it('test1, one iteration', function (done) {
    var seq1;
    var seq2;
    var equiv;
    var cutoff;

    var memcontcnt;

    var res;

    memcontcnt = 1;

    gdt.memcond = function () {
      if (memcontcnt++ === 1) {
        return true;
      } else {
        return false;
      }
    }

    seq1 = [
      [1, 1.5, 11.1],
      [1.1, 1.4, 11],
      [1.3, 1.3, 12],
      [1.3, 1.3, 13]
    ];

    seq2 = [
      [1, 1.4, 11.3],
      [1.2, 2, 10],
      [1.3, 3, 12],
      [1.3, 3.1, .2]
    ];

    equiv = {
      tgt: [1, 2],
      exp: [0, 2]
    };

    cutoff = 2;

    res = gdt(seq1, seq2, equiv, cutoff);

    assert.deepEqual(res, {
      num: 2,
      perc: 0.5,
      rmsdloc: 0.7141392917053792, 
      rmsdall: 4.6437323241003945
    });

    done();
  });

  it('test2, one iteration', function (done) {
    var seq1;
    var seq2;
    var equiv;
    var cutoff;

    var memcontcnt;

    var res;

    memcontcnt = 1;

    gdt.memcond = function () {
      if (memcontcnt++ === 1) {
        return true;
      } else {
        return false;
      }
    }

    seq1 = [
      [1, 1.5, 11.1],
      [1.1, 1.4, 11],
      [1.3, 1.3, 12],
      [1.3, 1.3, 13]
    ];

    seq2 = [
      [1, 1.4, 11.3],
      [1.2, 2, 10],
      [1.3, 3, 12],
      [1.3, 3.1, .2]
    ];

    equiv = {
      tgt: [1, 2],
      exp: [0, 2]
    };

    cutoff = 4;

    res = gdt(seq1, seq2, equiv, cutoff);

    assert.deepEqual(res, {
      num: 3,
      perc: 0.75,
      rmsdloc: 1.0624523743564513, 
      rmsdall: 4.6437323241003945
    });

    done();
  });

  /** When gdt is unable to find better alignment, for some reason **/
  it('test3, one iteration', function (done) {
    var seq1;
    var seq2;
    var equiv;
    var cutoff;

    var memcontcnt;

    var res;

    memcontcnt = 1;

    gdt.memcond = function () {
      if (memcontcnt++ === 1) {
        return true;
      } else {
        return false;
      }
    }

    seq1 = [
      [1, 1.5, 11.1],
      [1.1, 1.4, 11],
      [1.3, 1.3, 12],
      [1.3, 1.3, 13]
    ];

    seq2 = [
      [1, 1.4, 11.3],
      [1.2, 2, 10],
      [1.3, 3, 12],
      [1.3, 3.1, .2]
    ];

    equiv = {
      tgt: [1, 2],
      exp: [0, 2]
    };

    cutoff = .1;

    res = gdt(seq1, seq2, equiv, cutoff);

    assert.deepEqual(res, {
      num: 2,
      perc: 0.5,
      rmsdloc: 0.9989521361265651, 
      rmsdall: 4.6437323241003945
    });
    
    done();
  });

  it('test4, one iteration', function (done) {
    var seq1;
    var seq2;
    var equiv;
    var cutoff;

    var memcontcnt;

    var res;

    memcontcnt = 1;

    gdt.memcond = function () {
      if (memcontcnt++ === 1) {
        return true;
      } else {
        return false;
      }
    }

    seq1 = [
      [1, 1.5, 11.1],
      [1.1, 1.4, 11],
      [1.3, 1.3, 12],
      [1.3, 1.3, 13]
    ];

    seq2 = [
      [1, 1.4, 11.3],
      [1.2, 2, 10],
      [1.3, 3, 12],
      [1.3, 3.1, .2]
    ];

    equiv = {
      tgt: [1, 2],
      exp: [0, 2]
    };

    cutoff = 1;

    res = gdt(seq1, seq2, equiv, cutoff);

    assert.deepEqual(res, {
      num: 2,
      perc: 0.5,
      rmsdloc: 0.9989521361265651, 
      rmsdall: 4.6437323241003945
    });
    
    done();
  });
});