function solution(numbers) {
  const sum = numbers.reduce((sum, value) => (sum += value), 0);
  return sum / numbers.length;
}