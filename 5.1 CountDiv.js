function solution(A, B, K) {
  let restA = A/K;
  let restB = B/K;
  
  let total = Math.floor(restB) - Math.floor(restA);
  
  if (restA % 1 === 0 || (total === 1 && restB % 1 === 0)){
    total ++;
  }
  return total;
}