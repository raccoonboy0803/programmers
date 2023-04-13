function solution(num) {
  let answer = 0;
  let rest = 1000 - num;
  const rest500 = Math.floor(rest / 500);
  const rest100 = Math.floor((rest % 500) / 100);
  const rest50 = Math.floor(((rest % 500) % 100) / 50);
  const rest10 = Math.floor((((rest % 500) % 100) % 50) / 10);
  answer = rest500 + rest100 + rest50 + rest10;
  return answer;
}

console.log(solution(160));
