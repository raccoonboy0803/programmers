function solution(polynomial) {
  const xArr = polynomial
    .split(' ')
    .join('')
    .split('+')
    .filter((num) => isNaN(num) === true);

  // console.log('xArr::', xArr);

  let numXArr = xArr.map((item) => {
    return item.replace('x', '');
  });

  // console.log('numXArr::', numXArr);

  const numArr = polynomial
    .split(' ')
    .map((item) => {
      return Number(item);
    })
    .filter((num) => isNaN(num) === false);

  // console.log('numArr::', numArr);

  const xNumber = numXArr
    .map((item) => Number(item))
    .filter((item) => isNaN(item) === false)
    .reduce((sum, val) => {
      if (val === 0) {
        return (sum += 1);
      } else {
        return (sum += val);
      }
    }, 0);

  // console.log(numXArr.map((item) => Number(item)));
  // console.log('xNumber::', xNumber);

  if (xNumber === 0) {
    return `${numArr.reduce((sum, val) => (sum += val), 0)}`;
  } else if (numArr.length === 0) {
    return `${xNumber === 1 ? '' : xNumber}x`;
  } else {
    return `${xNumber === 1 ? '' : xNumber}x + ${numArr.reduce(
      (sum, val) => (sum += val),
      0
    )}`;
  }
}