function solution(my_string, index_list) {
  let result = [];
  index_list.map((v) => {
    result.push(my_string[v]);
  });
  return result.join('');
}