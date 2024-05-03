function solution(array) {
  let count = 0;
  array.map((value) => {
    value
      .toString()
      .split('')
      .map((v) => {
        v === '7' ? count++ : null;
      });
  });
  return count;
}