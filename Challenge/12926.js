//시저 암호

const solution = (s, n) => {
  const small = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const capital = small.map((a) => a.toUpperCase());
  let result = [];
  s.split('').map((a) => {
    let index;
    if (a === ' ') {
      result.push(' ');
    } else if (isUpper(a) === false) {
      index = small.indexOf(a);
      a = small[(index + n) % 26];
      result.push(a);
    } else if (isUpper(a) === true) {
      index = capital.indexOf(a);
      a = capital[(index + n) % 26];
      result.push(a);
    }
  });
  return result.join('');
};
const isUpper = (str) => (str === str.toUpperCase() ? true : false);
// const isLower = (str) => (str === str.toLowerCase ? true : false);

console.log(solution('a B z', 4));
// console.log('a B Z'.split(''));
