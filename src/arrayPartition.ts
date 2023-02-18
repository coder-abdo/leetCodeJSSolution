export const arrayPairSum = (nums: number[]):number =>{
		nums = nums.sort((a, b) => a - b);
		let sumOfParts = 0;
		for(let i = 0;i < nums.length;i+=2){
			sumOfParts += nums[i]
		}
		return sumOfParts;
	}
