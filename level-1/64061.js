//크레인 인형뽑기 게임

const solution = (board, moves) => {
  let count = 0;
  let bucket = [];
  for (let i = 0; i < moves.length; i++) {
    let now = moves[i] - 1;
    for (let j = 0; j < board.length; j++) {
      if (board[j][now] !== 0) {
        if (bucket[bucket.length - 1] === board[j][now]) {
          bucket.pop();
          count += 2;
        } else {
          bucket.push(board[j][now]);
        }
        board[j][now] = 0;
        break;
      }
    }
  }
  return count;
};

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
console.log(
  solution(
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 4, 4, 0],
      [1, 2, 2, 1],
    ],
    [2, 3, 1, 4, 2, 3]
  )
);
