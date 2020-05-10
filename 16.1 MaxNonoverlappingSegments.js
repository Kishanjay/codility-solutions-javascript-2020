function solution(A, B) {
  let size = 0;
  let end = B[B.length -1] + 1;
  for (let i = B.length - 1; i >= 0; i--){
    if (B[i] >= end){
      continue
    }
    
    i = getBest(A, B, i, A[i]);
    end = A[i];
    size++
  }
  return size;
}

function getBest(A, B, i, min){
  let bestIndex = i;
  let highestMin = min;
  while (B[i] > min && i >= 0){
    if (A[i] >= highestMin){
      highestMin = A[i];
      bestIndex = i;
    }
    
    i --;
  }
  return bestIndex;
}