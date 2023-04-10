//체육복

const solution = (n, lost, reserve) => {
  let RealLost = lost.filter((a) => !reserve.includes(a)).sort((a, b) => a - b);
  let RealReserve = reserve
    .filter((a) => !lost.includes(a))
    .sort((a, b) => a - b);
  let people = n - RealLost.length;

  RealLost.map((a) => {
    if (RealReserve.length === 0) return;

    if (RealReserve.includes(a - 1)) {
      RealReserve = RealReserve.filter((b) => b !== a - 1);
      people++;
    } else if (RealReserve.includes(a + 1)) {
      RealReserve = RealReserve.filter((b) => b !== a + 1);
      people++;
    }
  });

  return people;
};
// console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
// console.log(solution(5, [2, 3, 4], [1, 2, 3])); //5케이스 return 4
// console.log(solution(5, [1, 2, 3], [2, 3, 4])); //12케이스 return 4

// console.log(solution(3, [3], [1]));
