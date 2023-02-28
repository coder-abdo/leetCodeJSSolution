type GroupAnagrams = (strs: string[]) => string[][];

export const groupAnagrams: GroupAnagrams = (strs) => {
  // const record: Record<string, string[]> = {};
  // strs.forEach((str) => {
  //   const letters = str.split("").sort().join("");
  //   record[letters] ? record[letters].push(str) : (record[letters] = [str]);
  // });
  // const result = Object.values(record).map((value) => value);
  // return result;
  const record = new Map<string, string[]>();
  strs.forEach((word) => {
    const key = word.split("").sort().join("");
    record[key] ? record[key].push(word) : (record[key] = [word]);
  });
  const result = Object.values(record).map((row) => row);
  return result;
};
