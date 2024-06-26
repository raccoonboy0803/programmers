function solution(n) {
  let endCondition = true;
  let increaseN = n;
  const oneCount = n.toString(2).match(/1/g).length;

  while (endCondition) {
    increaseN++;
    let binary = increaseN.toString(2);
    if (binary.toString(2).match(/1/g).length === oneCount) {
      endCondition = false;
      const decimalNumber = parseInt(binary, 2);
      return decimalNumber;
    }
  }
}