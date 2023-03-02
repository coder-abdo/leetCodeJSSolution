type LongConsecutive = (nums: number[]) => number;
export const longestConsecutive: LongConsecutive = (nums) => {
  if (nums.length <= 1) {
    return nums.length;
  }
  const hashSet = new Set(nums);
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (!hashSet.has(num - 1)) {
      let len = 1;
      while (hashSet.has(num + len)) {
        len++;
        count = Math.max(count, len);
      }
    }
  }
  return count;
};
