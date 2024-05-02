function solution(arr) {
  return arr.map((value) => {
    return value >= 50 && value % 2 === 0
      ? value / 2
      : value < 50 && value % 2 === 1
      ? value * 2
      : value;
  });
}