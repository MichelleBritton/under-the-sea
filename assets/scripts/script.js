// Declare Variables
let firstPlayer;
let secondPlayer;
let firstPlayerName;
let secondPlayerName;
const welcome = document.getElementById("welcome-panel");
const turnCards = document.getElementsByClassName("card");
const newGame = document.getElementById("new-game");
let player = document.getElementById("player");
let counter = 0;
let playerId;
let cardClicks = 0;
let data;
let pickedCards = [];



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
 * Shuffle the card, add the grid and player board
 */
function addGrid() {
	shuffle(cards);

	let grid = createGrid();
	document.getElementById('grid').innerHTML = grid;

	/* Set the grid and player board to appear after 500ms to give the welcome panel enough time to transition and display: none
	and allow time for grid transitions to run */
    setTimeout(function() {
    	document.getElementById('grid').classList.remove("hide");
    	document.getElementById('new-game').classList.remove("hide");
		document.getElementById("player-turns").classList.remove("hide");
    }, 500);
}

/**
 * Hide Welcome Panel when start button is pressed and display grid
 * */
function startGame() {	
	// Hide the welcome panel
    welcome.classList.add("hide");

	//Set the welcomepanel to display none after 125ms to give the scale transition time to run first
    setTimeout(function() {
    	welcome.style.display = "none";
    }, 125);

    // Create the grid 
	addGrid();

	runGame();
}

function runGame() {	
	flipCards();
}

/**
 * Get the current player
 * Code credit: https://github.com/adriane26/theGame/blob/master/memory.js
 */
function getCurrentPlayer() {
	if (counter %2 === 0) {
		playerId = 1;
		player.innerHTML = firstPlayer;
	} else {
		playerId = 2;
		player.innerHTML = secondPlayer;
	}
}

function flipCards() {			
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

function matchCards() {
	console.log(pickedCards);	
	const activeCards = document.querySelectorAll(".flipActive");		

	if (pickedCards[0] === pickedCards[1]) {
		alert("YES!");
		for (let activeCard of activeCards) {
			activeCard.classList.add("is-matched");
		}
	} else {
		alert("NO");	
	}
	
	for (let activeCard of activeCards) {
		activeCard.classList.remove("flipActive");
	}

	pickedCards = [];
	counter ++;
	getCurrentPlayer();
	return;
}

/**
 * Resets the game by hiding the grid, shuffling the cards and revealing the grid again
 */
newGame.addEventListener('click', resetGame);

function resetGame (event) {
	// Hide the grid
	document.getElementById('grid').classList.add("hide");
	document.getElementById('new-game').classList.add("hide");

	// Create a new grid
	addGrid();

	pickedCards = [];
	cardClicks = 0;
	counter = 0;
	getCurrentPlayer();
	runGame();
}