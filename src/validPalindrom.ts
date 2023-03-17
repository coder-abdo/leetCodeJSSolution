type ValidPalindrom = (s: string) => boolean;
export const validPalindrom: ValidPalindrom = (s) => {
  const regex = /[a-z0-9]/g;
  s = s.toLowerCase().match(regex).join("");
  let left = 0,
    right = s.length - 1;
  while (left <= right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
