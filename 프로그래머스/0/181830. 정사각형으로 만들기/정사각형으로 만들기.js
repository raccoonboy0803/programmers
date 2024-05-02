function solution(arr) {
  const row = arr.length;
  const colum = arr[0].length;

  if (row > colum) {
    for (let i = 0; i < row; i++) {
      for (let j = colum; j < row; j++) {
        arr[i].push(0);
      }
    }
  } else if (row < colum) {
    for (let i = row; i < colum; i++) {
      arr.push([
        ...'0'
          .repeat(colum)
          .split('')
          .map((v) => parseInt(v)),
      ]);
    }
  }
  return arr;
}