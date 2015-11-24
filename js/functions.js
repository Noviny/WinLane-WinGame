
// These arrays represent the opening hands.
// The will be manipulated by having 'cards' removed
// The snipped objects will be placed elsewhere.
// Probably used the xHand.slice(xHand.Search())
// Try and find something more concise
var playerHand = [1, 2, 3, 4, 5, "tac"];
var computerHand = [1, 2, 3, 4, 5, "tac"];



var lanes = {
	1: {
	player: [],
	computer: [],
	staging: null,
	lanesum: 0
	},

	2: {
	player: [],
	computer: [],
	staging: null,
	lanesum: 0
	},

	3: {
	player: [],
	computer: [],
	staging: null,
	lanesum: 0
	},
};

// playerChoice
// var playerChoice = function(choice) {
// 	var choice = playerHand.splice(playerHand.indexOf(choice), (playerHand.indexOf(choice)));
// 	console.log(playerHand)
// 	return choice;
// }


// FUNCTION IS RANDOMLY ADDING UNDEFINED ON THE FIRST RUN. FIND AND SOLVE
//Function is modifying the dom? Shouldn't be
//Move dom actions to the displayFunction
var myTurn = function (cardNum, lane) {
	pickLane = lane
	pickCard = cardNum
	if ( lanes[lane]["staging"] === null ) {
		lanes[lane]["staging"] = cardNum
		lanes[lane]["player"].push("hid")
	} else {
		//replaces hid and stages next num
		var oldVal = lanes[lane]["staging"]
		//Only copes with player is hid, not opponent
		var oldHid = lanes[lane]["player"].indexOf("hid")
	}

	if ( lanes[pickLane]["computer"].indexOf("hid") >= 0 ) {
		var oldHid = lanes[pickLane]["computer"].indexOf("hid")
	//Right here is where it fucks up. Needs to hunt for if 'hid' is in computer or player
		lanes[pickLane]["computer"][oldHid] = oldVal;
		lanes[pickLane]["staging"] = pickCard
		lanes[pickLane]["player"].push("hid")
	} 
	else if ( lanes[pickLane]["player"].indexOf("hid") >= 0 ) {
		var oldHid = lanes[pickLane]["player"].indexOf("hid")
	//Right here is where it fucks up. Needs to hunt for if 'hid' is in computer or player
		lanes[pickLane]["player"][oldHid] = oldVal;
		lanes[pickLane]["staging"] = pickCard
		lanes[pickLane]["player"].push("hid")
	}




	playerHand.splice( playerHand.indexOf(parseInt(cardNum)), 1 );
}

var calcPlayerLanes = function () {
	for (var i = 1; i <= 3; i++) {
		var total = 0;
		for (var j = 0; j < lanes[i]["player"].length; i++) {
			total += (parseInt(lanes[i]["player"][j]));
			console.log(total)
		};
	console.log(total)
	};
}

//============================
//Computer random turn
//============================
//Because lanes[var]["player"] was hard-coded,
//we had to rewrite the whole function
//Before 2P game, we need to combine this into one function
//It will need to take an extra variable for the player
var forceCompTurn = function (lane, card) {
	//We're staging the wrong thing right now...
	//Staging one less than?
	var pickLane = parseInt(lane);
	var pickCard = parseInt(card);
	console.log("the card to be spliced should be " + computerHand[pickCard]);
	var oldVal = null;
		if ( lanes[pickLane]["staging"] === null ) {
		lanes[pickLane]["staging"] = computerHand[pickCard]
		lanes[pickLane]["computer"].push("hid")
	} else if ( lanes[pickLane]["staging"] != null ) {
		//replaces hid and stages next num
		var oldVal = lanes[pickLane]["staging"]
	//Only copes with computer is hid, not opponent, indexOf should equal 0 otherwise?
		}
		if ( lanes[pickLane]["computer"].indexOf("hid") >= 0 ) {
			var oldHid = lanes[pickLane]["computer"].indexOf("hid")
		//Right here is where it fucks up. Needs to hunt for if 'hid' is in computer or player
			lanes[pickLane]["computer"][oldHid] = oldVal;
			lanes[pickLane]["staging"] = computerHand[pickCard]
			lanes[pickLane]["computer"].push("hid")
		} 
		else if ( lanes[pickLane]["player"].indexOf("hid") >= 0 ) {
			var oldHid = lanes[pickLane]["player"].indexOf("hid")
		//Right here is where it fucks up. Needs to hunt for if 'hid' is in computer or player
			lanes[pickLane]["player"][oldHid] = oldVal;
			lanes[pickLane]["staging"] = computerHand[pickCard]
			lanes[pickLane]["computer"].push("hid")
		}
//Correct thing seems to be staging, but splicing the wrong thing
	computerHand.splice( computerHand[pickCard - 1], 1 );
}

// Possibly just write a choice code that both use?
// computerChoice




















