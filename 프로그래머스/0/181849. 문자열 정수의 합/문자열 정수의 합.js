function solution(num_str) {
  return num_str
    .split('')
    .map((a) => Number(a))
    .reduce((sum, val) => (sum += val), 0);
}