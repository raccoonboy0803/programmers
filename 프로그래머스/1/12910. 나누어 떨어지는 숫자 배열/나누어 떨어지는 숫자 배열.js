function solution(arr, divisor) {
  let result = [];
  arr.forEach((item) => {
    item % divisor === 0 ? result.push(item) : null;
  });
  return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}
