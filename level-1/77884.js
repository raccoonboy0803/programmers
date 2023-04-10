// 약수의 개수와 덧셈
// 문제 설명
// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ left ≤ right ≤ 1,000

const solution = (left, right) => {
  let odd = []; //홀수
  let even = []; //짝수
  for (let i = left; i <= right; i++) {
    isdivisor(i) % 2 === 0 ? even.push(i) : odd.push(i);
  }
  let oddSum = odd.reduce((sum, a) => (sum += a), 0);
  let evenSum = even.reduce((sum, a) => (sum += a), 0);
  return evenSum - oddSum;
};

const isdivisor = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    num % i === 0 ? count++ : null;
  }
  return count;
};
