function solution(s) {
  const stringNumberArr = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let result = s;
  stringNumberArr.map((string, index) => {
    let splitS = result.split(string).join(' ');

    const changeS = splitS.split('').map((item) => {
      if (item === ' ') {
        return index.toString();
      } else {
        return item;
      }
    });

    result = changeS.join('');
  });

  return parseInt(result);
}