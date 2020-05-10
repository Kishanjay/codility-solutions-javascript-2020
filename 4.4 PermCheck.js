function solution(A) {
  const result = new Array(A.length).fill(false);
  
  for (let value of A){
    result[value-1] = true;
  }
  
  for (let value of result) {
    if (value === false){
      return 0;
    }
  }
  
  return 1;
}
