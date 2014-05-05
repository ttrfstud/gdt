function copy(arr) {
  var copy;
  var i;

  copy = [];

  for (i = 0; i < arr.length; i++) {
    copy.push(arr[i]);
  }

  return copy;
}

module.exports = copy;