function solution(arr1, arr2) {
  const sumArr1 = arr1.reduce((sum, val) => (sum += val), 0);
  const sumArr2 = arr2.reduce((sum, val) => (sum += val), 0);
  if (arr1.length > arr2.length) {
    return 1;
  } else if (arr1.length < arr2.length) {
    return -1;
  } else {
    return sumArr1 > sumArr2 ? 1 : sumArr1 < sumArr2 ? -1 : 0;
  }
}