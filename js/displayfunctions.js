//Select a card from your hand

//Populates the player hand.
$(document).ready (function () {
	for (var i = 0; i < playerHand.length; i++) {
		var $elem = $("<div><p>"+playerHand[i]+"</p></div>").addClass( "card" );
		$(".playerhand").append($elem);
	};




	var unHide = function () {
		
	}

	var $selectedCard = null;
	var cardValue = null;


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
			// if ( $(this).find("p").html() === "hid" ) {
			// 	console.log($(this).find("hid").html())
			// 	$(this).find("p").html(lanes[1]["staging"])
			// $(".hid").removeClass("hid")
			// }
			if ( $(this).find('.hid').length ) {
				$(this).find('.hid').html(lanes[1]["staging"])
				$(this).find('.hid').removeClass('hid')
			}
			myTurn(cardValue, 1)
		}
		if ( $(this).parents().hasClass("2") ) {
			if ( $(this).find('.hid').length ) {
				$(this).find('.hid').html(lanes[2]["staging"])
				$(this).find('.hid').removeClass('hid')
			}
			myTurn(cardValue, 2)
		}
		if ( $(this).parents().hasClass("3") ) {
			if ( $(this).find('.hid').length ) {
				$(this).find('.hid').html(lanes[3]["staging"])
				$(this).find('.hid').removeClass('hid')
			}
			myTurn(cardValue, 3)
		}
		//The editing of the backend func
		$selectedCard.find("p").addClass('hid');
		$selectedCard.find('.hid').html('hid');
		$(this).append($selectedCard);
		// playerHand.shift();
		if ( playerHand.length /*+ computerHand.length*/ <= 0 ) {
			console.log("Game is over")
		}
	})






})








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