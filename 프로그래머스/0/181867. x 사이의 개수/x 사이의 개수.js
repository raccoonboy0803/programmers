function solution(myString) {
  let result = [];
  myString.split('x').map((value) => result.push(value.length));
  return result;
}