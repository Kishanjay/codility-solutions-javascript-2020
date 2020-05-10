function solution(A) {
  let pa = new Array(A.length);
  let end = A.length - 1;
  
  pa[end] = A[end];
  
  for (let i = end - 1; i >= 0; i--){
    let max = pa[i+1];
    
    for (let j = i+2; j < i+7 && j <= end; j++){
      max = Math.max(max, pa[j]);
    }
    
    pa[i] = A[i] + max;
  }
  
  return pa[0];
}