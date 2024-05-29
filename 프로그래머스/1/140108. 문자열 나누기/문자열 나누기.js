function solution(s) {
  let sameCount = 0;
  let differentCount = 0;
  let splitCount = 0;
  let splitS = s.split('');

  while (splitS.length > 0) {
    let current = splitS[0];
    sameCount = 1;
    differentCount = 0;

    for (let i = 1; i < splitS.length; i++) {
      if (splitS[i] === current) {
        sameCount++;
      } else {
        differentCount++;
      }
      if (sameCount === differentCount) {
        splitS = splitS.slice(i + 1);
        splitCount++;
        break;
      }
    }
    if (sameCount !== differentCount) {
      splitCount++;
      break;
    }
  }

  return splitCount;
}


