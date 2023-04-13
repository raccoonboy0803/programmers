function solution(str) {
  let answer = 0;
  let stack = [];
  let arr = str.split('X');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      stack.push(j + 1);
    }
  }
  answer = stack.reduce((sum, a) => (sum += a), 0);
  return answer;
}

let str = 'OXOOOXXXOXOOXOOOOOXO';
console.log(solution(str));
