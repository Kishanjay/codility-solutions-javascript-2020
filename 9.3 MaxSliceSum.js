function solution(A) {
  let maxSum = A[0];
  let sliceSum = undefined;
  
  for (let i = 0; i < A.length; i++){
    if (sliceSum === undefined){
      sliceSum = A[i];
      continue;
    }
    
    sliceSum = Math.max(sliceSum + A[i], A[i]);
    maxSum = Math.max(maxSum, sliceSum);
  }
  
  return maxSum;
}