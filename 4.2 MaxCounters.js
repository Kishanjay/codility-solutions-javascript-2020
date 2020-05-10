function solution(N, A) {
  const result = new Array(N).fill(0);
  let maxValue = 0;
  let prevMaxValue = -1;
  
  for (let i = 0; i < A.length; i++){
    let value = A[i] - 1;
    
    if (value === N){
      if (maxValue !== prevMaxValue){
        result.fill(maxValue, 0, N);
        prevMaxValue = maxValue;
      }
      continue;
    }
    
    let newValue = ++result[value];
    if (newValue > maxValue){
      maxValue = newValue;
    }
  }
  
  return result;
}
