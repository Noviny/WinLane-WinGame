#Win Lane, Win Game

This is a game being built by Ben 'Noviny' Conolly. The game can easily be played with a deck of playing cards, but is being built online as a personal project. Below are the game's rules, as well as some design notes.

Currently the game is designed for two players. The design notes document will detail some of the possible design directions, as well as easy ways to mod the game for more players.

##Link to live game
[Play win-lane, win-game](http://noviny.github.io/WinLane-WinGame/)

## Current Version:
This version includes three different levels to play around with, against a computer opponent. it is star wars skinned.

##Rules

###Goal
The goal in WLWG is to have the highest total in two out of three lanes at the end of a game, once each player has played all their cards.

###Setup

1. Each player is given a hand with cards one to five in it (ace as one for a traditional deck) as well as a wildcard (a jack will do if you have no jokers)
2. Three lanes are established in the table by placing a jak, a queen and a king in the middle of the table. Alternately, you can split a sheet of paper in to three lanes.
3. Players take turns playing one card each, choosing which lane to play a card to.
4. The last card played to a lane by either player is left face-down. Playing a new card to a lane flips up any other face-down card in that lane.
5. The wildcard is worth no points on its own, but doubles the value of cards you have played to the lane it is in.

###Design Notes/Advanced Notes
 While at a surface level, the game is about simple sums, the fun and difficulty of the game involves guessing at hidden information, making informed choices, and decieving your opponents about your actions. This is where the fun comes from.

 There are a huge number of variables that could be used to make this game more complicated, however doing so could detract from the core gameplay experience (the whole information guessing), so while I am likely to test variables, I recommend playing the base game, even if it looks simple to you.

 It is likely that player 2 has a slight advantage, as they get to play a card while the opponent has no information. Whether this is small or game-breaking, testing has not yet shown.

###Variant Rules
 If you believe player 2 is overly advantaged, you can change to a variant where player one plays 2 card on each turn, while player two plays 3 cards their first turn, 2 cards their next turn, and 1 card their final turn. If you play this variant, remember that only one card can be face-down in a lane, even if a player commits multiple cards there on a single one of their turns.

 If you are playing this variant, you may want to allow players to play cards one at a time, to see what is flipped over with each card played before choosing to commit another one.

###Current coding progress
I have functions for almost every element of the game. Most do not work, but now I can see all the pieces, I can work on making them operate. See functions.js for where I am working.