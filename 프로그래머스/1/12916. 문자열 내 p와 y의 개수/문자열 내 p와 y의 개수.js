function solution(s) {
  let pCount = 0;
  let yCount = 0;
  s.toLowerCase()
    .split('')
    .map((v) => {
      v === 'p' ? pCount++ : v === 'y' ? yCount++ : null;
    });
  return pCount === yCount ? true : false;
}