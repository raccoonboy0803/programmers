function solution(myString, pat) {
  const changeString = myString
    .split('')
    .map((value) => {
      return value === 'A'
        ? (value = 'B')
        : value === 'B'
        ? (value = 'A')
        : value;
    })
    .join('');
  return changeString.includes(pat) ? 1 : 0;
}