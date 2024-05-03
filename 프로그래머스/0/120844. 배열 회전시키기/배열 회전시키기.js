function solution(numbers, direction) {
  let result = [...numbers];
  if (direction === 'right') {
    const pop = result.pop();
    result.unshift(pop);
  } else {
    const shift = result.shift();
    result.push(shift);
  }
  return result;
}