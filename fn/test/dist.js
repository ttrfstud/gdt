var assert = require('assert');
var dist = require('../dist');

describe('dist', function () {
  it('test1', function (done) {
    var point;

    point = [1, 2, 3];

    assert.equal(dist(point, point), 0);

    done();
  });

  it('test2', function (done) {
    var point1;
    var point2;

    point1 = [Math.sqrt(7), 0, Math.sqrt(2)];
    point2 = [0, 4, 0];

    assert.equal(dist(point1, point2), 5);

    done();
  });
});