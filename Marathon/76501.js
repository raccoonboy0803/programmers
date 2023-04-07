const solution = (absolutes, signs) => {
  let resultArr = [];
  absolutes.map((a, i) => {
    signs[i] === true ? resultArr.push(a) : resultArr.push(-a);
  });
  return resultArr.reduce((sum, a) => (sum += a), 0);
};

console.log(solution([4, 7, 12], [true, false, true]));
