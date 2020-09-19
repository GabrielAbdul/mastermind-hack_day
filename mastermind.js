#!/usr/bin/node

exports.Board = class Board {
	constructor() {
		this.mastermind = `|${Math.floor(Math.random() * 10)}-${Math.floor(Math.random() * 10)}-${Math.floor(Math.random() * 10)}-${Math.floor(Math.random() * 10)}|`;
		this.row_one = ' |0-0-0-0|';
		this.row_two = '|0-0-0-0|';
		this.row_three = '|0-0-0-0|';
		this.row_four = '|0-0-0-0|';
		this.row_five = '|0-0-0-0|';
		this.row_six = '|0-0-0-0|';
		this.row_seven = '|0-0-0-0|';
		this.row_eight = '|0-0-0-0|';
		this.row_nine = '|0-0-0-0|';
		this.row_ten = '|0-0-0-0|';
	}

	printBoard() {
		console.log(this.row_one,'\n', this.row_two,'\n', this.row_three,'\n',
					this.row_four, '\n', this.row_five, '\n', this.row_six, '\n',
					this.row_seven, '\n', this.row_eight, '\n',	this.row_nine, '\n',
					this.row_ten, '\n');
	}

	get_guess() {
		// Requires install: prompt-sync
		// npm install prompt-sync
		const prompt = require('prompt-sync')();
		console.log('Available numbers: 0-9')
		const guess = prompt('What is your Guess? ');
		return guess
	}

	updateRow(code, input_row) {
		let checker_list = [this.row_one, this.row_two, this.row_three,
			this.row_four, this.row_five, this.row_six, this.row_seven,
			this.row_eight, this.row_nine, this.row_ten]
		let codeString = `|${code[0]}-${code[1]}-${code[2]}-${code[3]}|`;
		checker_list[input_row] = codeString;
		this.updateBoard(checker_list);
		return codeString;
	}

	updateBoard(array) {
		this.row_one = array[0];
		this.row_two = array[1];
		this.row_three = array[2];
		this.row_four = array[3];
		this.row_five = array[4];
		this.row_six = array[5];
		this.row_seven = array[6];
		this.row_eight = array[7];
		this.row_nine = array[8];
		this.row_ten = array[9];
	}
}
