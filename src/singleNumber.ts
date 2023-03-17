export function singleNumber(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  const uniqueNums = {};
  for (const num of nums) {
    if (uniqueNums[num]) {
      uniqueNums[num]++;
    } else {
      uniqueNums[num] = 1;
    }
  }
  for (const key in uniqueNums) {
    if (uniqueNums[key] === 1) {
      return +key;
    }
  }
}
