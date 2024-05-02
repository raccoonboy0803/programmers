function solution(todo_list, finished) {
  let resultArr = [];
  for (let i = 0; i < todo_list.length; i++) {
    if (finished[i] === false) {
      resultArr.push(todo_list[i]);
    }
  }
  return resultArr;
}