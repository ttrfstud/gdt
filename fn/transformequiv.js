var isdef = require('./isdef');

/** 
  [
    {i: 3, j: 3},
    {i: 2, j: 3},
    {i: 2, j: 2},
    {i: 1, j: 1}
  ] ->

  {
    tgt: [3, 2, 1],
    exp: [3, 2, 1]
  } ->

  {
    tgt: [1, 2, 3],
    exp: [1, 2, 3]
  }

  or

  [
    {i: 5, j: 5},
    {i: 4, j: 5},
    {i: 3, j: 5},
    {i: 3, j: 5}
  ] ->

  {
    tgt: [5],
    exp: [3]
  }

  or

  [
    {i: 5, j: 5},
    {i: 4, j: 5},
    {i: 3, j: 4},
    {i: 2, j: 4},
    {i: 1, j: 3}
  ] ->

  {
    exp: [4, 2, 1],
    tgt: [5, 4, 3]
  } ->

  {
    exp: [1, 2, 4],
    tgt: [3, 4, 5]
  }
**/

function transformequiv(equiv) {
  var len;
  var i;
  var teqiuiv;
  var curtgt, curexp;

  var res;
  var rlen;

  len = equiv.length;
  rlen = 0;

  if (len) {
    curtgt = equiv[len - 1].j;
    curexp = equiv[len - 1].i;
  }

  tequiv = {
    tgt: [],
    exp: []
  };

  if (isdef(curtgt) && isdef(curexp)) {
    tequiv.tgt.unshift(curtgt);
    tequiv.exp.unshift(curexp);
    rlen++;
  }

  for (i = len - 2; i >= 0; i--) {
    if (curtgt !== equiv[i].j &&
      curexp !== equiv[i].i) {
      curtgt = equiv[i].j;
      curexp = equiv[i].i;
      tequiv.tgt.unshift(curtgt);
      tequiv.exp.unshift(curexp);
      rlen++;
    }
  }

  tequiv.tgt = tequiv.tgt.reverse();
  tequiv.exp = tequiv.exp.reverse();

  res = {
    equiv: tequiv,
    len: rlen++
  };

  return res;
}

module.exports = transformequiv;