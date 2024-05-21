function solution(name, yearning, photo) {
  const result = [];

  photo.forEach((item) => {
    let sum = 0;
    item.forEach((ele) => {
      if (name.indexOf(ele) === -1) {
        sum = sum;
      } else {
        sum += yearning[name.indexOf(ele)];
      }
    });
    result.push(sum);
  });

  return result;
}