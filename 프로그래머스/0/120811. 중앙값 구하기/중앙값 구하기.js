function solution(array) {
  const num = Math.floor(array.length / 2);
  return array.sort((a, b) => a - b)[num];
}