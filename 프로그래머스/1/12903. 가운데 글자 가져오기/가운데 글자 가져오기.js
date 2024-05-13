function solution(s) {
  const stringLength = s.length;
  const middleIndex = Math.floor(stringLength / 2);
  if (stringLength % 2 === 1) {
    return s[middleIndex];
  } else {
    return s.slice(middleIndex - 1, middleIndex + 1);
  }
}