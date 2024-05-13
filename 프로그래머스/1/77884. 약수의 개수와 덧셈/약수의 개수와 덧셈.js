function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    if (findDivisors(i).length % 2 === 0) {
      sum += i;
    } else {
      sum -= i;
    }
  }
  return sum;

  function findDivisors(num) {
    const divisors = [];

    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  }
}