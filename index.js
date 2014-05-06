function gdt(seq1, seq2, equiv, cutoff) {
	var memory;
	var rotres;

	var simfunc;

	var gtdres;

	simfunc = makesimfunc(cutoff);

	memory = [];
	memory.push(equiv);

	while(memcond(memory)) {
		rotres = superpose(seq1, seq2, equiv);
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