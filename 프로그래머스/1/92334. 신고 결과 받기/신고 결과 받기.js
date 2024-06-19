function solution(id_list, report, k) {
  let answer = new Array(id_list.length).fill(0);

  let rep = {};
  let singo = {};

  for (let i = 0; i < id_list.length; i++) {
    rep[id_list[i]] = new Set();
    singo[id_list[i]] = 0;
  }

  for (let i = 0; i < report.length; i++) {
    let temp = report[i].split(' ');
    if (!rep[temp[0]].has(temp[1])) {
      rep[temp[0]].add(temp[1]);
      singo[temp[1]]++;
    }
  }

  for (let i = 0; i < id_list.length; i++) {
    let n = rep[id_list[i]];
    for (let j of n) {
      if (singo[j] >= k) {
        answer[i]++;
      }
    }
  }

  return answer;
}