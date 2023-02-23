type FindAllNumbers = (nums: number[]) => number[];

export const findAllNumbers: FindAllNumbers = (nums) => {
  // const comparedArr = Array.from({ length: nums.length }).map((_, i) => i + 1);
  // return comparedArr.filter((num) => !nums.includes(num));
  return Array.from({ length: nums.length })
    .map((_, i) => i + 1)
    .filter((num) => !nums.includes(num));
};
