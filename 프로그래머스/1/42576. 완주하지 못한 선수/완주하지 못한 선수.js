function solution(participant, completion) {
  const participantMap = new Map();
  let result = '';

  participant.forEach((ele) => {
    if (participantMap.has(ele)) {
      participantMap.set(ele, participantMap.get(ele) + 1);
    } else {
      participantMap.set(ele, 1);
    }
  });

  completion.forEach((ele) => {
    if (participantMap.has(ele)) {
      participantMap.set(ele, participantMap.get(ele) - 1);
    }
  });

  for (const [key, value] of participantMap) {
    if (value !== 0) {
      result = key;
      break;
    }
  }
  return result;
}