
// These arrays represent the opening hands.
// The will be manipulated by having 'cards' removed
// The snipped objects will be placed elsewhere.
// Probably used the xHand.slice(xHand.Search())
// Try and find something more concise
var playerHand = [0, 1, 2, 3, 4, 5];
var computerHand = [0, 1, 2, 3, 4, 5];

var lanes = {
	1: {
	player: [5, 3, 2, 0],
	computer: []
	},
	2: {
	player: [],
	computer: []
	},
	3: {
	player: [],
	computer: []
	},
};


var lastCard = {
	1: ["player", 3],
	2: null,
	3: null,
}




// playerChoice
var playerChoice = function(choice) {
	var choice = playerHand.splice(playerHand.indexOf(choice), (playerHand.indexOf(choice)));
	console.log(playerHand)
	return choice;
}

//We can make this track who the player is later, and vary the splice command
var takeTurn = function (cardChoice, laneChoice) {
	if ( playerHand.indexOf(cardChoice) >= 0 ) {
		// console.log(playerHand.indexOf(cardChoice))
		var choice = playerHand.splice(playerHand.indexOf(cardChoice), 1);
		console.log(choice);
		lanes[laneChoice]["player"].push(Number(choice));
		lastCard[laneChoice] = ["player", cardChoice];
	} else {
		return "Invalid choice.";
	}
}







//Holy shit the hidden information makes this display properties super difficult.
// It needs to track what the last thing to be put into a lane was. Need a function for that.
var displayLane = function () {
//We can add a while clause here to run through all the objects in lastCard
	if ( lastCard[1] !== null ) {
		var editedL1 = lanes[1]



	} else console.log ("blurbl")
}













var findWinner = function () {
	//Lane1 section
	var playerTotalLane1 = 0;
	for (var i = 0; i < lanes[1]["player"].length; i++) {
		playerTotalLane1 = playerTotalLane1 + lanes[1]["player"][i];
	};
	if (lanes[1]["player"].indexOf(0) >= 0) {
		playerTotalLane1 = playerTotalLane1 * 2;
	}
	console.log ( "Player one's total in lane one was " + playerTotalLane1 );
	var compTotalLane1 = 0
	for (var i = 0; i < lanes[1]["computer"].length; i++) {
		compTotalLane1 = compTotalLane1 + lanes[1]["computer"][i];
	};
	if (lanes[1]["computer"].indexOf(0) >= 0) {
		compTotalLane1 = compTotalLane1 * 2;
	}
	console.log ( "Computer's total in lane one was " + compTotalLane1 );
	if ( playerTotalLane1 > compTotalLane1 ) {
		console.log ("Player wins the lane");
	} else if ( compTotalLane1 > playerTotalLane1 ) {
		console.log ("Computer one the lane");
	} else {
		("This lane is a draw")
	}
}


// Can replicate playerChoice
// Possibly just write a choice code that both use?
// computerChoice




