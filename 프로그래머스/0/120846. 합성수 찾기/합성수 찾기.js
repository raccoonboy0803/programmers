function solution(n) {
  let count = 0;
  let resultArr = [];
  for (let i = 4; i <= n; i++) {
    count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
      if (count === 3) {
        resultArr.push(i);
        break;
      }
    }
  }
  return resultArr.length;
}