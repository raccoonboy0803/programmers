function solution(X, Y) {
  const countX = Array(10).fill(0);
  const countY = Array(10).fill(0);

  for (let char of X) {
    countX[char]++;
  }
  for (let char of Y) {
    countY[char]++;
  }

  let result = '';

  for (let i = 9; i >= 0; i--) {
    const commonCount = Math.min(countX[i], countY[i]);
    result += String(i).repeat(commonCount);
  }

  if (result === '') return '-1';

  if (result[0] === '0') return '0';

  return result;
}