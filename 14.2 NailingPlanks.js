function getSortedPrefixArr(C, size) {
  const r = new Array(size+1).fill(0);
  
  for (let value of C){
    r[value] = 1;
  }
  
  for (let i = 1; i < r.length; i++){
    r[i] += r[i-1];
  }
  
  return r;
}

function solution(A, B, C) {
  const size = C.length * 2;
  
  if (A.length === 1){
    for (let i = 0; i < C.length; i++){
      let cvalue = C[i];
      if (cvalue >= A[0] && cvalue <= B[0]){
        return i+1;
      }
    }
    
    return -1;
  }
  
  let smallerLength = 1;
  let biggerLength = C.length;
  step: while (true){
    let cLength = smallerLength + Math.floor((biggerLength - smallerLength) / 2);
    
    const prefixArr = getSortedPrefixArr(C.slice(0, cLength), size);
    for (let i = 0; i < A.length; i++){
      if (prefixArr[A[i]-1] >= prefixArr[B[i]]){
        if (smallerLength === biggerLength){
          return -1;
        }
        smallerLength = cLength+1;
        continue step;
      }
    }
    
    if (smallerLength === biggerLength){
      return biggerLength;
    }
    
    biggerLength = cLength;
  }
}