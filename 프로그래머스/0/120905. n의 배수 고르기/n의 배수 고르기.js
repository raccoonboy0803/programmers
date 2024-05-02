function solution(n, numlist) {
  let result = [];
  numlist.map((value) => {
    if (value % n === 0) {
      result.push(value);
    }
  });
  return result;
}