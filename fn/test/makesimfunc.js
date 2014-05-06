var assert = require('assert');
var makesimfunc = require('../makesimfunc');


describe('makesimfunc', function () {
  it('test1, cutoff is 0.11', function (done) {
    var point1;
    var point2;
    var point3;

    var cutoff;

    var simfunc;

    cutoff = 0.11;

    simfunc = makesimfunc(cutoff);

    point1 = [1, 2, 3];
    point2 = [1, 2, 3.1];
    point3 = [1, 2, 3.212];

    console.log('p1, p2');
    assert.equal(simfunc(point1, point2), 1);
    console.log('p2, p3');
    assert.equal(simfunc(point2, point3), -1/3);
    console.log('p1, p3');
    assert.equal(simfunc(point1, point3), -1/3);

    done();
  });

  it('test2, cloud', function (done) {
    var point1;
    var point2;
    var point3;

    var cutoff;

    var simfunc;

    cutoff = 0.91;

    simfunc = makesimfunc(cutoff);

    point1 = [1, 2, 3];
    point2 = [1, 2.01, 3.09];
    point3 = [1.004, 2, 2.997];

    console.log('p1, p2');
    assert.equal(simfunc(point1, point2), 1);
    console.log('p2, p3');
    assert.equal(simfunc(point2, point3), 1);
    console.log('p1, p3');
    assert.equal(simfunc(point1, point3), 1);

    done();
  });

  it('test3, all distant', function (done) {
    var point1;
    var point2;
    var point3;

    var cutoff;

    var simfunc;

    cutoff = 0.91;

    simfunc = makesimfunc(cutoff);

    point1 = [1, 1, 3];
    point2 = [1, 2.1, 3.19];
    point3 = [1.014, 2, 2.0];

    console.log('p1, p2');
    assert.equal(simfunc(point1, point2), -1/3);
    console.log('p2, p3');
    assert.equal(simfunc(point2, point3), -1/3);
    console.log('p1, p3');
    assert.equal(simfunc(point1, point3), -1/3);

    done();
  });
});