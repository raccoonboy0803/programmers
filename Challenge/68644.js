const solution = (numbers) => {
  const mySet = new Set();
  let sum = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sum.push(numbers[i] + numbers[j]);
    }
  }
  sum.map((a) => mySet.add(a));
  return [...mySet].sort((a, b) => a - b);
};

console.log(solution([2, 1, 3, 4, 1]));
