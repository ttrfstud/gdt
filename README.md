global distance test algorithm
=====================================
an attempt to code gdt algorithm based on what is said [here](http://predictioncenter.org/casp/casp7/public/doc/LCS_GDT.README), [here](http://peds.oxfordjournals.org/content/9/12/1093.full.pdf) and [here](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC168977/pdf/gkg571.pdf). this module exports the only function with signature _(seq1, seq2, equiv, cutoff)_, where:
 
 * seq1 is the first section, which is array of 3d points.
 
 * seq2 is the second section, which is array of 3d points.
 
 * equiv is list of corresponding "equivalent" atoms from the first section and second section. what is meant by "equivalence" in this list is outside of gdt scope. equiv is initial list of equivalences for gdt procedure. it has the following format

```javascript
{
  tgt: [],
  exp: []
}
```

  where _tgt_ is array of indices of points from seq2, and _exp_ is array of indices of corresponding points from seq1.

 * cutoff is cutoff distance.

please check your arguments before invoking it!