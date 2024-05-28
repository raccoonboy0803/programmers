function solution(N, stages) {
  const result = new Array(N);
  let answer = [];
  let total, fail;
  for (let i = 0; i < result.length; i++) {
    total = 0;
    fail = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] > i) total++;
      if (stages[j] === i + 1) fail++;
    }

    if (total === 0) {
      result[i] = 0;
    } else {
      result[i] = fail / total;
    }
  }
  const sortedArr = [...result].sort((a, b) => {
    if (a === b) {
      return a - b;
    } else {
      return b - a;
    }
  });
  sortedArr.forEach((item, index) => {
    if (result.indexOf(item) !== result.lastIndexOf(item)) {
      answer.push(result.indexOf(item) + 1);
      result[result.indexOf(item)] = -1;
    } else {
      answer.push(result.indexOf(item) + 1);
    }
  });
  return answer;
}