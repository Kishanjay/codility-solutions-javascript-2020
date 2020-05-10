function solution(A) {
  const PS = prefixSlice(A);
  const totalOnes = PS[PS.length-1];
  
  let total = 0;
  for (let i = 0; i < A.length; i ++){
    if (A[i] === 0){
      total += totalOnes - PS[i];
      if (total > 1000000000){
        return -1;
      }
    }        
  }
  
  return total;
}


function prefixSlice(A) {
  let result = [];
  
  let cur = 0;
  for (let value of A){
    if (value === 1){
      cur ++;
    }
    
    result.push(cur);
  }
  
  return result;
}