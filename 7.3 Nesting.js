function solution(S) {
  S = S.split('');
  
  let queue = [];
  
  for (let value of S) {
    if (value === '('){
      queue.push(value);
    }
    
    else {
      let end = queue.pop();
      if (end !== '('){
        return 0;
      }
    }
    
  }
  
  if (queue.length) {
    return 0;
  }
  
  return 1;
}
