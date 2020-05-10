function solution(M, A) {
  if (A.length === 1 ){
    return 1;
  }
  
  
  let count = 0;
  let startIndex = 0;
  let endIndex = 0;
  
  const map = {};
  
  while (true) {
    const startValue = A[startIndex];
    const endValue = A[endIndex];
    
    if (startIndex === A.length){
      count++;
      break;
    }
    
    if (endValue in map){
      startIndex ++;
      
      delete map[startValue];
      continue;
    }
    
    if (endIndex+1 >= A.length){
      count += (endIndex - startIndex) + 1;
      break;
    }
    
    count += (endIndex - startIndex) + 1;
    map[endValue] = true;
    endIndex ++;
  }
  
  return Math.min(1000000000, count);
}