function solution(A) {
  const FIBARR = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025];
  
  let jumpMap = new Array(A.length + 1).fill(Number.MAX_VALUE);
  jumpMap[A.length] = 0;
  
  let minVal = Number.MAX_VALUE;
  for (let i = A.length-1; i >= -1; i--){
    if (A[i] === 0){
      continue;
    }
    
    for (let j= 2; j < FIBARR.length; j++){
      let f = FIBARR[j];
      let jumpIndex = i + f;
      
      if (jumpIndex > A.length){
        break;
      }
      
      if (jumpMap[jumpIndex] !== Number.MAX_VALUE){
        if (i === -1){
          minVal = Math.min(minVal, jumpMap[jumpIndex] + 1);
        } else {
          jumpMap[i] = Math.min(jumpMap[i], jumpMap[jumpIndex] + 1);
        }
        
      }
    }
    
    if (i === -1){
      if (minVal === Number.MAX_VALUE){
        return -1;
      }
      return minVal;
    }
  }
}
