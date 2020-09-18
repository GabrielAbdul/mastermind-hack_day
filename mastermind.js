#!/usr/bin/node

exports.Board = class Board {
	constructor() {
		this.mastermind = `|${Math.floor(Math.random() * 4)}-${Math.floor(Math.random() * 4)}-${Math.floor(Math.random() * 4)}-${Math.floor(Math.random() * 4)}|`;
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
	printPrompt() {
		console.log('Chose your code');
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
		console.log('Available numbers: 1, 2, 3, 4')
		const guess = prompt('What is your Guess? ');
		return guess
		}

	updateRow(code, input_row) {
	let	dictionary = {
			1: this.row_one,
			2: this.row_two,
			3: this.row_three,
			4: this.row_four,
			5: this.row_five,
			6: this.row_six,
			7: this.row_seven,
			8: this.row_eight,
			9: this.row_nine,
			10: this.row_ten
		};
		let codeString = `|${code[0]}-${code[1]}-${code[2]}-${code[3]}|`;
		return codeString;
	}
