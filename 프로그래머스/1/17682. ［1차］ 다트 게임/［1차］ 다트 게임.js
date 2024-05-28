function solution(dartResult) {
  let result = [];
  let temp = '';

  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(parseInt(dartResult[i]))) {
      temp += dartResult[i];
    } else {
      if (dartResult[i] === 'D') {
        result.push(Math.pow(parseInt(temp), 2));
      } else if (dartResult[i] === 'S') {
        result.push(parseInt(temp));
      } else if (dartResult[i] === 'T') {
        result.push(Math.pow(parseInt(temp), 3));
      } else if (dartResult[i] === '*') {
        if (result.length >= 2) {
          result[result.length - 2] *= 2;
          result[result.length - 1] *= 2;
        } else {
          result[result.length - 1] *= 2;
        }
      } else if (dartResult[i] === '#') {
        if (result.length >= 1) {
          result[result.length - 1] *= -1;
        }
      }
      temp = '';
    }
  }

  return result.reduce((sum, val) => (sum += val), 0);
}