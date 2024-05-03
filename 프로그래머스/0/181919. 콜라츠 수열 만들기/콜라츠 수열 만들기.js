function solution(n) {
  let result = [n];
  let number = n;

  while (number !== 1) {
    if (number % 2 === 0) {
      result.push(number / 2);
      number = number / 2;
    } else {
      result.push(3 * number + 1);
      number = 3 * number + 1;
    }
  }

  return result;
}