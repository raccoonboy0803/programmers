function solution(num_list, n) {
  let resultArr = [];
  num_list.map((value, index) => {
    if (index % n === 0) resultArr.push(num_list[index]);
  });
  return resultArr;
}