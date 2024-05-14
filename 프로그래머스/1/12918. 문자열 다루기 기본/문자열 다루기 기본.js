function solution(s) {
  let isTrue = true;

  s.split('').forEach((item) => {
    isNaN(parseInt(item)) === true ? (isTrue = false) : null;
  });

  if (isTrue) {
    if (s.length === 4 || s.length === 6) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}