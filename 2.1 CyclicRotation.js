function solution(A, K) {
  const shift = K % A.length;
  const result = [];
  
  for (let i = 0; i < A.length; i ++){
    let shiftedIndex = (i + shift) % A.length;
    result[shiftedIndex] = A[i];
  }
  
  return result;
}