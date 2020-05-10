function solution(A) {
  
  const result = {};
  for (let value of A){
    result[Math.abs(value)] = true;
  }
  
  return Object.keys(result).length;
}