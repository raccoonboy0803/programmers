const solution = (players, callings) => {
  let playerMap = new Map();
  let rankMap = new Map();
  let newRank, preName;
  players.map((a, i) => playerMap.set(a, i + 1));
  players.map((a, i) => rankMap.set(i + 1, a));
  callings.map((b) => {
    newRank = playerMap.get(b) - 1;
    preName = rankMap.get(newRank);
    console.log(preName);
    rankMap.set(newRank, b);
    rankMap.set(newRank + 1, preName);
    playerMap.set(b, newRank);
    playerMap.set(preName, newRank + 1);
  });
  return Array.from(rankMap.values());
};
console.log(
  solution(
    ['mumu', 'soe', 'poe', 'kai', 'mine'],
    ['kai', 'kai', 'mine', 'mine']
  )
);
