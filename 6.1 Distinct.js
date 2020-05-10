function solution(A) {
  if (!A.length){ 
    return 0;
  }
  
  A = A.sort();
  let distinct = 1;
  for (let i = 0; i < A.length - 1; i ++) {
    if (A[i] !== A[i+1]){
      distinct += 1;
    }
  }
  
  return distinct;
}
