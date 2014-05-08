var makesimfunc = require('./fn/makesimfunc');
var memcond = require('./fn/memcond');
var superpose = require('./fn/superpose');
var recalcequiv = require('./fn/recalcequiv');
var memupd = require('./fn/memupd');
var memfetch = require('./fn/memfetch');
var calcgdt = require('./fn/calcgdt');
var getrot = require('./fn/getrot');
var addequivlen = require('./fn/addequivlen');
var gss = require('./fn/gss');

var sw = require('smith-waterman');
var kabsch = require('kabsch');

function gdt(seq1, seq2, equiv, cutoff) {
	var memory;
	var rotres;

	var simfunc;

	var gtdres;

	simfunc = makesimfunc(cutoff);

	memory = [];
	memory.push( equiv = addequivlen(equiv) );

	while(module.exports.memcond(memory)) {
		rotres = superpose(seq1, seq2, equiv, getrot);
		seq1 = rotres.seq1;
		seq2 = rotres.seq2;

		equiv = recalcequiv(seq1, seq2, sw, simfunc, gss);
		memory = memupd(memory, equiv);
	}

	equiv = memfetch(memory);
	gtdres = calcgdt(seq1, seq2, equiv, kabsch);

	return gtdres;
}

module.exports = gdt;

module.exports.memcond = memcond;