function solution(lottos, win_nums) {
  let result = [];
  let visibleSameNum = 0;
  let zeroCount = 0;
  lottos.forEach((lotto) => {
    win_nums.includes(lotto) ? visibleSameNum++ : null;
  });
  lottos.forEach((lotto) => {
    lotto === 0 ? zeroCount++ : null;
  });

  return [getGrade(visibleSameNum + zeroCount), getGrade(visibleSameNum)];

  function getGrade(num) {
    if (num === 6) return 1;
    if (num === 5) return 2;
    if (num === 4) return 3;
    if (num === 3) return 4;
    if (num === 2) return 5;
    if (num === 0 || num === 1) return 6;
  }
}