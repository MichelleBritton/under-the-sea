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
let firstPlayer;
let secondPlayer;
let firstPlayerName;
let secondPlayerName;

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
 * Shuffle the cards and add the grid
 */
function addGrid() {

	shuffle(cards);

	let grid = createGrid();
	document.getElementById('grid').innerHTML = grid;

}

/**
 * Hide Welcome Panel when start button is pressed and display grid
 * */
function startGame() {	

    let welcome = document.getElementById("welcome-panel");
    welcome.classList.add("hide");

	//Set the welcome-panel to display none after 125ms to give the scale transition time to run first
    setTimeout(function() {
    	welcome.style.display = "none";
    }, 125);

    // Create the grid 
	addGrid();

	/* Set the grid to appear after 500ms to give the welcome panel enough time to transition and display: none
	and allow time for grid transitions to run */
    setTimeout(function() {
    	document.getElementById('grid').classList.remove("hide");
    	document.getElementById('new-game').classList.remove("hide");
    }, 500);

	runGame();
}

function runGame() {

	flipCards();

}

const turnCards = document.getElementsByClassName("card");
let cardClicks = 0;
let data;
let pickedCards = [];

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
			} else {				
				matchCards();											
			}
			
		});		
	}	

}

function matchCards() {
	console.log(pickedCards);

	if (pickedCards[0] === pickedCards[1]) {
		alert("YES!");
	} else {
		alert("NO");
	}

}

/**
 * Resets the game by hiding the grid, shuffling the cards and revealing the grid again
 */
let newGame = document.getElementById("new-game");
newGame.addEventListener('click', resetGame);

function resetGame (event) {

	// Hide the grid
	document.getElementById('grid').classList.add("hide");
	document.getElementById('new-game').classList.add("hide");

	// Create a new grid
	addGrid();

	//Set the grid to appear after 500ms to allow time for grid transitions to run
	setTimeout(function() {
    	document.getElementById('grid').classList.remove("hide");
    	document.getElementById('new-game').classList.remove("hide");
    }, 500);

}