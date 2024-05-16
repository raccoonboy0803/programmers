function solution(d, budget) {
  let sum = 0;
  let count = 0;
  const sortD = d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    sum += sortD[i];
    if (sum > budget) {
      break;
    }
    count++;
  }
  return count;
}