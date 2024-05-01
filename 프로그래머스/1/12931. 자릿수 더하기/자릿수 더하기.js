function solution(n) {
  return n
    .toString()
    .split('')
    .map((v) => parseInt(v))
    .reduce((sum, val) => (sum += val), 0);
}