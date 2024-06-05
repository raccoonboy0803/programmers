function solution(survey, choices) {
  let surveyObj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  let surveyArr = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
  let answer = '';

  for (let i = 0; i < choices.length; i++) {
    if (choices[i] > 4) {
      surveyObj[survey[i][1]] += choices[i] - 4;
    } else if (choices[i] < 4) {
      surveyObj[survey[i][0]] += Math.abs(choices[i] - 4);
    }
  }

  for (let i = 0; i < surveyArr.length; i += 2) {
    if (surveyObj[surveyArr[i]] >= surveyObj[surveyArr[i + 1]]) {
      answer += surveyArr[i];
    } else if (surveyObj[surveyArr[i]] < surveyObj[surveyArr[i + 1]]) {
      answer += surveyArr[i + 1];
    }
  }

  return answer;
}