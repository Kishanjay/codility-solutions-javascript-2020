function solution(A) {
  const peaks = [];
  for (let i = 1; i < A.length-1; i++) {
    if (A[i] > A[i-1] && A[i] > A[i+1]) {
      peaks.push(i);
    }
  }  
  
  for (let numberOfBlocks = peaks.length; numberOfBlocks > 0; numberOfBlocks--) {
    if ((A.length % numberOfBlocks) !== 0) {
      continue;
    }
    
    const blockSize = A.length / numberOfBlocks;
    let blockIndex = 0;
    for (let p of peaks) {
      if (p >= blockIndex*blockSize && p < (blockIndex+1)*blockSize) {
        blockIndex++;
      }
    }
    if (blockIndex === numberOfBlocks) {
      return numberOfBlocks;
    }
  }
  
  return 0;
  
}