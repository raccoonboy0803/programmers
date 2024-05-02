function solution(sides) {
  const array = sides.sort((a, b) => b - a);
  return array[0] < array[1] + array[2] ? 1 : 2;
}