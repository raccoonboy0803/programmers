function solution(id_pw, db) {
  const id = id_pw[0];
  const pwd = id_pw[1];
  let result = 'fail';

  for (let i = 0; i < db.length; i++) {
    let currentId = db[i][0];
    let currentpwd = db[i][1];

    if (currentId === id && currentpwd === pwd) {
      result = 'login';
      break;
    } else if (currentId === id && currentpwd !== pwd) {
      result = 'wrong pw';
      continue;
    }
  }
  return result;
}