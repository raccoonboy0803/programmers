function solution(n) {
  let reverseBase3Num = n.toString(3).split('').reverse().join('');

  return parseInt(reverseBase3Num, 3);
}