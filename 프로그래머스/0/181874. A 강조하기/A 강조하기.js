function solution(myString) {
  return myString
    .split('')
    .map((value) => {
      return value.toLowerCase();
    })
    .map((data) => {
      return data === 'a' ? data.toUpperCase() : data;
    })
    .join('');
}