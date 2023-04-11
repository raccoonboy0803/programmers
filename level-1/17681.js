//비밀지도

const solution = (n, arr1, arr2) => {
  let newArr1 = arr1.map((a) => a.toString(2).split(''));
  let newArr2 = arr2.map((a) => a.toString(2).split(''));
  newArr1.map((a) => {
    if (a.length < n) {
      while (a.length < n) {
        a.unshift('0');
      }
    }
  });
  newArr2.map((a) => {
    if (a.length < n) {
      while (a.length < n) {
        a.unshift('0');
      }
    }
  });
  let answer = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      newArr1[i][j] === '0' && newArr2[i][j] === '0'
        ? answer.push(' ')
        : answer.push('#');
    }
  }
  let result = [];
  for (let i = 0; i < answer.length; i += n) {
    result.push(answer.slice(i, i + n));
  }
  return result.map((a) => a.join(''));
};

// console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
// let num1 = 50;
// let num2 = 10;
// console.log(num1.toString(2));
// console.log(num2.toString(2));
