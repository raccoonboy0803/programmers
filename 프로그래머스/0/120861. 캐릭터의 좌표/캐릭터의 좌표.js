function solution(keyinput, board) {
  let result = [0, 0];
  const maxX = (board[0] - 1) / 2;
  const minX = -(board[0] - 1) / 2;
  const maxY = (board[1] - 1) / 2;
  const minY = -(board[1] - 1) / 2;

  for (let i = 0; i < keyinput.length; i++) {
    let proposedX = result[0];
    let proposedY = result[1];

    if (keyinput[i] === 'up') {
      proposedY += 1;
    } else if (keyinput[i] === 'down') {
      proposedY -= 1;
    } else if (keyinput[i] === 'left') {
      proposedX -= 1;
    } else if (keyinput[i] === 'right') {
      proposedX += 1;
    }

    if (
      proposedX <= maxX &&
      proposedX >= minX &&
      proposedY <= maxY &&
      proposedY >= minY
    ) {
      result[0] = proposedX;
      result[1] = proposedY;
    }
  }

  return result;
}