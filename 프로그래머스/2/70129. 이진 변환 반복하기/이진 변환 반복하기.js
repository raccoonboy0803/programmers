function solution(s) {
  let zeroCount = 0;
  let binaryCount = 0;

  while (s !== '1') {
    const delZeroS = s.replace(/0/g, '');
    zeroCount += s.length - delZeroS.length;

    s = delZeroS.length.toString(2);
    binaryCount++;
  }

  return [binaryCount, zeroCount];
}