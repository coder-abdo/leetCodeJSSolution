export const replaceElements = (listOfNums: number[]): number[] => {
  if (listOfNums.length <= 1) {
    return [-1];
  }
  const replacementElementsList = [];
  let count = 0;
  let max = 0;
  while (count < listOfNums.length - 1) {
    max = Math.max(...listOfNums.slice(count + 1));
    count++;
    replacementElementsList.push(max);
  }
  replacementElementsList.push(-1);
  return replacementElementsList;
};
