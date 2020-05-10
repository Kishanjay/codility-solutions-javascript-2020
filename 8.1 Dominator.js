function solution(A) {
  
  const stack = [];
  const counts = new Map();
  
  for (let value of A){
    if (!counts.has(value)){
      counts.set(value, 1);
    } else {
      counts.set(value, counts.get(value)+1);
    }
    
    if (!stack.length){
      stack.push(value);
      continue;
    }
    
    
    const head = stack.pop();
    if (head === value){
      stack.push(value);
      stack.push(head);
      continue;
    }
    
  }
  
  const dom = stack.pop();
  if (counts.get(dom) <= A.length / 2){
    return -1;
  }
  
  for (let i = 0; i < A.length; i++){
    if (A[i] === dom){ 
      return i;
    }
  }
  
  return -1;
}