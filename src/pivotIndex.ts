type PivotIndex = (nums: number[]) => number;
export const pivotIndex: PivotIndex = (nums) => {
  let left = 0;
  while (left < nums.length) {
    const sumOfLeft = nums.slice(0, left).reduce((acc, next) => acc + next, 0);
    const sumOfRight = nums
      .slice(left + 1)
      .reduce((acc, next) => acc + next, 0);
    if (sumOfLeft === sumOfRight) {
      return left;
    }
    left++;
  }
  return -1;
};
