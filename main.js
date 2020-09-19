#!/usr/bin/node

// print main prompt
// enter while loop
var Board = require('./mastermind.js').Board;
let board = new Board();
let row = 0;
while (row <= 9) {
	let counter = 0;
	let count = 0;
	board.printBoard();
    // wait for input
    let code = board.get_guess();
	// update board with guess
	let codeString = board.updateRow(code, row);
	// check input code against mastermind code
	if (codeString === board.mastermind) {
		console.log('You win');
		return;
	}
	for (let i = 1; i < 8; i+=2) {
		if (codeString[i] === board.mastermind[i]) {
			counter++;
		}
		if (board.mastermind.includes(codeString[i]) && board.mastermind[i] != codeString[i]) {
			count++;
		}
	}
    row += 1;
	console.log("Numbers in correct position:", counter);
	console.log("Numbers not in correct position but correct:", count);
}
console.log("You lost the code was", board.mastermind);
