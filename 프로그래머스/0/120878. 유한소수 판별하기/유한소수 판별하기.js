function solution(a, b) {
  const aDivisorArr = divisor(a);
  const bDivisorArr = divisor(b);
  const maxCommonDivisor = bDivisorArr
    .filter((item) => aDivisorArr.includes(item))
    .sort((a, b) => b - a)[0];

  let newB;
  if (maxCommonDivisor !== 1) {
    newB = b / maxCommonDivisor;
  } else {
    newB = b;
  }

  let isTrue = true;
  const primeArr = prime(newB);
  for (let i = 0; i < primeArr.length; i++) {
    if (primeArr[i] !== 2 && primeArr[i] !== 5) {
      isTrue = false;
    }
  }
  return isTrue ? 1 : 2;

  function prime(n) {
    let result = [];
    let divisor = 2;

    while (n >= 2) {
      if (n % divisor === 0) {
        result.push(divisor);
        n = n / divisor;
      } else divisor++;
    }

    return [...new Set(result)];
  }

  function divisor(n) {
    let result = [];
    let index = 1;

    while (n !== index) {
      if (n % index === 0) result.push(index);
      index++;
    }

    result.push(n);
    return result;
  }
}
