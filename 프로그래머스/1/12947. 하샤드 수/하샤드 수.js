function solution(x) {
  const hashad = x
    .toString()
    .split('')
    .map((v) => parseInt(v))
    .reduce((sum, val) => (sum += val), 0);
  return x % hashad === 0 ? true : false;
}