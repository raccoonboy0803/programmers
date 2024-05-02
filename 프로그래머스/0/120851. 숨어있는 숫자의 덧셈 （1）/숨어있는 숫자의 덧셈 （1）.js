function solution(my_string) {
  return [...my_string]
    .filter((x) => parseInt(x))
    .map((val) => Number(val))
    .reduce((sum, value) => (sum += value), 0);
}