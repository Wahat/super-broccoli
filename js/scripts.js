
// assume there is a object named paragraph with inputs already
$(document).ready(function() {
	$(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
	var structpara = [
		"Does the evidence price a rope? Below the nurse hums the breaking protest. An inverse discriminates a polynomial potato. When will my influential protein travel a supermarket? The roof swings? A resource lines an alarmed machinery beneath an infant.",
		"A chemist causes a knight against the justifiable advice. Any immune night fasts after the yeti. The unpleasant coffee arrives in a guideline. The speaking girlfriend lathers the pending intellectual. The exhaust defends the deposit throughout a round rat. Should an objectionable rescue clear the liquid?",
		"The weekly man orbits beneath a screw. A textual yard slides around an elevator. Can the wary stare decide? On top of a verbatim coke pretends the harmful vicar.",
		"Why can't an overdue unfortunate orbit? The campaign triggers the beloved. An unworkable kernel assures a myth. The considerate misuse detects the ecology. Does the specimen win the life? The deterrent tosses the different flavor under a breakdown.",
		"A garble prolongs the beach. How can the syndicate translate the skull? The transparent lip kids. An alien plays in the pat node. Opposite the chat cruises the persecuted romance. Why won't this pleasing skeleton charm a jet?",
		"Its fashion posts the pet against the bearing worry. Over the assault sings her menu. This portrayed norm stays the shell across the forbidden axiom. Will a finished prophet boggle beneath a reform? The gate flags a fell dye. My mayor offends.",
		"Should the fatal evil calculate? Why does the accompanied poster frown? Near the fish rolls a floating fringe. The bounce reports every dominated dirt. A bigotry ribbons my low continental. An akin money coughs around whatever taken stuff.",
		"Can the temperature warehouse the hobby? The booked minister warehouses the century outside the promised waffle. The patent divides the effective asterisk. The notable counts within the severe fudge. How will a finest tangent surround the enormous jerk? How can a terminated client poison the respective dot?",
		"The transformed arcade fusses around the forty urge. The predecessor peers? The liquid vessel parallels a revenge across any swimming person. Without the blow vanishes the hell.",
		"An aforementioned romance consents throughout the crazy caffeine. Against the pig despairs an immortal. A surplus independence manipulates the interrupted hardship. Above the bankrupt washes an unfortunate.",
		"The hardy heterosexual paces above the demonstrated premise. A considerable mill storms. A confident honey poses with a youth. A chestnut floats a sexy bastard.",
		"Why can't a startling trade conform with the blade? Why can't a freedom snow the external minimalist? An electronic card habits your bonus. A lighted contempt hums. When will the cased chapel refresh the rot? This carrier ascends?",
		"The widest obstruction authorizes the moderate past the particular molecule. The boy scares the often cash beneath a pedestrian. Each situated satellite tolls a global teenage. This damned biography plays around the dropping optic.",
		"Why can't a virtue accept? Will the neck insult a lamp? The scotch horde flies. When will the younger extremist riot inside a wine? Should a resulting graduate gasp the fundamentalist? Each varied century reasons across the weasel.",
		"Below the damage lurks the vegetable. The west snacks on top of the publisher! A destined damp yields to whatever decided universe. A strength volunteers? The pedestrian leaks in an apple. The transported chest compiles the enclosed carpet.",
		"Another regarding horde chooses across the readable jail. The spatial backlog weds outside the magazine. An antidote flours his charter. The compromise hesitates opposite a deadline!",
		"The mask assures the familiar bull below an abstract. Why can't the explicit context tread the dogma? The jumping scroll bowls the center against its bone audience. The style sweeps across the paper!"
	]
	console.log(structpara.length);
	document.getElementById("paragraph").innerHTML = structpara[Math.floor(Math.random() * structpara.length)];
	var text = document.getElementById("paragraph");
	var arrayText = text.innerHTML.split(' ');
	var i = 0;
	var mainString = "";
	var check = function (typed, word) {
		lengthTyped = typed.length;
		subWord = word.substring(0, lengthTyped);
		if (subWord === typed) {
			return true;
		}
		else {
			false;
		}
	}
	var helpReset = function () {
		//console.log("lol");
		document.getElementById("typing").value = "";
	}
	console.log(arrayText);
	$(".typing").keypress(function(event){
		//console.log(i);
  		character = String.fromCharCode(event.which);
  		//console.log(character);
  		if (character != " ") {
  			mainString = document.getElementById("typing").value + character;
  			//console.log(mainString);
  			if (check(mainString, arrayText[i])) {
  				// change css
  				//console.log("ok");
  			}
  			else {
  				//change css
  				//console.log(arrayText[i]);
  				//console.log("not ok1");
  			}
  		}
  		else {
  			mainString = document.getElementById("typing").value
  			if (check(mainString, arrayText[i])) {
  				i = i + 1;
  				if (i == arrayText.length) {
  					// done game
  					alert("congrats");
  				}
  				document.getElementById("typing").value = "";
  				setTimeout(helpReset,10);
  			}
  			else {
  				// change css
  				//console.log("not ok2");
  			}	
  		}
  		
	});
	
})
