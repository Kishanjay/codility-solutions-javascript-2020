function solution(A) {
  let total = 0;
  
  let reachArr = new Array(A.length).fill(0);
  
  for (let i = 0; i < A.length; i++){
    let minReach = Math.max(i - A[i], 0);
    for (let j = minReach; j < i; j++){
      reachArr[j]++;
    }
  }
  
  for (let i = 0; i < A.length; i ++){
    const maxReach = Math.min(i + A[i], A.length-1);
    
    total += (maxReach-i) + reachArr[maxReach];
    if (total > 10000000){
      return -1;
    }
  }
  
  return total;
} 