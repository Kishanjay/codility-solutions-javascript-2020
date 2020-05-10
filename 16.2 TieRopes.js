function solution(K, A) {
  let currentLength = 0;
  let count = 0;
  for (let i = 0; i < A.length; i++){
    currentLength += A[i];
    
    if (currentLength >= K){
      currentLength = 0;
      count++;
    }
  }
  return count;
}
