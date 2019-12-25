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
					starty: 1,
					hintbool: true,
					hint: "https://goo.gl/maps/HWB8ZJPsQ88jTFgh8"
				},
			 	{
					clue: "Where was this photo taken",
					answer: "hvar",
					position: 2,
					orientation: "across",
					startx: 7,
					starty: 3,
					hintbool: true,
					hint: "Hint2.jpg"
				},
				{
					clue: "City with my favourite fountain.",
					answer: "berlin",
					position: 3,
					orientation: "across",
					startx: 12,
					starty: 3,
					hintbool: true,
					hint: "Hint3.JPG"
				},
				{
					clue: "Our favourite past time.",
					answer: "cwtch",
					position: 4,
					orientation: "across",
					startx: 6,
					starty: 5,
					hintbool: false,
					hint: ""
				},
				{
					clue: "City with its own cute version of St Fagans.",
					answer: "oslo",
					position: 5,
					orientation: "across",	
					startx: 1,
					starty: 6,
					hintbool: true,
					hint: "3.JPG"
				},
				{
					clue: "Our first abroad holiday.",
					answer: "paris",
					position: 6,
					orientation: "across",
					startx: 11,
					starty: 7,
					hintbool: false,
					hint: ""
				},
				{
					clue: "One of the best and probably most memorable museums we've been too.",
					answer: "vasa",
					position: 7,
					orientation: "across",
					startx: 2,
					starty: 10,
					hintbool: true,
					hint: "5.JPG"
				},
				{
					clue: "Finish this FAMOUS quote: \"MOOOOOOORE _________\"",
					answer: "yumyumyum",
					position: 8,
					orientation: "across",
					startx: 7,
					starty: 11,
					hintbool: false,
					hint: ""
				},
				{
					clue: "One of our favourite lifts in Val. The name for this lift roughly translates to \"Sun\" ",
					answer: "solais",
					position: 9,
					orientation: "across",
					startx: 3,
					starty: 16,
					hintbool: true,
					hint: "7.jpg"
				},
				{
					clue: "Shithole. Nice clock though.",
					answer: "prague",
					position: 10,
					orientation: "across",
					startx: 13,
					starty: 17,
					hintbool: true,
					hint: "4.JPG"
				},
				{
					clue: "Island we stayed in Venice, famous for its glass.",
					answer: "murano",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1,
					hintbool: false,
					hint: ""
				},
				{
					clue: "Finish this famous quote: \"Oh yeah _____ yeah!\"",
					answer: "duvet",
					position: 2,
					orientation: "down",
					startx: 8,
					starty: 1,
					hintbool: false,
					hint: ""
				},
				{
					clue: "Village we stayed in just outside Rhodes.",
					answer: "ialysos",
					position: 3,
					orientation: "down",
					startx: 15,
					starty: 1,
					hintbool: false,
					hint: ""
				},
				{
					clue: "What mountain did we spend your birthday climbing in 2018",
					answer: "snowdon",
					position: 4,
					orientation: "down",
					startx: 17,
					starty: 2,
					hintbool: true,
					hint: "6.jpg"
				},
				{
					clue: "Where was this photo taken <3",
					answer: "cosmeston",
					position: 5,
					orientation: "down",
					startx: 4,
					starty: 5,
					hintbool: true,
					hint: "Hint14.jpg"
				},
				{
					clue: "Highest elevation we've ever stood at",
					answer: "grandemotte",
					position: 6,
					orientation: "down",
					startx: 12,
					starty: 5,
					hintbool: false,
					hint: ""
				},
				{
					clue: "City where we drunk beer out of a horn. Nice view which we enjoyed looking at too ;)",
					answer: "brussels",
					position: 7,
					orientation: "down",
					startx: 8,
					starty: 9,
					hintbool: true,
					hint: "1.JPG"
				},
				{
					clue: "City where we spent a lot of time hiding from the rain in an Irish pub.",
					answer: "amsterdam",
					position: 8,
					orientation: "down",
					startx: 15,
					starty: 10,
					hintbool: true,
					hint: "2.JPG"
				},
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
