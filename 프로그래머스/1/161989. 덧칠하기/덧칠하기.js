function solution(n, m, section) {
  let result = 0;
  let wallArr = new Array(n).fill(true);
  section.forEach((item) => {
    wallArr[item - 1] = false;
  });

  wallArr.forEach((item, index) => {
    if (item === false) {
      for (let i = index; i < index + m; i++) {
        wallArr[i] = true;
      }
      result++;
    }
  });

  return result;
}