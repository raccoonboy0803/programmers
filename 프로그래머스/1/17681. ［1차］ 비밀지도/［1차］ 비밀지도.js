function solution(n, arr1, arr2) {
  let binArr1 = arr1.map((item) => decimalToBinary(item));
  binArr1 = binArr1.map((item) => item.padStart(n, '0'));

  let binArr2 = arr2.map((item) => decimalToBinary(item));
  binArr2 = binArr2.map((item) => item.padStart(n, '0'));

  let result = Array.from(Array(n), () => new Array(n).fill('0'));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (binArr1[i][j] === '1' || binArr2[i][j] === '1') {
        result[i][j] = '#';
      } else {
        result[i][j] = ' ';
      }
    }
  }

  return result.map((item) => item.join(''));

  function decimalToBinary(decimal) {
    return decimal.toString(2);
  }
}