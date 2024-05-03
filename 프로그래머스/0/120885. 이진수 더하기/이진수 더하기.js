function solution(bin1, bin2) {
  const bin1Base10 = parseInt(bin1, 2);
  const bin2Base10 = parseInt(bin2, 2);

  return (bin1Base10 + bin2Base10).toString(2);
}