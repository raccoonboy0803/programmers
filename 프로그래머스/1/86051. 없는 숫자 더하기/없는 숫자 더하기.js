function solution(numbers) {
  let result = [];
  for (let i = 0; i <= 9; i++) {
    numbers.includes(i) ? null : result.push(i);
  }
  return result.reduce((sum, val) => (sum += val), 0);
}
