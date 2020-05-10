function gcd(a, b) {
  if (a % b === 0){
    return b;
  }
  return gcd(b, a % b);
}

function solution(N, M) {
  let lcm = (N*M) / gcd(N, M);
  
  return lcm / M;
}

solution(10, 4);