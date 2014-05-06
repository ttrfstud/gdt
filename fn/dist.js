function dist (point1, point2) {
  var dx;
  var dy;
  var dz;

  var dist;

  dx = point1[0] - point2[0];
  dx = dx * dx;

  dy = point1[1] - point2[1];
  dy = dy * dy;

  dz = point1[2] - point2[2];
  dz = dz * dz;

  dist = Math.sqrt(dx + dy + dz);

  return dist;
}

module.exports = dist;