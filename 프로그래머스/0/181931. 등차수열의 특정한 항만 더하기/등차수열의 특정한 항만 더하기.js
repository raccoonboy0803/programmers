function solution(a, d, included) {
  let result = 0;
  let startNum = a;
  let intervalNum = d;
  for (let i = 1; i <= included.length; i++) {
    if (included[i - 1] === true) {
      result += startNum;
    }
    startNum += intervalNum;
  }
  return result;
}