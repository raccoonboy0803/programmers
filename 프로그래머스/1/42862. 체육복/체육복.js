function solution(n, lost, reserve) {
  const nArr = Array(n).fill(1);

  lost.map((item) => {
    return (nArr[item - 1] = 0);
  });
  reserve.map((item) => {
    return (nArr[item - 1] += 1);
  });

  for (let i = 0; i < nArr.length; i++) {
    if (nArr[i] === 0) {
      if (nArr[i - 1] === 2) {
        if (i - 1 >= 0) {
          nArr[i - 1] = 1;
          nArr[i] = 1;
        }
      } else if (nArr[i + 1] === 2) {
        if (i + 1 < nArr.length) {
          nArr[i + 1] = 1;
          nArr[i] = 1;
        }
      }
    }
  }
  let result = 0;
  nArr.forEach((item) => {
    if (item !== 0) {
      result++;
    }
  });
  return result;
}