//문자열 내림차순으로 배치하기

const solution = (s) => {
  return s
    .split('')
    .sort((a, b) => {
      if (a > b) return -1;
      else return 1;
    })
    .join('');
};
console.log(solution('Zbcdefg'));
console.log('a' === 'A'); //return false / Js는 대소문자 구분
console.log('b' > 'Z'); //return true / 모든 대문자는 소문자 보다 작다
