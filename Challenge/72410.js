//신규 아이디 추천

const solution = (new_id) => {
  const str = [
    '~',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '=',
    '+',
    '[',
    '{',
    ']',
    '}',
    ':',
    '?',
    ',',
    '<',
    '>',
    '/',
    '<',
    '/',
    '>',
  ];

  let onetwo = new_id
    .split('')
    .map((a) => a.toLowerCase())
    .filter((b) => !str.includes(b));

  let threefour = [];
  for (let num of onetwo) {
    if (num === '.') {
      if (num === threefour[threefour.length - 1]) {
        threefour.pop();
        threefour.push(num);
        continue;
      }
    }
    threefour.push(num);
  }
  if (threefour[0] === '.') threefour.shift();
  if (threefour[threefour.length - 1] === '.') threefour.pop();

  if (threefour == '') threefour.push('a');

  let six = threefour.splice(0, 15);
  if (six[six.length - 1] === '.') six.pop();

  if (six.length <= 2) {
    while (six.length < 3) {
      six.push(six[six.length - 1]);
    }
  }

  return six.join('');
};
// console.log(solution('...!@BaT#*..y.abcdefghijklm'));
console.log(solution('=.='));
