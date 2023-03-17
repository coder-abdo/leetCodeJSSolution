type ReverseString = (s: string[]) => void;

export const reverseString: ReverseString = (s) => {
  // s = s.reverse() //first solution
  //   s = s.reduce((prev, next) => next + prev, "").split(""); //second solution
  s = s.map((_char, i, arr) => arr[arr.length - 1 - i]); //third solution
  console.log(s);
};
