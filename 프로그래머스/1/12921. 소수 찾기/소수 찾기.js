function solution(limit) {
  const numArr = new Array(limit + 1).fill(true);
  numArr[0] = numArr[1] = false;
  
  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (numArr[i]) {
      for (let j = i * i; j <= limit; j += i) {
        numArr[j] = false;
      }
    }
  }
  
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (numArr[i]) {
      primes.push(i);
    }
  }
  
  return primes.length;
}
