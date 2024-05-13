function solution(s) {
  let lowerStr = [];
  let upperStr = [];
  let result = '';

  s.split('').forEach((item) => {
    item.toLowerCase() === item ? lowerStr.push(item) : upperStr.push(item);
  });
  const sortLower = lowerStr.sort().reverse().join('');
  const sortUpper = upperStr.sort().reverse().join('');
  result = sortLower + sortUpper;

  return result;
}