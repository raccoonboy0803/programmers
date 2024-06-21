function solution(friends, gifts) {
  let answer = Array.from({ length: friends.length }, () => 0);
  const presentGraph = Array.from({ length: friends.length }, () =>
    Array.from({ length: friends.length }, () => 0)
  );

  gifts.forEach((gift) => {
    const give = gift.split(' ')[0];
    const get = gift.split(' ')[1];

    const giveIndex = friends.indexOf(give);
    const getIndex = friends.indexOf(get);

    presentGraph[giveIndex][getIndex] += 1;
  });

  const presentIndexGraph = Array.from({ length: friends.length }, () =>
    Array.from({ length: 3 }, () => 0)
  );

  friends.forEach((item, index) => {
    presentIndexGraph[index][0] = presentGraph[index].reduce(
      (sum, val) => sum + val,
      0
    );

    for (let i = 0; i < presentGraph.length; i++) {
      presentIndexGraph[index][1] += presentGraph[i][index];
    }

    for (let i = 0; i < presentIndexGraph.length; i++) {
      presentIndexGraph[i][2] =
        presentIndexGraph[i][0] - presentIndexGraph[i][1];
    }
  });

  for (let i = 0; i < presentGraph.length; i++) {
    for (let j = i; j < presentGraph[i].length; j++) {
      if (i === j) {
        continue;
      }
      if (presentGraph[i][j] > presentGraph[j][i]) {
        answer[i] += 1;
      } else if (presentGraph[i][j] < presentGraph[j][i]) {
        answer[j] += 1;
      } else {
        if (presentIndexGraph[i][2] > presentIndexGraph[j][2]) {
          answer[i] += 1;
        } else if (presentIndexGraph[i][2] < presentIndexGraph[j][2]) {
          answer[j] += 1;
        }
      }
    }
  }
  return Math.max(...answer);
}