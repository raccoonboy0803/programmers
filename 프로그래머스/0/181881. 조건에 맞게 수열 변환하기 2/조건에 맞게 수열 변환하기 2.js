function solution(arr) {
  let x = 0;
  let prevArr = [...arr];

  while (true) {
    const nextArr = changeArr(prevArr);

    const isEqual = JSON.stringify(prevArr) === JSON.stringify(nextArr);

    if (isEqual) break;

    prevArr = nextArr;
    x++;
  }
  return x;

  function changeArr(array) {
    return array.map((v) => {
      return v >= 50 && v % 2 === 0
        ? v / 2
        : v < 50 && v % 2 !== 0
        ? v * 2 + 1
        : v;
    });
  }
}