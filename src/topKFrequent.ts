type TopKFrequent = (nums: number[], k: number) => number[];
export const topKFrequent: TopKFrequent = (nums, k) => {
  const record: Record<string, number> = nums.reduce((acc, next) => {
    let count = 1;
    if (Object.keys(acc).includes(next.toString())) {
      return {
        ...acc,
        [next]: ++count,
      };
    }
    return {
      ...acc,
      [next]: count,
    };
  }, {});
  const result = Object.entries(record).sort((a, b) => b[1] - a[1]);
  const solution = [];
  for (let i = 0; i < k; i++) {
    solution.push(+result[i][0]);
  }
  return solution;
};
