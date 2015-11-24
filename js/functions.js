
// These arrays represent the opening hands.
// The will be manipulated by having 'cards' removed
// The snipped objects will be placed elsewhere.
// Probably used the xHand.slice(xHand.Search())
// Try and find something more concise
var playerHand = [1, 2, 3, 4, 5, "tac"];
//var computerHand = [0, 1, 2, 3, 4, 5];



var lanes = {
	1: {
	player: [],
	computer: [],
	staging: null,
	},

	2: {
	player: [],
	computer: [],
	staging: null,
	},

	3: {
	player: [],
	computer: [],
	staging: null,
	},
};

// playerChoice
// var playerChoice = function(choice) {
// 	var choice = playerHand.splice(playerHand.indexOf(choice), (playerHand.indexOf(choice)));
// 	console.log(playerHand)
// 	return choice;
// }



var myTurn = function (cardNum, lane) {
	if ( lanes[lane]["staging"] === null ) {
		lanes[lane]["staging"] = cardNum
		lanes[lane]["player"].push("hid")
	} else if ( lanes[lane]["player"].indexOf("hid") >= 0 ) {
		//replaces hid and stages next num
		var oldVal = lanes[lane]["staging"]
		//Only copes with player is hid, not opponent
		var oldHid = lanes[lane]["player"].indexOf("hid")
		lanes[lane]["player"][oldHid] = oldVal;
		lanes[lane]["staging"] = cardNum
		lanes[lane]["player"].push("hid")
	}
	playerHand.splice( playerHand.indexOf(parseInt(cardNum)), 1 );
}

var calcLanes = function () {
	for (var i = 1; i <= 3; i++) {
		var lanesum = 0
		if ( lanes[i]["player"].indexOf("hid") >= 0 ) {
			var oldVal = lanes[i]["staging"];
			var oldHid = lanes[i]["player"].indexOf("hid");
			lanes[i]["player"][oldHid] = oldVal;
		}
		//=============================
		//Where we were working
		console.log(lanes[i]["player"][i])
		//We'll come back to tac
		// if ( lanes[i]["player"].indexOf("tac") >= 0 ) {
		// 	lanes[i]["player"] = 
		// }
		for (var i = 0; i < lanes[i]["player"].length; i++) {
			var toAdd = lanes[i]["player"][i];
			lanesum += lanes[i]["player"][i];
		};
	};
}


//We can make this track who the player is later, and vary the splice command
//===========
//The below code is causing 'lanes' to be blank.


// Failed when I tried to implement. Removed and started over.
// var playerTurn = function (cardChoice, laneChoice) {
// 	if ( lanes[laneChoice]["staging"] === null ) {
// 		if ( playerHand.indexOf(cardChoice) >= 0 ) {
// 			var choice = playerHand.splice(playerHand.indexOf(cardChoice), 1);
// 			console.log(choice);
// 			lanes[laneChoice]["player"].push("hidden");
// 			lanes[laneChoice]["staging"] = choice;

// 			// lastCard[laneChoice] = ["player", cardChoice];
// 		}
// 	} else {
// 		if ( lanes[lanechoice]["player"].indexOf("hidden") >= 0 ) {
// 		lanes[laneChoice]["player"].indexOf("hidden") = lanes[laneChoice]["staging"];
// 		lanes[laneChoice]["staging"] = cardChoice
// 		} else if ( lanes[lanechoice]["computer"].indexOf("hidden") >= 0 ) {
// 			lanes[laneChoice]["player"].indexOf("hidden") = lanes[laneChoice]["staging"];
// 		lanes[laneChoice]["staging"] = cardChoice
// 		}
		//then replicate what you have above for the staging being none.
// 	}
// }

// var compTurn = function () {
// 	//Pick a random card, play it to the lane where they have the lowest total
// 	//If there is a tie, then randomise between the lowest totals.
// }




//======================
//The below was solved more eloquently.
//Printing current info no longer needs a function.
// //Holy shit the hidden information makes this display properties super difficult.
// // It needs to track what the last thing to be put into a lane was. Need a function for that.
// var displayLane = function () {
// //We can add a while clause here to run through all the objects in lastCard
// 	if ( lastCard[1] !== null ) {
// 		var editedL1 = lanes[1]


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




