// Game parameters,
// Board is 3 lanes
// Each player has cards [*, 1, 2, 3, 4, 5]

// Cards are worth their stated value, except * which multiplies by 2. Other cards are added if they are in the same lane.

// Play order
// Player 1 chooses any no of cards and places them face-down in lane1
// Player 2 places cards face up in lane1, then places cards face down in Lane2 and Lane3
// Player1 places cards in Lane2 and Lane3

// Complex version - player1 determines whether he wants to have the larger or smaller number in Lane1, then once on player2s turn, they decide what they want for lane 2 and 3 (highest or smallest) before playing their cards.

// Winner: calculate each player's lane result, determine which was higher, that player wins lane.
// Win 2 lanes win game.



// Draft variant turns: players take turns placing only one card in the lane of their choice.
// Cards are played facedown, but when a new card is place in the lane, any facedown cards are flipped up (there should only be one facedown card in each lane)

// Draft variant variant
// Players place more than one card in a turn, whether it is a set number, one or more, or a specific number each turn (last can balance for side advantage)

// Calculate winner:
// Product of all cards in lane
// Product of all cards in lane times the number of cards you placed
// Product times Number of ALL cards in lane

// Setup elements:
// Define arrays for the 'hands' (
// Define lanes (
//     Define sides of lanes (store cards in lane)
// Function calcWinner ()
// Function calcLaneWinner ()
// Function getPlayerMove ()
// Function hideCards ()
// Function revealCards ()
// Function whatsInLane ()
//     This will need more functions in it
// Var leftInHand

//original variant is actually great.