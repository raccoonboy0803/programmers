function solution(n) {
  let getLCM = (num1, num2) => {
    let lcm = 1;
    while (true) {
      if (lcm % num1 === 0 && lcm % num2 === 0) break;
      lcm++;
    }
    return lcm;
  };

  return getLCM(6, n) / 6;
}