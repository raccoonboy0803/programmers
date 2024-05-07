function solution(num) {
  if (num === 1) return 0;

  let count = 0;
  while (num !== 1) {
    if (num % 2 === 0) {
      num /= 2;
      count++;
    } else {
      num = 3 * num + 1;
      count++;
    }
  }
  return count >= 500 ? -1 : count;
}
