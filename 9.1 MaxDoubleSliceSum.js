function solution(A) {
  
  const maxSlicesLeft = new Array(A.length).fill(0);
  const maxSlicesRight = new Array(A.length).fill(0);
  
  for (let leftIndex = 1, rightIndex = A.length-2; rightIndex >= 2; leftIndex++, rightIndex--) {
    maxSlicesLeft[leftIndex] = Math.max(0, maxSlicesLeft[leftIndex-1] + A[leftIndex]);
    maxSlicesRight[rightIndex] = Math.max(0, maxSlicesRight[rightIndex+1] + A[rightIndex]);
  }
  
  let maxSlice = maxSlicesLeft[0] + maxSlicesRight[2];
  
  for (let i = 2; i < A.length-1; i++) {
    maxSlice = Math.max(maxSlice, maxSlicesLeft[i-1] + maxSlicesRight[i+1]);
  }
  
  return maxSlice;
}