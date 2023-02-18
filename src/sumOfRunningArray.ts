export const runningSum = (nums: number[]): number[] => {
	let sum = [], count = 0;
	nums.forEach(num =>{
		count += num;
		sum.push(count)
	})
	return sum;
}
