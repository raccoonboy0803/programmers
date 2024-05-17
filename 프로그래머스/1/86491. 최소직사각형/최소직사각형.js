function solution(sizes) {
  const mappingSizes = sizes.map((size) => {
    let trans = 0;
    if (size[0] <= size[1]) {
      trans = size[0];
      size[0] = size[1];
      size[1] = trans;
    }
    return size;
  });

  let maxSizeX = 0;
  let maxSizeY = 0;
  mappingSizes.forEach((size) => {
    maxSizeX = size[0] >= maxSizeX ? size[0] : maxSizeX;
    maxSizeY = size[1] >= maxSizeY ? size[1] : maxSizeY;
  });

  return maxSizeX * maxSizeY;
}