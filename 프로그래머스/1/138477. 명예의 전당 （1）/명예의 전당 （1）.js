function solution(k, score) {
  let result = [];
  let process = [];

  for (let i = 0; i < score.length; i++) {
    process.push(score[i]);
    process = process.sort((a, b) => b - a).slice(0, k);
    result.push(process[process.length - 1]);
  }

  return result;
}