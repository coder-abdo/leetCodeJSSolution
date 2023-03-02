type SortColors = (nums: number[]) => void;

export const sortColors: SortColors = (nums) => {
  //nums = nums.sort((a, b) => a - b) // easy solution using built in sort function
  // let's build our sort function using swap technique
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  console.log(nums);
};
