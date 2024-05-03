function solution(arr) {
  let result = [];
  arr.map((value) => {
    for (let i = 0; i < value; i++) {
      result.push(value);
    }
  });
  return result;
}