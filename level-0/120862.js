// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

const solution = (numbers) => {
  let sortArr = numbers.sort((a, b) => a - b);
  let negative = sortArr[0] * sortArr[1];
  let positive = sortArr[sortArr.length - 1] * sortArr[sortArr.length - 2];
  return positive > negative ? positive : negative;
};
console.log(solution([1, 2, -3, -4, -5]));
