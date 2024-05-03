function solution(my_string) {
  return my_string
    .split('')
    .map((v) => Number(v))
    .filter((v) => !isNaN(v))
    .sort((a, b) => a - b);
}