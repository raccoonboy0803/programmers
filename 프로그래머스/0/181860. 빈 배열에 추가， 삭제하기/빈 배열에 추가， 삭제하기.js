function solution(arr, flag) {
  let result = [];
  flag.map((v, i) => {
    if (v === true) {
      for (let j = 0; j < arr[i] * 2; j++) {
        result.push(arr[i]);
      }
    } else {
      for (let j = 0; j < arr[i]; j++) {
        result.pop();
      }
    }
  });
  return result;
}