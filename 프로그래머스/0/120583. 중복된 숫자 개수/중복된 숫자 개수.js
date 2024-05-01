function solution(array, n) {
  let count = 0;
  array.map((value) => (value === n ? count++ : null));
  return count;
}