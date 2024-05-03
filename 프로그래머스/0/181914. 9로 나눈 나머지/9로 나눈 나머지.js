function solution(number) {
  return (
    number
      .split('')
      .map((v) => Number(v))
      .reduce((sum, val) => (sum += val), 0) % 9
  );
}