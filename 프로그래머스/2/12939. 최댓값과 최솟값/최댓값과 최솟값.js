function solution(s) {
  let answer = [];

  const splitNumberS = s.split(' ').map((item) => Number(item));
  answer.push(Math.min(...splitNumberS));
  answer.push(Math.max(...splitNumberS));
  return answer.join(' ');
}