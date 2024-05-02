function solution(myString) {
  const alphabet = [
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
  const array = myString.split('');
  array.map((v, i) => {
    if (alphabet.indexOf(v) < 11) {
      array.splice(i, 1, 'l');
    }
  });
  return array.join('');
}