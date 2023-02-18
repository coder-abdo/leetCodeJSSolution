export function singleNumber(nums: number[]):number {
	if(nums.length === 1){
		return nums[0];
	}
	let uniqueNums = {}
	for(let num of nums){
		if(uniqueNums[num]){
			uniqueNums[num]++;
		}else{
			uniqueNums[num] = 1;
		}
	}
	for(let key in uniqueNums){
		if(uniqueNums[key] === 1){
			return +key;
		}
	}
}
