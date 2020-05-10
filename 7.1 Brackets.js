function solution(S) {
  S = S.split('');
  
  let queue = [];
  
  const CMAP = {
    '}': '{',
    ']': '[',
    ')': '(',
  }
  
  const openTags = Object.values(CMAP);
  
  for (let value of S) {
    if (openTags.includes(value)) {
      queue.push(value);
      continue;
    }
    
    const queueTop = queue.pop();
    if (CMAP[value] !== queueTop){
      return 0;
    }
  }
  
  if (queue.length){ return 0;}
  
  return 1;
}