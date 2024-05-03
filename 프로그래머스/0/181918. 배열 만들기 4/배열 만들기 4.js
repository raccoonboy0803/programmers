function solution(arr) {
  let i = 0;
  let stk = [];

  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i += 1;
    } else if (stk.length !== 0 && stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i += 1;
    } else if (stk.length !== 0 && stk[stk.length - 1] >= arr[i]) {
      stk.pop();
    }
  }

  return stk;
}