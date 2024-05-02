function solution(s1, s2) {
  let count = 0;
  s2.map((val) => {
    s1.includes(val) ? count++ : null;
  });
  return count;
}