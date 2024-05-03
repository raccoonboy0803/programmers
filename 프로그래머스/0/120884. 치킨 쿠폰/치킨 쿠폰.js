function solution(chicken) {
  let result = 0;
  let rest = chicken % 10;
  let chickenNum = Math.floor(chicken / 10);
  result += chickenNum;
  chickenNum += rest;

  while (true) {
    rest = chickenNum % 10;
    chickenNum = Math.floor(chickenNum / 10);
    result += chickenNum;

    if (chickenNum === 0) {
      break;
    }
    chickenNum += rest;
  }
  return result;
}