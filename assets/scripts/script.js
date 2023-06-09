// Declare Variables
const playerOneHtml = document.getElementById("player-one-score");
const playerTwoHtml = document.getElementById("player-two-score");
const message = document.getElementById("popup");
const currentPlayer = document.getElementById("player");
let inputBoxOne;
let inputBoxTwo;
let nameOne;
let nameTwo;
let playerOneScore = 0;
let playerTwoScore = 0;
let playerId;
let counter = 0;
let cardClicks = 0;
let data;
let pickedCards = [];
let isPlaying = true;

/**
 * Wait for the DOM to finish loading before running the game
 * Get the button element and add an event listener to it, start the game if the validateInput function is true
 * Credit: Love Maths Walkthrough Project
 */
document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById('btn');

    button.addEventListener("click", function() {
		if (validateInput() != false) {
        	startGame();	
    	}
    });		
});

/**
 * Ensure that both fields are filled out and assign names to the scoreboard
 */
function validateInput() {
	// Retrive values from input boxes
	inputBoxOne = document.getElementById('player-one').value;
	inputBoxTwo = document.getElementById('player-two').value;

	// Check whether both fields have been filled in
	if (inputBoxOne === "" || inputBoxTwo === "") { 		
		alert("Please fill in both fields");
		return false;
	} else {
		nameOne = document.getElementById('player-one-name');
 		nameTwo = document.getElementById('player-two-name');

		// Add the values from the input boxes to the Score Board
 		nameOne.innerHTML = inputBoxOne;
 		nameTwo.innerHTML = inputBoxTwo;

		// Add the name to the Player Board
		currentPlayer.innerHTML = inputBoxOne;
	}
}

// Create an array of objects to add images.  Clone the array and then join them together to create pairs of cards
let originalCards = [
	{
		front: 'assets/images/angelfish.png',
		back: 'assets/images/back.png',
		fish: 'angelfish',
	},
	{
		front: 'assets/images/clownfish.png',
		back: 'assets/images/back.png',
		fish: 'clownfish',
	},
	{
		front: 'assets/images/crab.png',
		back: 'assets/images/back.png',
		fish: 'crab',
	},
	{
		front: 'assets/images/jellyfish.png',
		back: 'assets/images/back.png',
		fish: 'jellyfish',
	},
	{
		front: 'assets/images/octopus.png',
		back: 'assets/images/back.png',
		fish: 'octopus',
	},
	{
		front: 'assets/images/seahorse.png',
		back: 'assets/images/back.png',
		fish: 'seahorse',
	},
	{
		front: 'assets/images/shark.png',
		back: 'assets/images/back.png',
		fish: 'shark',
	},
	{
		front: 'assets/images/starfish.png',
		back: 'assets/images/back.png',
		fish: 'starfish',
	},
	{
		front: 'assets/images/turtle.png',
		back: 'assets/images/back.png',
		fish: 'turtle',
	},
	{
		front: 'assets/images/whale.png',
		back: 'assets/images/back.png',
		fish: 'whale',
	},
];
let clonedCards = originalCards.slice(0);
const cards = originalCards.concat(clonedCards);

/**
 * Shuffle the cards array
 * Code Credit: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Fisher-Yates shuffle algorithm
 */
function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}

/**
 * Create HTML Grid and populate it with data from the shuffled array
 */
function createGrid() {
	let html = `<div class="cards-container">`;
	let closingHtml = `</div>`;
	let result;

	for (let card of cards) {
		let item = `
			<div class="card" data-type="${card.fish}">
				<div class="card-inner">
					<div class="card-front">
						<img src="${card.back}" alt="Under the sea scene">
					</div>
					<div class="card-back">
						<img src="${card.front}" alt="${card.fish}">
					</div>
				</div>
			</div>
		`;
		result = html += item;
	}
	return result + closingHtml;
}

/** 
 * Shuffle the cards, add the grid, player board and score board
 */
function addGrid() {
	// Shuffle the cards
	shuffle(cards);

	// Add the grid
	let grid = createGrid();
	document.getElementById('grid').innerHTML = grid;

	/* Set the grid and player board to appear after 1000ms to give the welcome panel enough time to transition and display: none
	and allow time for grid transitions to run */
	setTimeout(function() {
    	document.getElementById('grid').classList.remove("hide");
    	document.getElementById('new-game').classList.remove("hide");
		document.getElementById("player-turns").classList.remove("hide");
		document.getElementById("score-board").classList.remove("hide");
	}, 1000);
}

/**
 * Hide Welcome Panel when start button is pressed and display grid
 * */
function startGame() {	
	// Hide the welcome panel
	const welcome = document.getElementById("welcome-panel");
	welcome.classList.add("hide");

	//Set the welcome panel to display none after 1000ms to give the scale transition time to run first
	setTimeout(function() {
		welcome.style.display = "none";
	}, 1000);

	// Create the grid 
	addGrid();

	// Play the game
	flipCards();
}

