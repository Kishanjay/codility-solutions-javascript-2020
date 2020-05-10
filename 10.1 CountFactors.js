function solution(N) {
  if (N === 1) {
    return 1;
  }
  
  let count = 2;
  
  const root = Math.sqrt(N);
  for (let i = 2; i < root; i ++){
    if ( N % i === 0){
      count += 2;   
    }
  }
  
  if (N % root === 0){
    count += 1;
  }
  
  return count;
}