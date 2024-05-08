function solution(common) {
  let judge = '';
  let judgeArr = [];
  for (let i = 0; i < common.length - 1; i++) {
    judgeArr.push(common[i + 1] - common[i]);
  }
  judgeArr[0] === judgeArr[1] ? (judge = 'arithmetic') : (judge = 'geometric');

  if (judge === 'arithmetic') {
    let interval = common[1] - common[0];
    return common[common.length - 1] + interval;
  } else {
    let multiply = common[1] / common[0];
    return common[common.length - 1] * multiply;
  }
}