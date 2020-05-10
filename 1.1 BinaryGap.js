function solution(N) {
  const binary = N.toString(2);
  let start = -1;
  let longest = 0;
  for (let i = 0; i < binary.length; i++){
    if (binary[i] === '1'){
      if (start !== -1){
        longest = Math.max(longest, i - start - 1);
      }
      start = i;
    }
  }
  return longest;
}