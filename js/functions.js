//===================================
//Board setup variables
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

//Move dom actions to the displayFunction
//Not set up for two player game (probably)
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
//Not for 2P game
var forceCompTurn = function (lane, card) {
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
//========================================
//Let us determine who wins the game
var unhidAll = function () {
	for (var i = 1; i <= 3; i++) {
		var num = lanes[i]["staging"]
		if ( lanes[i]["player"].indexOf("hid") >= 0 ) {
			var oldHid = lanes[i]["player"].indexOf("hid")
			lanes[i]["player"][oldHid] = num
		} else if ( lanes[i]["computer"].indexOf("hid") >= 0 ) {
			var oldHid = lanes[i]["computer"].indexOf("hid")
			lanes[i]["computer"][oldHid] = num
		}
	};
};

var endInfo = {
	1: {playerScore: 0, compScore: 0, winner: null},
	2: {playerScore: 0, compScore: 0, winner: null},
	3: {playerScore: 0, compScore: 0, winner: null},
	playerLanes: 0,
	compLanes: 0
}

var winLane = function (lane) {
	var playerCards = lanes[lane]["player"]
	var compCards = lanes[lane]["computer"]
	var playerTotal = 0
	var compTotal = 0
	var playerTac = null;
	var compTac = null;
	//Adds up the array, storing tac if it is found
	for (var i = 0; i < playerCards.length; i++) {
		if ( playerCards[i] === "tac" ) {
			playerTac = true;
		} else if ( parseInt(playerCards[i]) === parseInt(playerCards[i]) ) {
			playerTotal += parseInt(playerCards[i]);
		};
	};
	for (var i = 0; i < compCards.length; i++) {
		if ( compCards[i] === "tac" ) {
			compTac = true;
		} else if ( parseInt(compCards[i]) === parseInt(compCards[i]) ) {
			compTotal += parseInt(compCards[i]);
		};
	};
	// Applies the tac doubler below
	if ( playerTac ) {
		playerTotal += playerTotal;
	};
	if ( compTac ) {
		compTotal += compTotal;
	};
	//Mods endInfo
	endInfo[lane]["playerScore"] = playerTotal;
	endInfo[lane]["compScore"] = compTotal;
	if ( playerTotal > compTotal ) {
		endInfo[lane]["winner"] = "player";
		endInfo["playerLanes"] += 1;
	} else if ( compTotal > playerTotal ) {
		endInfo[lane]["winner"] = "comp";
		endInfo["compLanes"] += 1;
	} else {
		endInfo[lane]["winner"] = "draw";
	}
};

//Cannot hit the dom, needs to draw a lot of the vars out
//So we can modify the page in displayfunctions.js
var winGame = function () {
	unhidAll()
	//Calculates the lane totals
	for (var i = 1; i <= 3; i++) {
		winLane(i);
	};
	//Determines overall game winner
	if ( endInfo["playerLanes"] > endInfo["compLanes"] ) {
		return "player";
	} else if ( endInfo["playerLanes"] < endInfo["compLanes"] ) {
		return "comp";
	} else {
		return "draw";
	}
};