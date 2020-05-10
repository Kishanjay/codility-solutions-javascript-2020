function solution(A) {
  A = A.sort((a,b) => a-b);
  
  
  return Math.max(A[0]*A[1]*A[A.length-1], A[A.length-1]*A[A.length-2]*A[A.length-3]);
}