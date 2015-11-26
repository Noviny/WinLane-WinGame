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
			if ( $selectedCard != null ) {
				$selectedCard.removeClass("selected");
			}
			$selectedCard = $(this);
			cardValue = $(this).find("p").html()
			//Shows us what card is selected
			//Does not ungreen if unselected
			$(this).addClass("selected");
		}
	});

//This function forces an opponent turn. Beware!
	// $(".opponent").click( function () {
	// 	takeOppTurn()
	// })
	// $(".yours").find(".hid")[0].hover(function () {
	// 	$(this).html("CHECK")
	// 	console.log("CHECK")
	// 	(".yours").find(".hid")
	// })

	$(".yours").click( function () {
		if ( $selectedCard ) {
			for (var i = 1; i <= 3; i++) {
				if ( $(this).parents().hasClass( i ) ) {
					hidReplace(i)
				myTurn(cardValue, i)
				}
			};
			$selectedCard.find("p").addClass('hid');
			$selectedCard.removeClass("selected");
			$(this).append($selectedCard);
			$selectedCard = null;
			takeOppTurn()
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



