function solution(wallpaper) {
  let coordinate = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === '#') {
        coordinate.push([i, j]);
      }
    }
  }

  const valuesAtIndexX = coordinate.map((item) => item[0]);
  const valuesAtIndexY = coordinate.map((item) => item[1]);

  const minX = Math.min(...valuesAtIndexX);
  const maxX = Math.max(...valuesAtIndexX);
  const minY = Math.min(...valuesAtIndexY);
  const maxY = Math.max(...valuesAtIndexY);

  return [minX, minY, maxX + 1, maxY + 1];
}