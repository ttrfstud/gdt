var MEMLEN = require('../obj/memlen');

function memupd(memory, equiv) {
  var len;
  var i;
  var cmemory;

  len = memory.length;

  cmemory = copy(memory);

  if (len >= MEMLEN) {
    cmemory.shift();
  }

  cmemory.push({
    len: lenequiv(equiv),
    equiv: equiv
  });

  return cmemory;
}

module.exports = memupd;