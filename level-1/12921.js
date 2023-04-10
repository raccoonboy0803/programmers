// 소수 찾기
// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.

const solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    decimal(i) ? answer++ : null;
  }
  return answer;
};
const decimal = (num) => {
  if (num === 1) {
    return false;
  } else if (num === 2 || num === 3) {
    return true;
  } else {
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
};

console.log(solution(10));
