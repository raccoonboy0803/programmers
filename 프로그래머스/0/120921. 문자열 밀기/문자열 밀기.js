function solution(A, B) {
  let result;
  let count = 0;
  while (count !== 100) {
    if (A === B) return count;
    A = pushString(A);
    if (A === B) {
      count++;
      result = count;
      break;
    } else {
      count++;
      result = count;
    }
  }
  if (count === 100) {
    return -1;
  } else {
    return result;
  }

  function pushString(string) {
    const lastString = string[string.length - 1];
    let stringArr = string.split('');
    stringArr.pop();
    stringArr.unshift(lastString);
    return stringArr.join('');
  }
}