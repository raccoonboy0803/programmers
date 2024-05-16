function solution(s) {
  let splitS = s.split(' ');
  splitS.forEach((item, i) => {
    splitS[i] = item
      .split('')
      .map((ele, index) => {
        if (index % 2 === 0) {
          return ele.toUpperCase();
        } else {
          return ele.toLowerCase();
        }
      })
      .join('');
  });
  return splitS.join(' ');
}