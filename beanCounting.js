// function to count a specific Char in a specific string
function countBs(myString){
  return countChar(myString, "B");
}

function countChar(myString, myChar){
  let counter = 0;
  for(let i = 0; i < myString.length; i++){
    if(myString[i] == myChar){
      counter++;
    }
  }
  return counter;
}

console.log(countBs("BBCBB"));
console.log(countChar("kakkerlak", "k"));
