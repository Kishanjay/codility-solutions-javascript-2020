function solution(A, B) {
  let upstreamers = [];
  let downstreamers = [];
  
  for (let i = 0; i < A.length; i++){
    const fish = A[i];
    
    if (B[i] === 0){
      while (true){
        if (!downstreamers.length){
          upstreamers.push(fish);
          break;
        }
        
        let downhead = downstreamers.pop();
        if (fish < downhead){
          downstreamers.push(downhead);
          break;
        }
      }
    }
    else {
      downstreamers.push(fish);
    }
  }
  
  return upstreamers.length + downstreamers.length;
}
