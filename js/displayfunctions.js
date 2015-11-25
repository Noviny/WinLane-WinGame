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

	var hidReplace = function (lane) {
		if ( $('.' + lane).find('.hid').length > 0 ) {
			$('.' + lane).find('.hid').html(lanes[lane]["staging"])
			$('.' + lane).find('.hid').removeClass('hid')
		}
	};

var takeOppTurn = function () {
	var pickLane = Math.ceil(Math.random()*3);
	var pickCard = Math.ceil(Math.random()*computerHand.length) - 1;
	hidReplace(pickLane);
	forceCompTurn(pickLane, pickCard);
	$('.opponenthand :first').find('p').addClass('hid').html('?')
	$('.' + pickLane ).find('.opponent').append( $('.opponenthand :first') )
};

//Click on a card to select it: 
	$(".card").click( function () {
		if ($(this).parent().attr("class") === "playerhand" ) {
			$selectedCard = $(this);
			cardValue = $(this).find("p").html()
			//Shows us what card is selected
			//Does not ungreen if unselected
			$(this).css({color: "green"});
		}
	});

	// $(".opponent").click( function () {
	// 	takeOppTurn()
	// })

	$(".yours").click( function () {
		//Stop values being incorrectly lost from playerHand
		// if (  )
		if ( $selectedCard ) {
			if ( $(this).parents().hasClass( "1" ) ) {
			//Can we write this for one for loop?
			//We should write this for one for loop, not three ifs
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
			$selectedCard.find("p").addClass('hid');
			$selectedCard.find('.hid').html('?');
			$(this).append($selectedCard);
			$selectedCard = null;
			takeOppTurn()
			//EndofGame Function
			//Does not modify the board at all to note all this
			if ( playerHand.length + computerHand.length <= 0 ) {
				console.log("Game is over")
				for (var i = 1; i <= 3; i++) {
					hidReplace(i)
				};
				var theWinner = winGame();
				var endLog = "<p>the winner of lane 1 was " + endInfo[1]["winner"] + "</p><p>the winner of lane 2 was " +  endInfo[2]["winner"] + "</p><p>the winner of lane 3 was " +  endInfo[3]["winner"] + "</p><p>The winner of the game was " + theWinner + ".</p>"
				var $endScrawl = $(endLog);
				$(".movelog").removeClass("hidden");
				$(".playerhand").addClass("hidden");
				$(".opponenthand").addClass("hidden");
				$(".movelog").append($endScrawl);
			}
		}
	})
});