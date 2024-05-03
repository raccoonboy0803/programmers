function solution(n) {
  function factorial(num) {
    if (num < 0) return -1;
    else if (num === 0) return 1;
    else return num * factorial(num - 1);
  }
  let result = 0;
  for (let i = 1; i < 3628800; i++) {
    if (factorial(i) > n) {
      result = i - 1;
      break;
    } else if (factorial(i) === n) {
      result = i;
      break;
    }
  }
  return result;
}