type ValidPalindrom = (s: string) => boolean;
type IsPalindrom = (s: string, left: number, right: number) => boolean;
const isPalindrom: IsPalindrom = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

export const validPalindrom2: ValidPalindrom = (s) => {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return isPalindrom(s, left + 1, right) || isPalindrom(s, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
};
