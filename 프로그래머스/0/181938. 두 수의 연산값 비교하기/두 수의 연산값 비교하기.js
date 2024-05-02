function solution(a, b) {
  const stringSum = Number(a.toString() + b.toString());
  return stringSum >= 2 * a * b ? stringSum : 2 * a * b;
}