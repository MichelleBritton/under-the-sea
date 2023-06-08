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

/**
 * Create an array of objects to add images.  Clone the array and then join them together to create pairs of cards
 */
function getCards() {

	let originalCards = [
		{
			front: '../images/angelfish.png',
			back: './images/back.png',
		},
		{
			front: '../images/clownfish.png',
			back: './images/back.png',
		},
		{
			front: '../images/crab.png',
			back: './images/back.png',
		},
		{
			front: '../images/jellyfish.png',
			back: './images/back.png',
		},
		{
			front: '../images/octopus.png',
			back: './images/back.png',
		},
		{
			front: '../images/seahorse.png',
			back: './images/back.png',
		},
		{
			front: '../images/shark.png',
			back: './images/back.png',
		},
		{
			front: '../images/starfish.png',
			back: './images/back.png',
		},
		{
			front: '../images/turtle.png',
			back: './images/back.png',
		},
		{
			front: '../images/whale.png',
			back: './images/back.png',
		},
	];

	let clonedCards = originalCards.slice(0);
	let cards = originalCards.concat(clonedCards);

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

}