function solution(arr1, arr2) {
  const result = Array.from(Array(arr1.length), () =>
    Array.from(arr1[0].length)
  );

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      result[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return result;
}