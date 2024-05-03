function solution(my_string, indices) {
  let copyArr = Array.from(my_string);
  let resultArr = [];
  copyArr.filter((v, i) => {
    if (!indices.includes(i)) resultArr.push(v);
  });
  return resultArr.join('');
}