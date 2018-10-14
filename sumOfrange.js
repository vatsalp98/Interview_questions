let output = [];
function range (start, end, step = 1){

  if (step < 0){
    for (let i = start; i >= end; i = i - Math.abs(step)){
      output.push(i);
    }
    return output;
  }

  else {
    for (let i = start; i <= end; i = i + Math.abs(step)){
      output.push(i);
    }
    return output;
  }
}

function sum(output){
  let result = 0;
  for(let i = 0; i < output.length; i++){
    result = result + output[i];
  }
  return result;
}


console.log(range(5, 2, -1));
console.log(sum(output));
