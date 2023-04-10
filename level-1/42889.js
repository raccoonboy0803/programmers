//실패율

const solution = (N, stages) => {
  let total, now, rate;
  let answerArr = [];
  let rankArr = [];

  for (let i = 1; i <= N; i++) {
    now = stages.filter((a) => a === i).length;
    total = stages.filter((a) => a >= i).length;
    total === 0 ? (rate = 0) : (rate = now / total);
    answerArr.push(rate);
  }

  let copyArr = Array.from(answerArr);
  copyArr
    .sort((a, b) => b - a)
    .map((a) => {
      rankArr.push(answerArr.indexOf(a) + 1);
      delete answerArr[answerArr.indexOf(a)];
    });
  return rankArr;
};
// console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
// console.log(solution(4, [4, 4, 4, 4, 4]));
console.log(solution(5, [3, 3, 3, 3]));
