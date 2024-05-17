function solution(s) {
  let result = [];
  const splitS = s.split('');
  splitS.forEach((item, index) => {
    let findIndex = index;
    if (splitS.indexOf(item) === index) {
      result.push(-1);
    } else {
      for (let i = 0; i < index; i++) {
        if (index === i) break;
        if (splitS[i] === item) {
          findIndex = i;
        }
      }

      result.push(index - findIndex);
    }
  });

  return result;
}