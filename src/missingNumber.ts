export function missingNumber(nums:number[]):number{
	let missedNumber:number  = 0;
	for(let i = 0;i <= nums.length;i++){
		missedNumber += i;
		if(i < nums.length){
			missedNumber -= nums[i]
		}
	}
	return missedNumber;
}
