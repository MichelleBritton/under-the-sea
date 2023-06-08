// Wait for the DOM to finish loading before running the game
// Get the button element and add an event listener to it, start the game if the validateInput function is true
document.addEventListener("DOMContentLoaded", function() {

	let button = document.getElementById('btn');
	
	button.addEventListener("click", function() {
		if (validateInput()) {
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