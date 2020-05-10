function solution(A) {
  const counts = new Map();
  
  let leader;
  
  for (let value of A) {
    if (!counts.has(value)){
      counts.set(value, 0);
    }
    
    let newCount = counts.get(value)+1;
    counts.set(value, newCount);
    if (!leader && newCount > A.length/2){
      leader = value;
    }
  }
  
  let rightLeaders = counts.get(leader);
  let leftLeaders = 0;
  
  let nrEquiLeaders = 0;
  for (let i = 0; i < A.length; i++){
    let value = A[i];
    
    if (leftLeaders > i/2 && rightLeaders > (A.length-i) / 2){
      nrEquiLeaders ++;
    }
    
    if (value === leader){
      leftLeaders++;
      rightLeaders--;
    }
  }
  
  return nrEquiLeaders;
}
