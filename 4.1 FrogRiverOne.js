function solution(A, X) {
  let rest = (A * (A+1)) / 2;
  
  const fallen = new Map();
  for (let i = 0; i < X.length; i++){
    const value = X[i];
    if (fallen.has(value) || value > A){
      continue;
    }
    
    fallen.set(value, true);
    rest -= value;
    
    if (rest <= 0){
      return i;
    }
  }
  return -1;
}