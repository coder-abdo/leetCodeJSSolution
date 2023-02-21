type TCanPlaceFlowers = (flowerBed: number[], n: number) => boolean;

export const canPlaceFlowers: TCanPlaceFlowers = (flowerBed, n) => {
  flowerBed = [0, ...flowerBed, 0];
  for (let i = 1; i < flowerBed.length; i++) {
    // if (flowerBed[i - 1] + flowerBed[i] + flowerBed[i + 1] === 0) {
    //   n--;
    //   i++;
    // }
    if (
      flowerBed[i - 1] === 0 &&
      flowerBed[i] === 0 &&
      flowerBed[i + 1] === 0
    ) {
      n--;
      i++;
    }
  }
  return n <= 0;
};
