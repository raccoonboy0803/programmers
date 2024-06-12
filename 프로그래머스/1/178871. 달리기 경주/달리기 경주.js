function solution(players, callings) {
  const map = new Map(players.map((val, index) => [val, index]));

  for (let i = 0; i < callings.length; i++) {
    const player = callings[i];
    const currentIndex = map.get(player);

    const prevIndex = currentIndex - 1;
    const prevPlayer = players[prevIndex];

    map.set(player, prevIndex);
    map.set(prevPlayer, currentIndex);

    [players[prevIndex], players[currentIndex]] = [
      players[currentIndex],
      players[prevIndex],
    ];
  }

  return players;
}