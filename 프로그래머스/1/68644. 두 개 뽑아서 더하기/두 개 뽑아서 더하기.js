function solution(numbers) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i === numbers.length - 1) break;
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(result.sort((a, b) => a - b))];
}