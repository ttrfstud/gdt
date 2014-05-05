function memfetch(memory) {
  var i;
  var len;
  var max;

  max = { len: 0 };

  len = memory.length;

  for (i = 0; i < len; i++) {
    if (max.len <= memory[i].len) {
      max = memory[i];
    }
  }

  return max;
}

module.exports = memfetch;