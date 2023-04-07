const solution = (participant, completion) => {
  const myMap = new Map();
  let answer;
  participant.map((a) => {
    myMap.get(a) ? myMap.set(a, myMap.get(a) + 1) : myMap.set(a, 1);
  });
  completion.map((a) => {
    myMap.get(a) && myMap.set(a, myMap.get(a) - 1);
  });
  participant.map((a) => {
    myMap.get(a) && myMap.get(a) === 1 ? (answer = a) : null;
  });
  return answer;
};
console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);
