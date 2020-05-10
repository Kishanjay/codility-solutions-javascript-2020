function solution(N) {
  let root = Math.floor(Math.sqrt(N));
  
  
  let delta = 1;
  if (N % 2 === 1){
    delta = 2;
    
    if (root % 2 === 0){
      root--;
    }
  }
  
  for (let i = root; i > 0; i -= delta){
    
    if (N % i === 0){
      return 2*i + 2*(N/i)
    }
  }
  
  return -1;
}
