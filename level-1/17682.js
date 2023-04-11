//다트 게임

const solution = (dartResult) => {
  let answer = [];
  let temp = 0; //숫자만 담을 변수
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= '0' && dartResult[i] <= '9') {
      if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
        temp = '10';
        i++;
      } else {
        temp = dartResult[i];
      }
    } else if (dartResult[i] === 'S') {
      answer.push(temp * 1);
    } else if (dartResult[i] === 'D') {
      answer.push(temp ** 2);
    } else if (dartResult[i] === 'T') {
      answer.push(temp ** 3);
    } else if (dartResult[i] === '#') {
      answer[answer.length - 1] *= -1;
    } else if (dartResult[i] === '*') {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    }
  }
  return answer.reduce((sum, a) => (sum += a), 0);
};
// console.log(solution('1S2D*3T'));
// console.log(solution('1D#2S*3S'));
// console.log(solution('1T2D3D#'));
console.log(solution('10D4S10D'));
