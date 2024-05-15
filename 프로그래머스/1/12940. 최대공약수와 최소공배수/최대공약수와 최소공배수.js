function solution(n, m) {
  let gcdNum = gcd(n, m);
  return [gcdNum, (n * m) / gcdNum];

  function gcd(a, b) {
    while (b !== 0) {
      let t = b;
      b = a % b;
      a = t;
    }
    return a;
  }
}
