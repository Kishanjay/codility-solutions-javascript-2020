function randomArray(start, end, size){
  const result = [];

  const delta = end-start;
  for (let i = 0; i < size; i++){
    result.push(Math.floor(Math.random() * delta + 0.5) + start);
  }

  return result;
}

function assertEqual(output, expected){
  const success = output.toString() === expected.toString();
  console.log(success ? 'SUCCESS' : 'FAILURE')
  console.log('Output: '+output);
  console.log('Expected: '+expected);
  console.log('\n');
  
  return output.toString() === expected.toString();
}
