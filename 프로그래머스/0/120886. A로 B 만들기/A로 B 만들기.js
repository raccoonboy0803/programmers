function solution(before, after) {
  let beforeStr = before;
  let afterStr = after;
  afterStr.split('').map((v) => {
    beforeStr = beforeStr.replace(v, '');
  });
  return beforeStr.length === 0 ? 1 : 0;
}