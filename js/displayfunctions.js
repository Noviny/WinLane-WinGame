//Select a card from your hand

//Populates the player hand.
$(document).ready (function () {
	var makePlayerHand = function () {
		for (var i = 0; i < playerHand.length; i++) {
			var $elem = $("<div><p>"+playerHand[i]+"</p></div>").addClass( "card" );
			$(".playerhand").append($elem);
		};
	}


	var makeOpponentHand = function () {
		for (var i = 0; i < computerHand.length; i++) {
			var $elem = $("<div><p></p></div>").addClass( "card" );
			$(".opponenthand").append($elem);
		};
	}

	makePlayerHand();
	makeOpponentHand();


	var $selectedCard = null;
	var cardValue = null;

	//Weird bug where computer has a whole lot of 0 values?
var hidReplace = function (lane) {
	//does not unstage, only frontend?
	if ( $('.' + lane).find('.hid').length > 0 ) {
		$('.' + lane).find('.hid').html(lanes[lane]["staging"])
		$('.' + lane).find('.hid').removeClass('hid')
	}
};

var takeOppTurn = function () {
	//===========================
	var pickLane = Math.ceil(Math.random()*3);
	var pickCard = Math.ceil(Math.random()*computerHand.length) - 1;
	hidReplace(pickLane);
	forceCompTurn(pickLane, pickCard);
	$('.opponenthand :first').find('p').addClass('hid').html('hid')
	$('.' + pickLane ).find('.opponent').append( $('.opponenthand :first') )
};




//So playerTurn correctly unhids, but that is lacking from
//takeOppTurn above


//Click on a card to select it: 
	$(".card").click( function () {
		//This function is complicated enough
		//that it should be moved out to its own cardSelect function
		if ($(this).parent().attr("class") === "playerhand" ) {
			$selectedCard = $(this);
			// debugger;
			cardValue = $(this).find("p").html()
			//Shows us what card is selected
			//Does not ungreen if unselected
			$(this).css({color: "green"});
		}
	});

$(".opponent").click( function () {
	takeOppTurn()
})

//Click on a lane to assign a selected card to it
//Big bug, clicking a lane moves a dev,
//so that bit won't play, bit it still pushes the playerHand
//Also, all the code here is hardcoded for the player
	$(".yours").click( function () {
		//Stop values being incorrectly lost from playerHand
		// if (  )
		//Unhiding goes here
		//I beleive this will always check the first div?

		if ( $(this).parents().hasClass( "1" ) ) {
			hidReplace(1)
			myTurn(cardValue, 1)
		}
		if ( $(this).parents().hasClass("2") ) {
			hidReplace(2)
			myTurn(cardValue, 2)
		}
		if ( $(this).parents().hasClass("3") > 0 ) {
			hidReplace(3)
			myTurn(cardValue, 3)
		}
		//The editing of the backend func
		$selectedCard.find("p").addClass('hid');
		$selectedCard.find('.hid').html('hid');
		$(this).append($selectedCard);
		takeOppTurn()
		// console.log(lanes)
		// console.log("playerhand is " + playerHand)
		// console.log("other hand is " + computerHand)
		if ( playerHand.length + computerHand.length <= 0 ) {
			console.log("Game is over")
			hidReplace(1);
			hidReplace(2);
			hidReplace(3);
		}
	})
});

//Code from Jack to study

// var hiddenEl = null;

// $(".yours").eq(0).find("p").each(function (i, el) {
//   console.log( $(this) );
//   console.log( i );
//   console.log( el );
//   if ( $(this).html() === "hid" ) {
//     hiddenEl = $(this);
//     return;
//   } 
// });