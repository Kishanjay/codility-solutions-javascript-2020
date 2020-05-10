function solution(A) {
  if (A.length === 1) {
    return Math.abs(A[0] + A[0]);
  }
  
  A = A.sort((a,b) => {
    return a-b;
  });
  
  if (A[A.length-1] <= 0){
    return Math.abs(A[A.length - 1] + A[A.length - 1]);
  }
  
  let startIndex = 0;
  let endIndex = A.length - 1;
  
  let min = Math.abs(A[endIndex] + A[startIndex]);
  
  while (startIndex < endIndex){
    const minValue = A[startIndex];
    const maxValue = A[endIndex];
    
    if (minValue === -1 * maxValue){
      return 0;
    }
    
    if (minValue >= 0){
      let potentialMin = Math.abs(minValue + minValue);
      min = Math.min(min, potentialMin);
      break;
    }
    
    if (maxValue <= 0){
      break;    
    }
    
    if (minValue <= 0 && maxValue >= 0){
      let potentialMin = Math.abs(minValue + maxValue);
      min = Math.min(min, potentialMin);
      if (Math.abs(minValue) > maxValue) {
        startIndex ++;
      } else if (maxValue > Math.abs(minValue)) {
        endIndex --;
      }
      continue;
    }
  }
  
  return min;
}