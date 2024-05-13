function solution(n) {
  const replayStr = '수박';
  if (n % 2 === 0) {
    return replayStr.repeat(n / 2);
  } else {
    return replayStr.repeat(Math.floor(n / 2)) + '수';
  }
}