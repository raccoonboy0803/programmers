function solution(l, r) {
  let result = [];
  let arr = [];
  let isInclude = true;
  for (let i = l; i <= r; i++) {
    isInclude = true;
    arr = i.toString().split('');

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== '0' && arr[j] !== '5') {
        isInclude = false;
        break;
      }
    }
    if (isInclude) result.push(i);
  }
  return result.length === 0 ? [-1] : result;
}