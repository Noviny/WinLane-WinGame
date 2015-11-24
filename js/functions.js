
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
	}
	playerHand.splice( playerHand.indexOf(parseInt(cardNum)), 1 );
}

//============================
//Opponent turn function
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
	var oldVal = null;
	if ( lanes[pickLane]["staging"] === null ) {
		lanes[pickLane]["staging"] = computerHand[pickCard]
		lanes[pickLane]["computer"].push("hid")
	} else if ( lanes[pickLane]["staging"] != null ) {
		var oldVal = lanes[pickLane]["staging"]
		if ( lanes[pickLane]["computer"].indexOf("hid") >= 0 ) {
			var oldHid = lanes[pickLane]["computer"].indexOf("hid")
			lanes[pickLane]["computer"][oldHid] = oldVal;
			lanes[pickLane]["staging"] = computerHand[pickCard]
			lanes[pickLane]["computer"].push("hid")
		} 
		else if ( lanes[pickLane]["player"].indexOf("hid") >= 0 ) {
			var oldHid = lanes[pickLane]["player"].indexOf("hid")
			lanes[pickLane]["player"][oldHid] = oldVal;
			lanes[pickLane]["staging"] = computerHand[pickCard]
			lanes[pickLane]["computer"].push("hid")
		}
	}
	var spliced = computerHand.splice(pickCard, 1 );
}

// Possibly just write a choice code that both use?
// computerChoice


// var randomNums = function () {
// 	for (var i = 0; i < 50; i++) {
// 		console.log(Math.ceil(Math.random()*computerHand.length) - 1)
// 	};
// }



//========================================
//Let us determine who wins the game

var unhidAll = function () {
	for (var i = 1; i <= 3; i++) {
		var num = lanes[i]["staging"]
		console.log(num)
		if ( lanes[i]["player"].indexOf("hid") >= 0 ) {
			var oldHid = lanes[i]["player"].indexOf("hid")
			lanes[i]["player"][oldHid] = num
		} else if ( lanes[i]["computer"].indexOf("hid") >= 0 ) {
			var oldHid = lanes[i]["computer"].indexOf("hid")
			lanes[i]["computer"][oldHid] = num
		}
	};
};

var winLane = function (lane) {

}


var winGame = function () {
	unhidAll()
};







