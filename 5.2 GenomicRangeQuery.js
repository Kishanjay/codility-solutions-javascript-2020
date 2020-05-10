function solution(S, P, Q) {
  const DNA_MAP = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  }
  
  S = S.split('').map(char => DNA_MAP[char]);
  
  const PS = prefixSlice(S);
  
  const result = [];
  for (let i = 0; i < P.length; i++){
    
    let startIndex = P[i];
    let endIndex = Q[i];
    
    if (startIndex === endIndex) {
      result.push(S[startIndex]);
      continue;
    }
    
    if (startIndex === 0){
      result.push(smallestFromSlice(PS[endIndex]))
      continue;
    }
    
    startIndex--;
    
    const slice = {
      1: PS[endIndex][1] - PS[startIndex][1],
      2: PS[endIndex][2] - PS[startIndex][2],
      3: PS[endIndex][3] - PS[startIndex][3],
      4: PS[endIndex][4] - PS[startIndex][4],
    }
    
    result.push(smallestFromSlice(slice));   
  }
  
  return result;
}

function smallestFromSlice(slice) {
  return (slice[1] && 1) || (slice[2] && 2) || (slice[3] && 3) || (slice[4] && 4);
}

function prefixSlice(S){
  const ps = [];
  
  let prev = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  }
  
  for (let i = 0; i < S.length; i++){
    prev[S[i]] += 1;
    ps.push({...prev});
  }
  
  return ps;
}