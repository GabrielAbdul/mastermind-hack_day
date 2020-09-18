#!/usr/bin/node

// print main prompt
// enter while loop
var Board = require('./mastermind.js').Board;
let board = new Board();
let row = 0;
while (row <= 9) {
	console.log('FIRST BOARD');
	board.printBoard();
	console.log(board.mastermind);
    // wait for input
    let code = board.get_guess();
	console.log(code);
	// update board with guess
	let codeString = board.updateRow(code, row);
	board.printBoard();
	// check input code against mastermind code
//	board.checkInput(codeString);
//    r = board.checkInput();

//    if (r === 1){
  //      printWinner();
  //      break;}
  //  board.printCheckerResults();
    row += 1;
}
// printLoser();
