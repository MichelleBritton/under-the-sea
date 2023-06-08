// Wait for the DOM to finish loading before running the game
// Get the button element and add an event listener to it, start the game if the validateInput function is true
document.addEventListener("DOMContentLoaded", function() {

	let button = document.getElementById('btn');
	
	button.addEventListener("click", function() {
		if (validateInput() != false) {
			startGame();	
		}
	})	
	
})

/**
 * Ensure that both fields are filled out and assign names to the scoreboard
 */
function validateInput() {

	let firstPlayer = document.getElementById('player-one').value;
 	let secondPlayer = document.getElementById('player-two').value;

	if (firstPlayer === "" || secondPlayer === "") {
 		
 		alert("Please fill in both fields");
 		return false;

 	} else {

 		let firstPlayerName = document.getElementById('player-one-name');
 		let secondPlayerName = document.getElementById('player-two-name');

 		firstPlayerName.innerHTML = firstPlayer;
 		secondPlayerName.innerHTML = secondPlayer;

 	}

}

// Create an array of objects to add images.  Clone the array and then join them together to create pairs of cards
let originalCards = [
    {
		front: 'assets/images/angelfish.png',
		back: 'assets/images/back.png',
	},
	{
		front: 'assets/images/clownfish.png',
		back: 'assets/images/back.png',
	},
	{
		front: 'assets/images/crab.png',
		back: 'assets/images/back.png',
	},
	{
		front: 'assets/images/jellyfish.png',
		back: 'assets/images/back.png',
	},
	{
		front: 'assets/images/octopus.png',
		back: 'assets/images/back.png',
	},
	{
		front: 'assets/images/seahorse.png',
		back: 'assets/images/back.png',
	},
	{
		front: 'assets/images/shark.png',
		back: 'assets/images/back.png',
	},
	{
		front: 'assets/images/starfish.png',
		back: 'assets/images/back.png',
	},
	{
		front: 'assets/images/turtle.png',
		back: 'assets/images/back.png',
	},
	{
		front: 'assets/images/whale.png',
		back: 'assets/images/back.png',
	},
];

let clonedCards = originalCards.slice(0);
let cards = originalCards.concat(clonedCards);

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

	for (card of cards) {
		let item = `
			<div class="card">
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
 * Hide Welcome Panel when start button is pressed and display grid
 * */
function startGame() {	

    let welcome = document.getElementById("welcome-panel");
    welcome.classList.add("hide");

    setTimeout(function() {
    	welcome.style.display = "none";
    }, 75);

    shuffle(cards);

    let grid = createGrid();
	document.getElementById('grid').innerHTML = grid;
}