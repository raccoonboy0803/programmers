function solution(N, arr1) {
  let answer = Array.from(Array(N), () => new Array(N));
  let stack = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] !== '.') {
        answer[i][j] = '*';
      } else {
        stack = [];
        for (let a = i - 1; a <= i + 1; a++) {
          for (let b = j - 1; b <= j + 1; b++) {
            if (isNaN(Number((arr1[a] ?? [])[b])) !== true) {
              stack.push(Number((arr1[a] ?? [])[b]));
            }
          }
          let stackSum = stack.reduce((sum, a) => (sum += a), 0);
          if (stackSum >= 10) {
            answer[i][j] = 'M';
          } else {
            answer[i][j] = stackSum;
          }
        }
      }
    }
  }
  return answer;
}
// let N = 5;
// let arr1 = [
//   ['1', '.', '.', '.', '.'],
//   ['.', '.', '3', '.', '.'],
//   ['.', '.', '.', '.', '.'],
//   ['.', '4', '.', '.', '.'],
//   ['.', '.', '.', '9', '.'],
// ];

let N = 4;
let arr1 = [
  ['2', '.', '.', '.'],
  ['.', '.', '9', '.'],
  ['.', '3', '.', '2'],
  ['.', '4', '.', '.'],
];
console.log(solution(N, arr1));
