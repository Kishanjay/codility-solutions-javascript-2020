

function solution(A) {
  const count = {}
  for (let num of A) {
    if (! (num in count)) {
      count[num] = 1;
    } else {
      count[num] += 1;
    }
  }
  
  for (let key in count) {
    if (count[key]%3 === 1){
      return parseInt(key);
    }
  }
  
  return null;
}