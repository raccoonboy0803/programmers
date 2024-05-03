function solution(i, j, k) {
  let result = 0;
  for (let n = i; n <= j; n++) {
    n.toString()
      .split('')
      .map((v) => {
        if (v === k.toString()) {
          result += 1;
        }
      });
  }
  return result;
}