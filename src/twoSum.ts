type TwoSum = (nums: number[], target: number) => [number, number] | any[]

export const twoSum: TwoSum = (nums, target) => {
	let maxNum = Math.max(...nums)
	let indecies = []
	if (maxNum >= target) {
		nums.splice(1, maxNum)
	}
	for(let i = 0;i < nums.length - 1;i++){
		for(let j =  i + 1; j < nums.length;j++){
			if(nums[i] + nums[j] === target){
				indecies.push(i,j);
			}
		}
	}	
	return indecies;
}
