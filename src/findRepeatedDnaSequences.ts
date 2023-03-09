type FindRepeatedDNA = (s: string) => string[];
export const findRepeatedDnaSequences: FindRepeatedDNA = (s) => {
  const hashMap = new Map();
  const result = [];
  for (let i = 0; i <= s.length - 10; i++) {
    const sliceDNA = s.substring(i, i + 10);
    if (hashMap.has(sliceDNA)) {
      if (hashMap.get(sliceDNA) === 1) {
        result.push(sliceDNA);
      }
      hashMap.set(sliceDNA, hashMap.get(sliceDNA) + 1);
    } else {
      hashMap.set(sliceDNA, 1);
    }
  }
  return result;
};
