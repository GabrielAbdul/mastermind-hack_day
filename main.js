#!/usr/bin/node

// print main prompt
// enter while loop
var board = require('./mastermind.js');
while (i < 10) {
    board.printBoard();
    board.printPrompt();
    //wait for input
    r = board.checkInput();
    if (r === 1){ 
        printWinner();
        break;}
    board.printCheckerResults();
    i++;
}
printLoser();