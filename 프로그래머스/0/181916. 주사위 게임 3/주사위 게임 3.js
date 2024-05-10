function solution(a, b, c, d) {
  const diceArr = [a, b, c, d].sort((a, b) => a - b);
  const removeDuplicates = [...new Set(diceArr)];
  const removeDuplicatesLength = [...new Set(diceArr)].length;
  if (removeDuplicatesLength === 1) {
    return 1111 * a;
  } else if (removeDuplicatesLength === 2) {
    let type = 1;
    let sameNumber = 0;
    let restNumber = 0;
    if (diceArr.filter((item) => item === removeDuplicates[0]).length === 2) {
      type = 2;
    }

    if (type === 1) {
      for (let i = 0; i < diceArr.length; i++) {
        if (diceArr.filter((val) => val === diceArr[i]).length > 1) {
          sameNumber = diceArr[i];
        } else {
          restNumber = diceArr[i];
        }
      }
      return (10 * sameNumber + restNumber) ** 2;
    } else if (type === 2) {
      return (
        (removeDuplicates[0] + removeDuplicates[1]) *
        Math.abs(removeDuplicates[0] - removeDuplicates[1])
      );
    }
  } else if (removeDuplicatesLength === 3) {
    let returnArr = [];
    for (let i = 0; i < diceArr.length; i++) {
      if (diceArr.filter((item) => item === diceArr[i]).length === 1) {
        returnArr.push(diceArr[i]);
      }
    }
    return returnArr[0] * returnArr[1];
  } else {
    return removeDuplicates.sort((a, b) => a - b)[0];
  }
}