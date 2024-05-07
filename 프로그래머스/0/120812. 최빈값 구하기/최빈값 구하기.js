function solution(array) {
  let countArr = new Array(1000).fill(0);

  array.forEach((item) => {
    countArr[item] += 1;
  });

  maxCount = Math.max(...countArr);

  return countArr.indexOf(maxCount) === countArr.lastIndexOf(maxCount)
    ? countArr.indexOf(maxCount)
    : -1;
}