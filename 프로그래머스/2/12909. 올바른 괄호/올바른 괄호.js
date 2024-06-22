function solution(s) {
  let check = 0;

  for (const i in s) {
    let cur = s[i];

    if (cur === '(') {
      check += 1;
    } else if (cur === ')') {
      check -= 1;
    }

    if (check < 0) {
      return false;
    }
  }

  return check === 0;
}