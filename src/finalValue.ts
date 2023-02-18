export function finalValue(operations: string[]):number{
		let x = 0;
		operations.forEach(operation =>{
			if(operation === '++X' || operation === "X++"){
				x++;
			}else if(operation === "--X" || operation === "X--"){
				x--;
			}
		})
	return x;
}
