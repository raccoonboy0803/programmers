function solution(numbers, n) {
  return numbers.reduce((sum, value) => {
    if (sum > n) {
      return sum;
    } else {
      return (sum += value);
    }
  }, 0);
}