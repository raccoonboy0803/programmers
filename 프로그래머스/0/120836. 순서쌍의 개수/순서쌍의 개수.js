function solution(n) {
  let result = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.push(i);
      if (i * i !== n) {
        result.push(n / i);
      }
    }
  }
  return result.length;
}