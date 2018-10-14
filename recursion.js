// function to check if a positive integer is Odd or Even
function isEven(a){
    if(a < 0){
      a = -a;
    }
    if (a == 0){
      return true;
    }
    else if(a == 1){
      return false;
    }
    else{
      a = a - 2;
      return isEven(a);
    }
}

console.log(isEven(75));
