function solution(num_list) {
  let result = [...num_list];
  const lastElement = num_list[num_list.length - 1];
  const lastPreElement = num_list[num_list.length - 2];
  lastElement > lastPreElement
    ? result.push(lastElement - lastPreElement)
    : result.push(lastElement * 2);
  return result;
}