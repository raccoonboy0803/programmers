function solution(sides) {
  const sidesMax = Math.max(...sides);
  const sidesMin = Math.min(...sides);
  const sidesSum = sides[0] + sides[1];
  let count = 0;

  for (let i = 1; i < sidesMax; i++) {
    if (sidesMin + i > sidesMax) count++;
  }
  for (let i = sidesMax; i < sidesSum; i++) {
    count++;
  }
  return count;
}