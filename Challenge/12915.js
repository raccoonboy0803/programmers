//문자열 내 마음대로 정렬하기

const solution = (strings, n) => {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (a[n] < b[n]) return -1;
    else return a > b ? 1 : -1;
  });
};

console.log(solution(['sun', 'bed', 'car'], 1));
