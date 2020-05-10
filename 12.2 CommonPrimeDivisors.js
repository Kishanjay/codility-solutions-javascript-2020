function gcd(a, b) {
  if (a % b === 0) {
    return b;
  } else {
    return gcd(b, a % b);
  }
}

function removePrimes(a, b){
  let remainder = 0;
  while (remainder != 1) {
    remainder = gcd(a, b);
    a /= remainder;
  }
  return a;
}

function solution(A, B) {
  let count = 0;
  
  for (let i = 0; i < A.length; i++) {
    let a = A[i];
    let b = B[i];
    
    let commonDivisor = gcd(a, b);
    
    if (removePrimes(a, commonDivisor) === 1 && removePrimes(b, commonDivisor) === 1){
      count++;
    }
  }
  
  return count;
}