//폰켓몬

const solution = (nums) => {
  const mySet = new Set(nums);
  const pickNum = nums.length / 2;
  let answer;
  return [...mySet].length < pickNum
    ? (answer = [...mySet].length)
    : (answer = pickNum);
};
console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 2]));
