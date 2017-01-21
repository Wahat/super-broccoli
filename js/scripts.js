
// assume there is a object named paragraph with inputs already
$(document).ready(function() {
	// Key Code 13 is the return key, this prevents the return keys default functionality
	$(window).keydown(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			return false;
		}
	});
	
	// An Array of Strings for our text
	var structpara = [
	"dog cat and everything else",
	"twitter facebook instagram",
	"gang gang gang"
	]

	// Helper reset button, which clears the input field
	var helpReset = function () {
		//console.log("lol");
		document.getElementById("typing").value = "";
	}

	// Initialization of function that returns formatted data given what the user inputs
	// Either green for correct and red for incorrect
	// i - ????
	// w - ????
	var formatType = function(arr,i,w) {
		formattedPara = "";
		for (j = 0; j < arr.length; j++) {
			if ((j == i) && (w==1)) {
				formattedPara += "<span class = \"right\"><strong>" + arr[i] + "</strong></span>" + " ";
				// add the class
			}
			else if ((j==i) && (w == 0)) {
				formattedPara += "<span class = \"wrong\"><strong>" + arr[i] + "</strong></span>" + " ";
			}
			else if (i == arr.length - 1) {
				formattedPara += arr[j] + " ";
			}
			else {
				formattedPara += arr[j] + " ";
			}
		}
		return(formattedPara);
	}
	//console.log(structpara.length);
	var para = document.getElementById("paragraph");
	// para will be useless, only a placeholder for the time being

	// This randomly determines the text that will appear on the paragraph screen
	// and syncs it to the html
	var text = structpara[Math.floor(Math.random() * structpara.length)];
	para.innerHTML = text;

	//console.log(text);
	var arrayText = text.split(' ');
	//console.log(arrayText);

	var i = 0;
	var mainString = "";
	var points = 0;
	var strlength = 0;

	var paragraphString = "";
	
	// Function that checks to see if what have typed matches with the current word
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
	
	console.log(arrayText);
	$(".typing").keypress(function(event){
		//console.log(i);
		character = String.fromCharCode(event.which);
		rightString = formatType(arrayText,strlength, 1);
		wrongString = formatType(arrayText,strlength, 0);
  		//console.log(rightString);
  		//console.log(wrongString);
  		//console.log (paragraphString);
  		//console.log(character);
  		if (character != " ") {
  			mainString = document.getElementById("typing").value + character;
  			//console.log(mainString);
  			if (check(mainString, arrayText[i])) {
  				// change css
  				//console.log("ok");
  				para.innerHTML = rightString;
  			}
  			else {
  				//change css
  				//console.log(arrayText[i]);
  				//console.log("not ok1");
  				para.innerHTML = wrongString;
  			}
  		}
  		else {
  			mainString = document.getElementById("typing").value
  			if (check(mainString, arrayText[i])) {
  				i = i + 1;
  				points = points + 1;
  				strlength = strlength + 1;
  				document.getElementById("score").innerHTML = points;
  				// For each 5 points generate a brocolli on the pan
  				if(points % 3 == 0) {
  					var randomBroccoli = "<img class=\'broccoli-icon\' src=\'images/broccoli_icon.jpg\' style=\"position: absolute; top:" + (Math.floor(Math.random() * 50)+10)+ "%; left:" + (Math.floor(Math.random() * 20)+40) +"%;\">";
  					console.log(randomBroccoli);
  					$(".pan").append(randomBroccoli);
  				}

  				if (i == arrayText.length) {
  					// done game
  					// alert("congrats! Points= " + points);
  					document.getElementById("paragraph").innerHTML = structpara[Math.floor(Math.random() * structpara.length)];
  					text = document.getElementById("paragraph");
  					arrayText = text.innerHTML.split(' ');
  					i = 0;
  					mainString = "";
  					strlength = 0;

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







recipies[1].name
recipies[1].paragraph
recipies[1].ingredients


var recipies = [
	{
		name: "Pho"
		paragraph: ""
		ingredients: ""
	}
]
