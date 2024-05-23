function solution(answers) {
  const firstPerson = [1, 2, 3, 4, 5];
  const secondPerson = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdPerson = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let firstCount = 0;
  let secondCount = 0;
  let thirdCount = 0;

  answers.forEach((answer, index) => {
    if (answer === firstPerson[index % 5]) firstCount += 1;
    if (answer === secondPerson[index % 8]) secondCount += 1;
    if (answer === thirdPerson[index % 10]) thirdCount += 1;
  });

  const countArr = [firstCount, secondCount, thirdCount];

  const MaxCount = Math.max(...countArr);
  const sameMax = countArr.filter((count) => count === MaxCount).length;
  if (sameMax === 1) {
    return [countArr.indexOf(MaxCount) + 1];
  } else if (sameMax === 2) {
    return [countArr.indexOf(MaxCount) + 1, countArr.lastIndexOf(MaxCount) + 1];
  } else {
    return [1, 2, 3];
  }
}