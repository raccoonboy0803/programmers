function solution(park, routes) {
  const twoDArray = park.map((row) => row.split(''));
  const height = twoDArray.length;
  const width = twoDArray[0].length;
  let startIndex;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (twoDArray[i][j] === 'S') {
        startIndex = [i, j];
        break;
      }
    }
    if (startIndex) {
      break;
    }
  }

  for (let i = 0; i < routes.length; i++) {
    const direction = routes[i][0];
    const steps = parseInt(routes[i].split(' ')[1], 10);
    let validMove = true;

    if (direction === 'E') {
      for (let j = 0; j < steps; j++) {
        if (
          startIndex[1] + j + 1 === width ||
          twoDArray[startIndex[0]][startIndex[1] + j + 1] === 'X'
        ) {
          validMove = false;
          break;
        }
      }
      if (validMove) startIndex[1] += steps;
    } else if (direction === 'W') {
      for (let j = 0; j < steps; j++) {
        if (
          startIndex[1] - j - 1 < 0 ||
          twoDArray[startIndex[0]][startIndex[1] - j - 1] === 'X'
        ) {
          validMove = false;
          break;
        }
      }
      if (validMove) startIndex[1] -= steps;
    } else if (direction === 'N') {
      for (let j = 0; j < steps; j++) {
        if (
          startIndex[0] - j - 1 < 0 ||
          twoDArray[startIndex[0] - j - 1][startIndex[1]] === 'X'
        ) {
          validMove = false;
          break;
        }
      }
      if (validMove) startIndex[0] -= steps;
    } else if (direction === 'S') {
      for (let j = 0; j < steps; j++) {
        if (
          startIndex[0] + j + 1 === height ||
          twoDArray[startIndex[0] + j + 1][startIndex[1]] === 'X'
        ) {
          validMove = false;
          break;
        }
      }
      if (validMove) startIndex[0] += steps;
    }
  }

  return startIndex;
}