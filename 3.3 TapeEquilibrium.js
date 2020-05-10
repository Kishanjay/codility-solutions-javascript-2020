function solution(A) {
  let right = A.reduce((prev,cur)=>prev+cur, 0);
  let left = 0;
  let minDelta;
  for (let i = 0; i < A.length-1; i++){
    let value = A[i];
    right-= value;
    left+= value;
    
    const newDelta = Math.abs(right-left);
    if (minDelta === undefined || newDelta < minDelta) {
      minDelta = newDelta;
    }  
  }
  return minDelta;
}