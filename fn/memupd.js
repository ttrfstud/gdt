var MEMLEN = require('../obj/memlen');
var lenequiv = require('./lenequiv');
var copy = require('./copy');

function memupd(memory, equiv) {
  var len;
  var i;
  var cmemory;

  len = memory.length;

  cmemory = copy(memory);

  if (len >= MEMLEN) {
    cmemory.shift();
  }

  cmemory.push(equiv);

  return cmemory;
}

module.exports = memupd;