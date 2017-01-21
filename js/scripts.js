
// assume there is a object named paragraph with inputs already
$(document).ready(function() {
	// Add functionality to Navigation buttons
	$("#store-nav").click(function() {
		$("#store").toggleClass('store-active');
	});
	// Key Code 13 is the return key, this prevents the return keys default functionality
	$(window).keydown(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			return false;
		}
	});
	var food = [
		{
			name: "Pico de Gallo",
			paragraph: "Stir the tomatoes, onion, cilantro, jalapeno pepper, lime juice, garlic, garlic powder, cumin, salt, and pepper together in a bowl. Refrigerate at least 3 hours before serving.",
			ingredients: ["a"]
		},
		{
			name: "Chicken Marsala",
			paragraph: "Season chicken breasts all over with salt and pepper.",
			ingredients: ["a","b"]
		}
	]
	// An Array of Strings for our text

	// Helper reset button, which clears the input field
	var helpReset = function () {
		//console.log("lol");
		document.getElementById("typing").value = "";
	}

	// Initialization of function that returns formatted data given what the user inputs
	// Either green for correct and red for incorrect
	// i - the counter of the word (to figure out which one has to be spanned)
	// w - 0 for when check is false (incorrect), 1 otherwise
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
	// para - the paragraph DOC
	// text - grabbing paragraph from food object randomly
	// arrayText - An array for text, so that we can compare each word directly
	// i - counter to count which index of array we are in
	// mainString - is the string that is constantly updated while user is typing
	// points - to keep track of score
	var para = document.getElementById("paragraph");
	var text = food[Math.floor(Math.random() * food.length)].paragraph;
	para.innerHTML = text;
	var arrayText = text.split(' ');
	var i = 0;
	var mainString = "";
	var points = 0;
	
	// Function that checks to see if what have typed matches with the current word
	var check = function (typed, word) {
		lengthTyped = typed.length;
		subWord = word.substring(0, lengthTyped);
		if (subWord === typed) {
			return true;
		}
		else {
			return false;
		}
	}
	
	console.log(arrayText);
	$(".typing").keypress(function(event){
		//console.log(i);
		character = String.fromCharCode(event.which);
		rightString = formatType(arrayText,i, 1);
		wrongString = formatType(arrayText,i, 0);
  		//console.log(rightString);
  		//console.log(wrongString);
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

  			if (check(mainString, arrayText[i]) && (arrayText[i].length == mainString.length)) {
  				i = i + 1;
  				points = points + 1;
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
  					document.getElementById("paragraph").innerHTML = food[Math.floor(Math.random() * food.length)].paragraph;
  					text = document.getElementById("paragraph");
  					arrayText = text.innerHTML.split(' ');
  					i = 0;
  					mainString = "";
  					console.log("check");

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



