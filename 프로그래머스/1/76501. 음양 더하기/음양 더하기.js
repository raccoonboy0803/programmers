function solution(absolutes, signs) {
  let result = [];
  signs.map((v, i) => {
    v === true ? result.push(+absolutes[i]) : result.push(-absolutes[i]);
  });
  return result.reduce((sum, val) => (sum += val), 0);
}