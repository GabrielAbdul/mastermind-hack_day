#!/usr/bin/node

class Board {
	constructor() {
		this.mastermind = [Math.floor(Math.random() * 4),
							Math.floor(Math.random() * 4),
							Math.floor(Math.random() * 4),
							Math.floor(Math.random() * 4)];
		this.row_one = [0, 0, 0, 0];
		this.row_two = [0, 0, 0, 0];
		this.row_three = [0, 0, 0, 0];
		this.row_four = [0, 0, 0, 0];
	}
	print_board() {
		process.stdout.write('------------');
		process.stdout.write('------------');

	}

	get_guess() {
		// Requires install: prompt-sync
		// npm install prompt-sync
		const prompt = require('prompt-sync')();
		console.log('Available colors: W, R, B, Y')
		const guess = prompt('What is your Guess? ');

		return guess
	}
}
