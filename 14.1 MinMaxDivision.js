function getPrefixSum(A){
  let ps = [];
  
  let prev = 0;
  for (let key of A){
    prev = prev + key;
    ps.push(prev);
  }
  
  return ps;
}

function solution(K, M, A) {
  const ps = getPrefixSum(A);
  const total = ps[ps.length-1];
  
  let maxAimBlockCount = total;
  let minAimBlockCount = Math.ceil(total / K);
  
  step: while (minAimBlockCount !== maxAimBlockCount){
    let aimBlockCount = minAimBlockCount + Math.floor((maxAimBlockCount - minAimBlockCount) / 2);
    
    let numberOfBlocks = 0;
    let currentBlockCount = 0;
    
    for (let i = 0; i < A.length; i++){
      let value = A[i];
      
      if (currentBlockCount + value > aimBlockCount){
        numberOfBlocks++;
        currentBlockCount = 0;
        i--;
        
        if (numberOfBlocks >= K){
          minAimBlockCount = aimBlockCount+1;
          continue step;
        }
      } else {
        currentBlockCount += value;
      }
    }
    
    if (numberOfBlocks < K && currentBlockCount <= aimBlockCount){
      maxAimBlockCount = aimBlockCount;
    }
  }
  
  return minAimBlockCount;
}
