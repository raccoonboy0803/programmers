function solution(balls, share) {
  const ballsArray = Array.from(Array(balls), (_, index) => index + 1).reduce(
    (a, b) => a * b,
    1
  );
  const shareArray = Array.from(Array(share), (_, index) => index + 1).reduce(
    (a, b) => a * b,
    1
  );
  const minusArray = Array.from(
    Array(balls - share),
    (_, index) => index + 1
  ).reduce((a, b) => a * b, 1);

  return Math.round(ballsArray / (shareArray * minusArray));
}