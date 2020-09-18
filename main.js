#!/usr/bin/node

// print main prompt
// enter while loop
var Board = require('./master.js').Board;
let board = new Board();
let row = 1;
while (row <= 10) {
	board.printBoard();
	console.log(board.mastermind);
    // wait for input
    let code = board.get_guess();
	console.log(code);
	// update board with guess
	board.updateRow(code, row);
	board.printBoard();
	// check input code agains mastermind
//    r = board.checkInput();

//    if (r === 1){
  //      printWinner();
  //      break;}
  //  board.printCheckerResults();
    row += 1;
	console.log(row);
}
// printLoser();
