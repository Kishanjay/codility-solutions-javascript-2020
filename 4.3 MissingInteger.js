function solution(A) {
  const count = {};
  let highest = 0;
  
  for ( let i = 0; i < A.length; i ++){
    let value = A[i];
    
    if (value > highest) {
      highest = value;
    }
    
    count[value] = true;
  }
  
  if (highest <= 0){
    return 1;
  }
  
  
  let i = 1;
  while (true){
    if (!(i in count)){
      return i;
    } 
    
    i++;   
  }
}