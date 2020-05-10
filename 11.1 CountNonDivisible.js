function solution(A) {
  const maxInt = A.length * 2;
  
  const numCount = new Array(maxInt + 1).fill(0);
  for (let value of A){
    numCount[value] += 1;
  }
  
  const divisors = new Array(maxInt + 1).fill(0);
  
  for (let num = 1; num < maxInt + 1; num++){
    for (let numFactor = num; numFactor < maxInt + 1; numFactor += num){
      divisors[numFactor] += numCount[num];
    }
  }
  
  const result = [];
  for (let i = 0; i < A.length; i++){
    result.push(A.length - divisors[A[i]]);
  }
  
  return result;
}