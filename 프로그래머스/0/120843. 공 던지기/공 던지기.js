function solution(numbers, k) {
  let answerIndex = 0;

  for (let i = 2; i <= k; i++) {
    answerIndex += 2;

    if (answerIndex >= numbers.length) {
      answerIndex -= numbers.length;
    }
  }

  return numbers[answerIndex];
}