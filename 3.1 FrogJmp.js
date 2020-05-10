function solution(X, Y, D) {
  const totalDelta = Y-X;
  return Math.ceil(totalDelta/D);
}