function solution(str_list, ex) {
  let result = [];
  str_list.map((v) => {
    if (!v.includes(ex)) result.push(v);
  });
  return result.join('');
}