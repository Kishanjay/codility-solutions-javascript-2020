function solution(H) {
  let stones = 0;
  let stack = [];
  
  
  for (let i = 0; i < H.length; i++){
    while (stack.length && stack[stack.length - 1] > H[i]){
      stack.pop();
    }
    
    if (stack.length && stack[stack.length-1] === H[i]) {
      continue;
    }
    
    stones ++;
    stack.push(H[i]);
  }
  
  return stones;
}