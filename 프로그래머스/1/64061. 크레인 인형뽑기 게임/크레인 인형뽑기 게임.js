function solution(board, moves) {
  let basket = [];
  let count = 0;

  for (let move of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        let doll = board[i][move - 1];
        board[i][move - 1] = 0;
        
        if (basket.length > 0 && basket[basket.length - 1] === doll) {
          basket.pop();
          count += 2;
        } else {
          basket.push(doll);
        }
        
        break;
      }
    }
  }

  return count;
}
