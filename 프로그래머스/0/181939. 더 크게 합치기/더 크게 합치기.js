function solution(a, b) {
  const forwardSum = parseInt(a.toString() + b.toString());
  const reverseSum = parseInt(b.toString() + a.toString());

  return Math.max(forwardSum, reverseSum);
}