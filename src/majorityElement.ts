type MajorityElement = (nums: number[]) => number;

export const majorityElement: MajorityElement = (nums) => {
  const hashMap = new Map<string, number>();
  nums.forEach((num) => {
    if (hashMap[num]) {
      hashMap[num]++;
    } else {
      hashMap[num] = 1;
    }
  });
  return +Object.entries(hashMap).sort((a, b) => b[1] - a[1])[0][0];
};
