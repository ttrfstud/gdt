var MEMLEN = 8;

function memcond(memory) {
  var len;
  var cell, nextcell;
  var i;

  var eqflag;

  eqflag = true;
  len = memory.length;

  if (len < MEMLEN) {
    return true;
  }

  for (i = 0; i < len - 1; i++) {
    cell = memory[i];
    nextcell = memory[i + 1];

    if (cell.len > nextcell.len) {
      return false;
    }

    if (cell.len !== nextcell.len) {
      eqflag = false;
    }
  }

  if (eqflag) {
    return false;
  } else {
    return true;
  }
}

module.exports = memcond;