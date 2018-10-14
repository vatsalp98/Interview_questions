// ChessBoard
// Exercise on Page 38


let odd = " #";
let even = "# ";

let chessboard = "";

let size = 8;

for (let i = 1; i <= size; i++){
  if (i % 2 == 0){
    chessboard = even.repeat(size/2) + "\n";
  }
  else{
    chessboard = odd.repeat(size/2) + "\n";
  }

  console.log(chessboard);
}
