export const thirdMaxNum = (nums:number[]):number =>{
	nums = [...new Set(nums)];
	if(nums.length < 3){
		return Math.max(...nums);
	}
	nums = nums.sort((a,b) => b - a);
	return nums[2];
}
