function solution(numLog) {
  let result = [];
  for (let i = 0; i < numLog.length; i++) {
    switch (numLog[i + 1] - numLog[i]) {
      case 1:
        result.push('w');
        break;
      case -1:
        result.push('s');
        break;
      case 10:
        result.push('d');
        break;
      case -10:
        result.push('a');
        break;
    }
  }
  return result.join('');
}