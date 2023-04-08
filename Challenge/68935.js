// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 100,000,000 이하인 자연수입니다.

// const solution = (n) => {
//   let ternary = n.toString(3);
//   let reverseTernary = Number(ternary.toString().split('').reverse().join(''));
//   return Number.parseInt(reverseTernary.toString().split('').reverse().join(''), 3);
// };
const solution = (n) => {
  return Number.parseInt(n.toString(3).split('').reverse().join(''), 3);
};

console.log(solution(125));
// 9007199254740991
// 설명 MAX_SAFE_INTEGER 상수는 9007199254740991
// 21200011221101121
