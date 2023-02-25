type IsIsomorphic = (s: string, t: string) => boolean;

export const isIsomorphic: IsIsomorphic = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const record = s.split("").reduce((acc, char, i) => {
    if (Object.values(acc).includes(t[i])) {
      return acc;
    }
    return {
      ...acc,
      [char]: t[i],
    };
  }, {});
  return s.split("").every((char, i) => record[char] === t[i]);
};
