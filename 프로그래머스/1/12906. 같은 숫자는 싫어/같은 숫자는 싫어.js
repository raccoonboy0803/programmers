function solution(arr) {
  let answer = [];
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      continue;
    } else {
      answer.push(arr[i - 1]);
    }
  }
  return answer;
}