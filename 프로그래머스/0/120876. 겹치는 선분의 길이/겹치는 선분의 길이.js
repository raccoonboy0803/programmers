function solution(lines) {
  let result = 0;
  let lineMap = new Array(200).fill(0);

  for (let i = 0; i < 3; i++) {
    let start = lines[i][0];
    let end = lines[i][1];

    for (let j = start; j < end; j++) {
      lineMap[j + 100] += 1;
    }
  }

  for (let index in lineMap) {
    if (lineMap[index] > 1) {
      result += 1;
    }
  }
  return result;
}