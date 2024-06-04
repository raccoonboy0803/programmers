function solution(numbers, hand) {
  const phoneNumber = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];
  const leftHandBoundary = [1, 4, 7];
  const rightHandBoundary = [3, 6, 9];
  let leftHandPosition = [3, 0];
  let rightHandPosition = [3, 2];
  let result = '';

  for (let i = 0; i < numbers.length; i++) {
    if (leftHandBoundary.includes(numbers[i])) {
      result += 'L';
      leftHandPosition = findElementIndex(phoneNumber, numbers[i]);
    } else if (rightHandBoundary.includes(numbers[i])) {
      result += 'R';
      rightHandPosition = findElementIndex(phoneNumber, numbers[i]);
    } else {
      const numberIndex = findElementIndex(phoneNumber, numbers[i]);
      const leftLength =
        Math.abs(numberIndex[0] - leftHandPosition[0]) +
        Math.abs(numberIndex[1] - leftHandPosition[1]);
      const rightLength =
        Math.abs(numberIndex[0] - rightHandPosition[0]) +
        Math.abs(numberIndex[1] - rightHandPosition[1]);

      if (leftLength > rightLength) {
        result += 'R';
        rightHandPosition = findElementIndex(phoneNumber, numbers[i]);
      } else if (leftLength < rightLength) {
        result += 'L';
        leftHandPosition = findElementIndex(phoneNumber, numbers[i]);
      } else {
        if (hand === 'right') {
          result += 'R';
          rightHandPosition = findElementIndex(phoneNumber, numbers[i]);
        } else {
          result += 'L';
          leftHandPosition = findElementIndex(phoneNumber, numbers[i]);
        }
      }
    }
  }

  function findElementIndex(matrix, element) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === element) {
          return [i, j];
        }
      }
    }
    return [-1, -1];
  }

  return result;
}