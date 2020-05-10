function solution(A) {
  let smallestSliceAvg = (A[0] + A[1]) / 2;
  let smallestIndex = 0;
  
  for (let i = 0; i < A.length - 1; i++){
    let curAvg = (A[i] + A[i+1]) / 2;
    if (curAvg < smallestSliceAvg){
      smallestSliceAvg = curAvg;
      smallestIndex = i;
    }
    
    if (i+2 < A.length){
      curAvg = (A[i] + A[i+1] + A[i+2]) / 3;
      
      if (curAvg < smallestSliceAvg){
        smallestSliceAvg = curAvg;
        smallestIndex = i;
      }
    }
  }
  
  return smallestIndex;
}
