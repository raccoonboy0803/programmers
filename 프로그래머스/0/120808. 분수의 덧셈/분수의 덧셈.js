function solution(numer1, denom1, numer2, denom2) {
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  function gcd(a, b) {
    while (b !== 0) {
      let t = b;
      b = a % b;
      a = t;
    }
    return a;
  }
  let lcmDenom = lcm(denom1, denom2);
  let resultNumer = (lcmDenom / denom1) * numer1 + (lcmDenom / denom2) * numer2;
  let resultDenom = lcm(denom1, denom2);
  return [
    resultNumer / gcd(resultNumer, resultDenom),
    resultDenom / gcd(resultNumer, resultDenom),
  ];
}