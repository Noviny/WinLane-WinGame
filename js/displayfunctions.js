//Select a card from your hand

//Populates the player hand.
$(document).ready (function () {
	for (var i = 0; i < playerHand.length; i++) {
		var $elem = $("<div><p>"+playerHand[i]+"</p></div>").addClass( "card" );
		$(".playerhand").append($elem);
	};




	var cardSelect = function () {

	}
	var $selectedCard = null;
	var cardValue = null;



	$(".card").click( function () {
		//This function is complicated enough
		//that it should be moved out to its own cardSelect function
		if ($(this).parent().attr("class") === "playerhand" ) {
			$selectedCard = this;
			cardValue = $(this).find("p").html()
			//Shows us what card is selected
			//Does not ungreen if unselected
			$(this).css({color: "green"});
		}
	});

	$(".yours").click( function () {
		if ( $(this).parents().attr("class") === "lane 1" ) {
			myTurn(cardValue, 1)
		}
		if ( $(this).parents().attr("class") === "lane 2" ) {
			myTurn(cardValue, 2)
		}
		if ( $(this).parents().attr("class") === "lane 3" ) {
			myTurn(cardValue, 3)
		}
		// console.log("registered");
		// console.log($selectedCard);
		//The editing of the backend func
		$(this).append($selectedCard);
		// playerHand.shift();
		if ( playerHand.length /*+ computerHand.length*/ <= 0 ) {
			console.log("Game is over")
		}
	})



})

//.click should change hand and 