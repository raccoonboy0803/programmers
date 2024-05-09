function solution(board) {
  let result = Array.from(Array(board.length), () =>
    new Array(board[0].length).fill(0)
  );

  let mineIndexArr = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) mineIndexArr.push([i, j]);
    }
  }

  mineIndexArr.forEach((index) => {
    for (let i = index[0] - 1; i <= index[0] + 1; i++) {
      if (i >= 0 && i < result.length) {
        for (let j = index[1] - 1; j <= index[1] + 1; j++) {
          if (j >= 0 && j < result[i].length) {
            result[i][j] = 1;
          }
        }
      }
    }
  });

  let answer = 0;
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      result[i][j] === 0 ? answer++ : null;
    }
  }
  return answer;
}