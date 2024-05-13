function solution(arr) {
  const minElement = [...arr].sort((a, b) => a - b).shift();
  const minIndex = arr.indexOf(minElement);
  arr.splice(minIndex, 1);
  return arr.length === 0 ? [-1] : arr;
}