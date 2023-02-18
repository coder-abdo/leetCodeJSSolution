export const generateRowsOfPascal = (rows: number):number[][] =>{
	let pascalRows = []
	for(let i = 0;i < rows;i++){
		pascalRows.push(Array(i+1))
	}
	for(let i =0;i < pascalRows.length;i++){
		for(let j = 0; j<= i;j++){
			if(j === 0 || j === i){
				pascalRows[i][j] = 1;
			}else{
				pascalRows[i][j] = pascalRows[i - 1][j-1] + pascalRows[i - 1][j]
			}
		}
	}

	return pascalRows;
}
