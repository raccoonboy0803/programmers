function solution(num, total) {
  let result = [];
  let middle = Math.floor(total / num);
  let range;
  let start;
  let end;

  if (num === 1) return [total];

  if (num % 2 === 0) {
    range = num / 2;
    start = middle - range;
    end = middle + range - 1;
  } else if (num % 2 !== 0) {
    range = Math.floor(num / 2);
    start = middle - range;
    end = middle + range;
  }

  let sum = 0;
  while (start < end) {
    sum = 0;
    for (let i = start; i <= end; i++) {
      result.push(i);
      sum = result.reduce((total, val) => (total += val), 0);
    }

    if (sum === total) break;

    start++;
    end++;
    result = [];
  }
  return result;
}