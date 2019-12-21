// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "What is the name of the square where we sat and ate pasta in front ofthe fountain in Rome?",
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
					startx: 7,
					starty: 3
				},
				{
					clue: "Electromagnetic (abbr.)",
					answer: "em",
					position: 7,
					orientation: "down",
					startx: 11,
					starty: 3
				},
				{
					clue: "No. 13 across does this to a voltage",
					answer: "steps",
					position: 9,
					orientation: "down",
					startx: 5,
					starty: 5
				},
				{
					clue: "Emits a lout wailing sound",
					answer: "siren",
					position: 11,
					orientation: "down",
					startx: 11,
					starty: 7
				},
				{
					clue: "Information technology (abbr.)",
					answer: "it",
					position: 12,
					orientation: "down",
					startx: 1,
					starty: 8
				},
				{
					clue: "Asynchronous transfer mode (abbr.)",
					answer: "atm",
					position: 14,
					orientation: "down",
					startx: 3,
					starty: 9
				},
				{
					clue: "Offset current control (abbr.)",
					answer: "occ",
					position: 15,
					orientation: "down",
					startx: 7,
					starty: 9
				},
				{
					clue: "Offset current control (abbr.)",
					answer: "occ",
					position: 15,
					orientation: "down",
					startx: 12,
					starty: 12
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
