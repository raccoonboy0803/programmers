function solution(n) {
  let PrimeArr = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime(i) && n % i === 0) {
      PrimeArr.push(i);
    }
  }
  return [...new Set(PrimeArr)].sort((a, b) => a - b);

  function isPrime(num) {
    if (num <= 1) return;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}