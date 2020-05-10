function solution(A, B) {
  const result = [];
  const prefixMap = new Map();
  
  const createPrefixMap = (max, mod) => {
    const pa = new Array(max+1);
    pa[1] = 1 % mod;
    pa[2] = 2 % mod;
    for (let i = 3; i <= max; i++){
      pa[i] = (pa[i-1] + pa[i-2]) % mod;
    }
    return pa;
  }
  
  const getPrefixMap = (max, mod) => {
    if (prefixMap.has(mod)){
      const pa = prefixMap.get(mod);
      
      if (pa.length <= max){
        for (let i = pa.length; i <= max; i++){
          pa[i] = (pa[i-1] + pa[i-2]) % mod;
        }
        
        prefixMap.set(mod, pa);
      }
      return pa;
    } else {
      const pa = createPrefixMap(max, mod);
      prefixMap.set(mod, pa);
      return pa;
    }
  }
  
  for (let i = 0; i < A.length; i++){
    const mod = 2**B[i];
    const rungs = A[i];
    const prefixArr = getPrefixMap(rungs, mod);
    const options = prefixArr[rungs];
    
    result.push(options);
  }
  
  return result;
}