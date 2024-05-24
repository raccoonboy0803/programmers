function solution(nums) {
  let result = [];
  let n = nums.length;
  let primeCount = 0;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        result.push(sum);
      }
    }
  }

  for (let i = 0; i < result.length; i++) {
    isPrime(result[i]) && primeCount++;
  }

  return primeCount;

  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i <= Math.sqrt(n); i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
  }
}