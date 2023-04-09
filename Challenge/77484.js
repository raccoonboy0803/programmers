//로또의 최고 순위와 최저 순위

const solution = (lottos, win_nums) => {
  const rankArr = [6, 6, 5, 4, 3, 2, 1];
  let winNums = lottos.filter((a) => win_nums.includes(a)).length;
  let zeroNum = lottos.filter((a) => a === 0).length;
  const max = winNums + zeroNum;
  const min = winNums;
  return [rankArr[max], rankArr[min]];
};
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
