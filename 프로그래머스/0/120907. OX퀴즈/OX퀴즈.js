function solution(quiz) {
  let result = [];

  quiz.forEach((item) => {
    result.push(judgeResult(item.split(' ')));
  });
  return result;

  function judgeResult(splitSpaceArr) {
    let judge = '';
    for (let i = 0; i < splitSpaceArr.length; i++) {
      if (splitSpaceArr[i] === '=') break;
      if (isNaN(Number(splitSpaceArr[i])) === true) {
        if (splitSpaceArr[i] === '+') {
          Number(splitSpaceArr[i - 1]) + Number(splitSpaceArr[i + 1]) ===
          Number(splitSpaceArr[i + 3])
            ? (judge = 'O')
            : (judge = 'X');
        } else if (splitSpaceArr[i] === '-') {
          Number(splitSpaceArr[i - 1]) - Number(splitSpaceArr[i + 1]) ===
          Number(splitSpaceArr[i + 3])
            ? (judge = 'O')
            : (judge = 'X');
        }
      }
    }
    return judge;
  }
}