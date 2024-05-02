function solution(n, k) {
  let resultArr = [];
  for (let i = k; i <= n; i += k) {
    resultArr.push(i);
  }
  return resultArr;
}