function solution(s) {
  const frequency = {};
  let result = '';
  for (let char of s) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }

  for (let char of s) {
    if (frequency[char] === 1) {
      result += char;
    }
  }

  return result.split('').sort().join('');
}