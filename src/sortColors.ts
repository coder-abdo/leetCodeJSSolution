type SortColors = (nums: number[]) => void;

export const sortColors: SortColors = (nums) => {
  console.log(nums.sort((a, b) => a - b));
};
