function solution(A) {
  let count = 0;
  
  if (A.length < 3) {
    return 0;
  }
  
  A = A.sort((a, b) => {
    return a-b;
  });
  
  for (let i = 0; i < A.length-2; i++){
    
    for (let j = i+1; j < A.length-1; j++){
      let k = j + 1;
      
      if (A[i] + A[j] > A[k]){
        if (A[k] === A[A.length - 1]) {
          k = A.length;
        }
      } else {
        continue;
      }
      while (k < A.length && (A[i] + A[j]) > A[k]){
        k++;
      }
      count += k - j - 1;
    }
  }
  
  return count;
}