type SubArraySum = (nums: number[], k: number) => number;

export const subArraySum: SubArraySum = (nums, k) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];
    if (element === k) {
      sum++;
    }
    for (let j = i + 1; j < nums.length; j++) {
      const inner = nums[j];
      element += inner;
      if (element === k) {
        sum++;
      }
    }
  }
  return sum;
};
