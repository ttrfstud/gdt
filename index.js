var makesimfunc = require('./fn/makesimfunc');
var memcond = require('./fn/memcond');
var superpose = require('./fn/superpose');
var recalcequiv = require('./fn/recalcequiv');
var memupd = require('./fn/memupd');
var memfetch = require('./fn/memfetch');
var calcgtd = require('./fn/calcgtd');

function gdt(seq1, seq2, equiv, cutoff) {
	var memory;
	var rotres;

	var simfunc;

	var gtdres;

	simfunc = makesimfunc(cutoff);

	memory = [];
	memory.push(addequivlen(equiv));

	while(memcond(memory)) {
		rotres = superpose(seq1, seq2, equiv, getrot);
		seq1 = rotres.seq1;
		seq2 = rotres.seq2;

		equiv = recalcequiv(seq1, seq2, sw, simfunc, gss);
		memory = memupd(memory, equiv);
	}

	equiv = memfetch(memory);
	gtdres = calcgtd(seq1, seq2, equiv, kabsch);

	return gtdres;
}

module.exports = gdt;