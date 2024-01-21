function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3);
	if (choice == 0) {
		return "rock";
	} else if (choice == 1) {
		return "paper";
	} else {
		return "scissors";
	}
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		return "tie";
	} else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "rock") {
		return "win";
	} else {
		return "lose";
	}
}

function game() {
	let playerScore = 0;
	let computerScore = 0;
	console.log("let's play a best of five rock paper scissors game :D");
	while (playerScore < 3 || computerScore < 3) {
		let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
		let computerSelection = getComputerChoice();
		console.log(`I chose ${computerSelection}`);
		if (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
			console.log(`W-w-wait! ${playerSelection} is not valid!`);
			continue;
		}
		let result = playRound(playerSelection, computerSelection);
		if (result == "tie") {
			console.log("We are tied :)");
		} else if (result == "win") {
			console.log("This is your win, tch x(");
			playerScore++;
		} else {
			console.log("This is my win, hehe :D");
			computerScore++;
		}
		console.log("Scores:");
		console.log(`Player: ${playerScore}`);
		console.log(`Computer: ${computerScore}`);
		if (playerScore == 3 || computerScore == 3) {
			break;
		}
	}
	if (playerScore > computerScore) {
		console.log("You won this match .. boo hoo");
	} else {
		console.log("This is my win, better luck next time ;)");
	}
}

game();
