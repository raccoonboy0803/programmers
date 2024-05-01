function solution(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    n % i === 0 ? result.push(i) : null;
  }
  return result.reduce((sum, val) => (sum += val), 0);
}