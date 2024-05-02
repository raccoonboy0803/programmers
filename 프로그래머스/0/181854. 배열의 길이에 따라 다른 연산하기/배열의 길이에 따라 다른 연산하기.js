function solution(arr, n) {
  if (arr.length % 2 !== 0) {
    return arr.map((val, i) => {
      return i % 2 === 0 ? (val += n) : val;
    });
  } else {
    return arr.map((val, i) => {
      return i % 2 !== 0 ? (val += n) : val;
    });
  }
}