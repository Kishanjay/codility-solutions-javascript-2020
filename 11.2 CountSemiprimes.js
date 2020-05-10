function getSieveOfErosthenes(N) {
  if (N === 1){
    return [false, false];
  }
  
  const result = new Array((N/2)+1).fill(true);
  
  for (let i = 2; i < (N+1)/2; i++){
    
    
    if (result[i]){
      
      for (let j = i*i; j < (N+1)/2; j+=i){
        result[j] = false;
      }
    }
  }
  
  return result;
}

function solution(N, P, Q) { 
  const sieve = getSieveOfErosthenes(N);
  
  const semiprimeCount = new Array(N+1).fill(0);
  for (let i = 2; i < (N+1)/2; i++){
    if (!sieve[i]){
      continue;
    }
    
    for (let j = i; i*j <= N; j++){
      if (!sieve[j]){
        continue;
      }
      semiprimeCount[i*j] += 1;
    }
  }
  
  for (let i = 1; i < semiprimeCount.length; i++){
    semiprimeCount[i] += semiprimeCount[i-1];
  }
  
  const result = [];
  for (let i = 0; i < P.length; i++){
    
    result.push(semiprimeCount[Q[i]] - semiprimeCount[P[i]-1])
  }
  
  return result;
}