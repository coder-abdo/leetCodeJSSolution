type MinNumOfSwaps = (s: string) => number;

export const minSwaps: MinNumOfSwaps = (s) => {
  let count = 0;
  let open = 0;
  for (const char of s) {
    if (char === "]") {
      if (open > 0) {
        open--;
      } else {
        count++;
        open++;
      }
    } else {
      open++;
    }
  }
  return count;
};
