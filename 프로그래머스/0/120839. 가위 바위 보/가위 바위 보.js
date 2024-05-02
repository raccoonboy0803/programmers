function solution(rsp) {
  let result = [];
  const array = rsp.split('');
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 2) {
      result.push(0);
    } else if (array[i] == 0) {
      result.push(5);
    } else {
      result.push(2);
    }
  }
  return result.join('');
}