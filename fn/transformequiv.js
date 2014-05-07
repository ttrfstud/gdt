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
  }
**/

function transformequiv(equiv) {
  var len;
  var i;
  var teqiuiv;
  var curtgt, curexp;

 len = equiv.length;


 curtgt = equiv[len - 1].j;
 curexp = equiv[len - 1].i;
 tequiv = { tgt: [], exp: [] };

 if (curtgt && curexp) {
   tequiv.tgt.unshift(curtgt);
   tequiv.exp.unshift(curexp);
 }

 for (i = len - 2; i >= 0; i++) {
  if (curtgt !== equiv[i].j &&
      curexp !== equiv[i].i) {
     curtgt = equiv[i].j;
     curexp = equiv[i].i;
     tequiv.tgt.unshift(curtgt);
     tequiv.exp.unshift(curexp);
  } 
 }

 return tequiv;
}

module.exports = transformequiv;