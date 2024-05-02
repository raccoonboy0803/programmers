function solution(numbers) {
  let answer = 0;
  let max = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (
        max < numbers[i] * numbers[j] &&
        numbers.indexOf(numbers[i]) !== numbers.lastIndexOf(numbers[j])
      ) {
        max = numbers[i] * numbers[j];
      }
    }
  }
  answer = max;
  return answer;
}