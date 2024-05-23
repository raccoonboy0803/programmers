function solution(number, limit, power) {
  let divisorsArr = [];
  let result = 0;
  for (let i = 1; i <= number; i++) {
    divisorsArr.push(getDivisors(i).length);
  }

  divisorsArr.forEach((divisor) => {
    if (divisor > limit) {
      result += power;
    } else {
      result += divisor;
    }
  });

  return result;

  function getDivisors(num) {
    const divisors = new Set();
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisors.add(i);
        divisors.add(num / i);
      }
    }
    return Array.from(divisors).sort((a, b) => a - b);
  }
}
