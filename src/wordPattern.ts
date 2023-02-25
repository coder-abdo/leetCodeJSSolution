type WordPattern = (pattern: string, s: string) => boolean;

export const wordPattern: WordPattern = (pattern, s) => {
  const words = s.split(" ");
  if (words.length !== pattern.length) {
    return false;
  }
  const records = pattern.split("").reduce((acc, el, i) => {
    if (Object.values(acc).includes(words[i])) {
      return acc;
    }
    return {
      ...acc,
      [el]: words[i],
    };
  }, {});
  return pattern.split("").every((char, i) => records[char] === words[i]);
  //   const patternRecords = {};
  //   const wordsPatternRecord = {};
  //   for (let i = 0; i < words.length; i++) {
  //     if (patternRecords[pattern[i]]) {
  //       continue;
  //     } else {
  //       patternRecords[pattern[i]] = words[i];
  //     }
  //   }
  //   for (let i = 0; i < pattern.length; i++) {
  //     if (Object.keys(wordsPatternRecord).includes(words[i])) {
  //       continue;
  //     } else {
  //       wordsPatternRecord[words[i]] = pattern[i];
  //     }
  //   }
  //   let wordsOfPattern = "";
  //   let recordOfWords = "";
  //   for (const char of pattern) {
  //     wordsOfPattern += patternRecords[char];
  //   }
  //   for (const word of words) {
  //     recordOfWords += wordsPatternRecord[word];
  //   }
  //   return pattern === recordOfWords && wordsOfPattern === words.join("");
};
