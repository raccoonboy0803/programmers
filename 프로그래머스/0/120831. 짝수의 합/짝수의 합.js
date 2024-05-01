function solution(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    i % 2 == 0 ? arr.push(i) : null;
  }
  return arr.reduce((sum, value) => (sum += value), 0);
}