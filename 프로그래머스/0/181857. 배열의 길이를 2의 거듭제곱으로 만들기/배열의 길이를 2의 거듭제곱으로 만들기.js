function solution(arr) {
  let findNum = 0;
  for (let i = 0; i <= 10; i++) {
    if (arr.length <= 2 ** i) {
      findNum = i;
      break;
    }
  }

  const upperLimit = 2 ** findNum - arr.length;
  if (arr.length !== 2 ** findNum) {
    for (let i = 0; i < upperLimit; i++) {
      arr.push(0);
    }
  }
  return arr;
}