function solution(keymap, targets) {
  let answer = [];
  let result = [];
  let min = [];

  for (let i = 0; i < targets.length; i++) {
    result = [];
    for (let j = 0; j < targets[i].length; j++) {
      min = [];
      for (let k = 0; k < keymap.length; k++) {
        min.push(keymap[k].indexOf(targets[i][j]));
      }
      if (min.filter((item) => item !== -1).length === 0) {
        result.push(-1);
        break;
      } else {
        result.push(Math.min(...min.filter((item) => item !== -1)) + 1);
      }
    }
    if (result[result.length - 1] === -1) {
      answer.push(-1);
      continue;
    }

    answer.push(result.reduce((sum, val) => (sum += val), 0));
  }

  return answer;
}