/**
 * Get the current player
 * Code credit: https://github.com/adriane26/theGame/blob/master/memory.js
 */
function getCurrentPlayer() {
	if (counter %2 === 0) {
		playerId = 1;
		setTimeout(function() {
			currentPlayer.innerHTML = inputBoxOne;
		}, 1000);		
	} else {
		playerId = 2;
		setTimeout(function() {
			currentPlayer.innerHTML = inputBoxTwo;
		}, 1000);	
	}
	return;
}

/**
 * Update the Score Board for each player
 */ 
function updateScore() {
	if (playerId === 1) {
		playerOneHtml.innerHTML = ++playerOneScore;
	} else {
		playerTwoHtml.innerHTML = ++playerTwoScore; 
	}
}

/**
 * Reset the Score Board to zero
 */ 
function resetScore() {
	playerOneScore = 0;
	playerTwoScore = 0;
	playerOneHtml.innerHTML = 0;
	playerTwoHtml.innerHTML = 0; 
}

/**
 * Add event listener to all cards
 */
function flipCards() {	
	const turnCards = document.getElementsByClassName("card");	

	for (let turnCard of turnCards) {
		turnCard.addEventListener('click', flip);
	}	
}	

/**
 * Remove event listener from cards currently enabled to prevent doublec clicking resulting in a false match
 */
function disableClick() {
	const doubleClicks = document.getElementsByClassName("stopClick");

	for (let doubleClick of doubleClicks) {
		doubleClick.removeEventListener('click', flip);
	}	
}

/**
 * Turn the cards over when clicked on, count the clicks and push the 
 * data type of the clicked cards into an array ready to check for a match
 */
function flip() {
	if (!isPlaying) {
		return;
	}
	if (cardClicks < 2) {
	// less than 2 clicks?
		this.classList.add("flipActive", "stopClick");			
		data = this.getAttribute("data-type");		
		pickedCards.push(data);	
		// Prevent double click
		disableClick();
		cardClicks += 1;
		// are there now 2 clicks?
		if (cardClicks === 2) {
			// Stop more than 2 cards being clicked on
			isPlaying = false;
			// Match the cards
			setTimeout(function() {
				matchCards();
			}, 1000);
		}
	}
}		

/** 
 * Check the two data types in the array to see if they match,
 * update the score, check to see if there is a winner and reset
 * the counter, empty the array and get the current player
 */
function matchCards() {
	const activeCards = document.querySelectorAll(".flipActive");

	// If the two values in the array match
	if (pickedCards[0] === pickedCards[1]) {
		for (let activeCard of activeCards) {
			activeCard.classList.add("is-matched");
		}
		
		message.classList.remove("hide");
		message.innerHTML = "It's a<br>Match!";
		setTimeout(function() {
			message.classList.add("hide");
		}, 1500);

		updateScore();
		checkWinner();
	} 

	// Otherwise just turn the cards back over
	setTimeout(function() {
		for (let activeCard of activeCards) {
			activeCard.classList.remove("flipActive", "stopClick");
		}
	}, 400);

	// Increment the counter and isPlaying
	counter ++;
	isPlaying = true;

	// Carry on playing
	resumePlay();
}

/**
 * Reset cardClicks, empty the pickedCards array, get the current player,
 * reset the isPlaying variable and return back to the flipCards function to resume playing the game.
 */
function resumePlay () {
	// Reset
	cardClicks = 0;
	pickedCards = [];	
	getCurrentPlayer();	
	// Return to flipCards to re-enable click listeners
	flipCards();	
}

// Check for a winner
function checkWinner() {
	const matchedCards = document.querySelectorAll(".is-matched");

	// If all the cards have been turned over, show result of the game
	if (matchedCards.length === 20){
		if (playerOneScore > playerTwoScore) {
			message.classList.remove("hide");
			message.innerHTML = `${nameOne.innerHTML}<br>is the winner!`;	
			setTimeout(function() {
				message.classList.add("hide");
			}, 3000);		
		} else if (playerOneScore < playerTwoScore) {
			message.classList.remove("hide");
			message.innerHTML = `${nameTwo.innerHTML}<br>is the winner!`;	
			setTimeout(function() {
				message.classList.add("hide");
			}, 3000);		
		} else if (playerOneScore === playerTwoScore) {
			message.classList.remove("hide");
			message.innerHTML = "It's a<br>draw!";	
			setTimeout(function() {
				message.classList.add("hide");
			}, 3000);		
		}
	} else {
		return;
	}
}

/**
 * Resets the game by hiding the grid, shuffling the cards and revealing the grid again
 */
const newGame = document.getElementById("new-game");
newGame.addEventListener('click', resetGame);

function resetGame (event) {	
	// Hide the grid
	document.getElementById('grid').classList.add("hide");
	document.getElementById('new-game').classList.add("hide");

	// Create a new grid
	addGrid();

	// Reset the counter 
	counter = 0;

	// Reset the score
	resetScore();

	// Start playing again
	resumePlay();
	return;
}