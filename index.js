function gdt(seq1, seq2, equiv, cutoff) {
	var memory;
	var icount;

	var rotres;

	var gtdres;
	var simfunc;
	var gss;

	simfunc = makesimfunc(cutoff);

	icount = 0;
	memory = [];

	while(memcond(memory)) {
		rotres = superpose(seq1, seq2, equiv);
		seq1 = rotres.seq1;
		seq2 = rotres.seq2;

		equiv = recalcequiv(seq1, seq2, simfunc, gss);
		memory = memupd(memory, equiv);
	}

	equiv = memfetch(memory);
	gtdres = calcgtd(seq1, seq2, equiv);

	return gtdres;
}

module.exports = gdt;