function solution(people, limit) {
  let result = 0;
  let sortPeople = people.sort((a, b) => b - a);

  for (let i = 0, j = sortPeople.length - 1; i <= j; i++) {
    if (sortPeople[i] + sortPeople[j] <= limit) {
      result += 1;
      j--;
    } else {
      result += 1;
    }
  }

  return result;
}