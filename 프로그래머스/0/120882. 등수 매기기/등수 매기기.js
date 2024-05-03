function solution(score) {
  let result = [];
  let avgArr = [];
  score.map((item) => {
    avgArr.push((item[0] + item[1]) / 2);
  });
  let sortArr = [...avgArr].sort((a, b) => b - a);

  avgArr.map((item, index) => {
    result.push(sortArr.indexOf(item) + 1);
    avgArr[index] = '';
  });
  return result;
}