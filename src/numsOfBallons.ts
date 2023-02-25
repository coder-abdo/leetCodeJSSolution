type MaxNumberOfBalloons = (text: string) => number;

export const maxNumberOfBalloons: MaxNumberOfBalloons = (text) => {
  const balloonList: Record<string, number> = {};
  for (const char of text) {
    if (balloonList[char]) {
      balloonList[char]++;
    } else {
      balloonList[char] = 1;
    }
  }
  const charB = balloonList["b"];
  const charA = balloonList["a"];
  const charL = balloonList["l"] / 2;
  const charO = balloonList["o"] / 2;
  const charN = balloonList["n"];
  const count = Math.floor(Math.min(charA, charB, charL, charO, charN));
  if (isNaN(count) || count < 1) {
    return 0;
  }
  return count;
};
