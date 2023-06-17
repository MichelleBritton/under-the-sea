// Declare Variables
const playerOneHtml = document.getElementById("player-one-score");
const playerTwoHtml = document.getElementById("player-two-score");
const message = document.getElementById("popup");
let player = document.getElementById("player");
let firstPlayer;
let secondPlayer;
let firstPlayerName;
let secondPlayerName;
let playerOneScore = 0;
let playerTwoScore = 0;
let playerId;
let counter = 0;
let cardClicks = 0;
let data;
let pickedCards = [];
let currentPlayer = getCurrentPlayer();

// Wait for the DOM to finish loading before running the game
// Get the button element and add an event listener to it, start the game if the validateInput function is true
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
	firstPlayer = document.getElementById('player-one').value;
 	secondPlayer = document.getElementById('player-two').value;

	if (firstPlayer === "" || secondPlayer === "") { 		
 		alert("Please fill in both fields");
 		return false;
 	} else {
 		firstPlayerName = document.getElementById('player-one-name');
 		secondPlayerName = document.getElementById('player-two-name');

 		firstPlayerName.innerHTML = firstPlayer;
 		secondPlayerName.innerHTML = secondPlayer;

		player.innerHTML = firstPlayer;
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
	let html = `
		<div class="cards-container">
	`;

	for (let card of cards) {
		let item = `
			<div class="card" data-type="${card.fish}">
  				<div class="card-inner">
                  <div class="card-front">
                  <img src="${card.back}">
              </div>
              <div class="card-back">
                  <img src="${card.front}">
              </div>
                </div>
            </div>
		`;
		var result = html += item;
	}
	return result;

	html =+ `
		</div>
	`;	
}

/** 
 * Shuffle the cards, add the grid, player board and score board
 */
function addGrid() {
	shuffle(cards);

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
			player.innerHTML = firstPlayer;
		}, 1000);		
	} else {
		playerId = 2;
		setTimeout(function() {
			player.innerHTML = secondPlayer;
		}, 1000);	
	}
	return;
}

// Update the Score Board
function updateScore() {
	if (playerId === 1) {
		playerOneHtml.innerHTML = ++playerOneScore;
	} else {
		playerTwoHtml.innerHTML = ++playerTwoScore; 
	}
}

// Reset the Score Board
function resetScore() {
	playerOneScore = 0;
	playerTwoScore = 0;
	playerOneHtml.innerHTML = 0;
	playerTwoHtml.innerHTML = 0; 
}

/**
 * Turn the cards over when clicked on, count the clicks and push the 
 * data type of the clicked cards into an array ready to check for a match
 */
function flipCards() {	
	const turnCards = document.getElementsByClassName("card");		
	for (let turnCard of turnCards) {
		turnCard.addEventListener('click', function() {	
			cardClicks += 1;

			if (cardClicks <= 2) {
				while (cardClicks) {	
					this.classList.add("flipActive");
					data = this.getAttribute("data-type");					
					break;
				} 
				pickedCards.push(data);	
			} 

			if (cardClicks === 2) {
				setTimeout(function() {
					matchCards();
				}, 500);
				cardClicks = 0;
			}
			
		});		
	}		
}

/** 
 * Check the two data types in the array to see if they match,
 * update the score, check to see if there is a winner and reset
 * the counter, empty the array and get the current player
 */
function matchCards() {
	const activeCards = document.querySelectorAll(".flipActive");		

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

	setTimeout(function() {
		for (let activeCard of activeCards) {
			activeCard.classList.remove("flipActive");
		}
	}, 400);

	pickedCards = [];
	counter ++;
	getCurrentPlayer();
	return;
}

// Check for a winner
function checkWinner() {
	const matchedCards = document.querySelectorAll(".is-matched");

	if (matchedCards.length === 20){
		if (playerOneScore > playerTwoScore) {
			message.classList.remove("hide");
			message.innerHTML = `${firstPlayerName.innerHTML}<br>is the winner!`;	
			setTimeout(function() {
				message.classList.add("hide");
			}, 3000);		
		} else if (playerOneScore < playerTwoScore) {
			message.classList.remove("hide");
			message.innerHTML = `${secondPlayerName.innerHTML}<br>is the winner!`;	
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
	
	//Reset array, counter, player and score
	pickedCards = [];
	cardClicks = 0;
	counter = 0;
	getCurrentPlayer();
	resetScore();

	// Start playing again
	flipCards();	
	return;
}