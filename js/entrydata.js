// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "What is the name of the square where we sat and ate pasta in front ofthe fountain in Rome?" <a href="goo.gl/maps/dBiydAxiVFs1RSo38">Hint.</a>,
					answer: "madonnadeimonti",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
			 	{
					clue: "Where was this photo taken",
					answer: "hvar",
					position: 2,
					orientation: "across",
					startx: 7,
					starty: 3
				},
				{
					clue: "Fountain photo maybe?",
					answer: "berlin",
					position: 3,
					orientation: "across",
					startx: 12,
					starty: 3
				},
				{
					clue: "Our favourite past time.",
					answer: "cwtch",
					position: 4,
					orientation: "across",
					startx: 6,
					starty: 5
				},
				{
					clue: "Norway capital.",
					answer: "oslo",
					position: 5,
					orientation: "across",	
					startx: 1,
					starty: 6
				},
				{
					clue: "First abroad holiday.",
					answer: "paris",
					position: 6,
					orientation: "across",
					startx: 11,
					starty: 7
				},
				{
					clue: "One of the best and probably most memorable museums we've been too.",
					answer: "vasa",
					position: 7,
					orientation: "across",
					startx: 2,
					starty: 10
				},
				{
					clue: "\"MOOOOOOORE _________\"",
					answer: "yumyumyum",
					position: 8,
					orientation: "across",
					startx: 7,
					starty: 11
				},
				{
					clue: "One of our favourite lifts in Val this lifts name roughly translates to sun in French.",
					answer: "solais",
					position: 9,
					orientation: "across",
					startx: 3,
					starty: 16
				},
				{
					clue: "Shithole",
					answer: "prague",
					position: 10,
					orientation: "across",
					startx: 13,
					starty: 17
				},
				{
					clue: "Island we stayed in Venice, famous for its glass.",
					answer: "murano",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "\"Oh yeah _____ yeah!\"",
					answer: "duvet",
					position: 11,
					orientation: "down",
					startx: 8,
					starty: 1
				},
				{
					clue: "Village we stayed in just outside Rhodes",
					answer: "ialysos",
					position: 12,
					orientation: "down",
					startx: 15,
					starty: 1
				},
				{
					clue: "What mountain did we spend your birthday climbing in 2018",
					answer: "snowdon",
					position: 13,
					orientation: "down",
					startx: 17,
					starty: 2
				},
				{
					clue: "Where was this photo taken <3",
					answer: "cosmeston",
					position: 14,
					orientation: "down",
					startx: 4,
					starty: 5
				},
				{
					clue: "Highest elevation we've ever stood at",
					answer: "grandemotte",
					position: 15,
					orientation: "down",
					startx: 12,
					starty: 5
				},
				{
					clue: "Banged out window (LOL)",
					answer: "brussels",
					position: 16,
					orientation: "down",
					startx: 8,
					starty: 9
				},
				{
					clue: "420 blaze it faggot",
					answer: "amsterdam",
					position: 17,
					orientation: "down",
					startx: 15,
					starty: 10
				},
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
