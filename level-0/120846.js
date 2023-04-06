// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

const solution = (n) => {
  let resultArr = [];
  let result = 0;
  for (let i = 4; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      i % j === 0 ? result++ : null;
      if (result >= 3) {
        resultArr.push(i);
        result = 0;
        break;
      }
    }
  }
  return resultArr.length;
};
console.log(solution(15));
