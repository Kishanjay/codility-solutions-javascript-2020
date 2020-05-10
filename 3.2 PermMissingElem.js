function solution(A) {
  const map = new Map();
  
  for (let value of A) {
    map.set(value, true);
  }
  
  let counter = 1;
  while (true){
    if (!map.has(counter)){
      return counter;
    }
    counter++;
  }
}