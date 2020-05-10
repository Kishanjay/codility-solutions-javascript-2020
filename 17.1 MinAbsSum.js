function solution(A) {  
  if(!A.length) {
    return 0;
  }
  
  let count = {};
  let total = 0;
  let max = 0;
  for(let i = 0; i < A.length; i++) {
    A[i] = Math.abs(A[i]);
    total += A[i];
    max = Math.max(max, A[i]);
    
    if (A[i] in count) {
      count[A[i]]++;
    } else {
      count[A[i]] = 1;
    }
  }
  
  const goal = total / 2;
  
  let dp = new Array(total+1).fill(-1);
  dp[0] = 0;
  
  let smallestDelta = total;
  for(let i = 0; i <= max; i++) {
    if(count[i] > 0) {
      for(let j = 0; j < dp.length; j++) {
        if(dp[j] >= 0) {
          dp[j] = count[i];
        } else if(j >= i && dp[j - i] > 0) {
          dp[j] = dp[j - i] - 1;
        }
        
        if(dp[j] >= 0) {
          if(j === goal) {
            return 0;
          } else {
            smallestDelta = Math.min(smallestDelta, Math.abs(goal - j) * 2);
          }
        }
      }
    }
  }
  
  return smallestDelta;
}