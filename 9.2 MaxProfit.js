function solution(A) {
  let minValue;
  let maxProfit = 0;
  
  for (let i = 0; i < A.length; i++){
    let value = A[i];
    
    if (minValue === undefined || value < minValue){
      minValue = value;
      continue;
    }
    
    maxProfit = Math.max(maxProfit, value-minValue);
  }
  
  return maxProfit
}