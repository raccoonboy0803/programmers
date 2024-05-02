function solution(my_strings, parts) {
  let sumArr = [];
  parts.map((value, index) => {
    sumArr.push(my_strings[index].slice(value[0], value[1] + 1));
  });
  return sumArr.join('');
}