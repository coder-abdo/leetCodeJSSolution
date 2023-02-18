export const isSupsqeunce = (s: string, t: string): boolean => {
  if (t.length < s.length) {
    return false;
  }
  let countedLenght = 0;
  [...t].forEach((char) => {
    if (s[countedLenght] === char) {
      countedLenght++;
    }
  });
  return s.length === countedLenght;
};
