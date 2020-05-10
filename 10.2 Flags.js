function solution(A) {
  if (A.length <= 2) return 0;
  
  const peaks = [];
  for (let i = 1; i < A.length-1; i++) {
    if (A[i] > A[i-1] && A[i] > A[i+1]) {
      peaks.push(i);
    }
  }  
  if (peaks.length <=2) {
    return peaks.length;
  }
  
  const potentialFlags = Math.round((Math.sqrt(peaks[peaks.length-1] - peaks[0]) + 1));
  
  for (let i = potentialFlags; i >= 2; i--) {
    let count = 1;
    let curPos = peaks[0];
    for (let j = 1; j < peaks.length; j++) {
      if (curPos + i <= peaks[j]) {
        curPos = peaks[j];
        count++;
      }
    }
    if (count >= i) return i;
  }
  
  return 2;
}