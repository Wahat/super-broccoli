
// assume there is a object named paragraph with inputs already
$(document).ready(function() {
	$(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
	var structpara = [
		"dog cat and everything else",
		"twitter facebook instagram",
		"gang gang gang"
	]
	//console.log(structpara.length);
	document.getElementById("paragraph").innerHTML = structpara[Math.floor(Math.random() * structpara.length)];
	var text = document.getElementById("paragraph");
	var arrayText = text.innerHTML.split(' ');
	var i = 0;
	var mainString = "";
	var points = 0;
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
  				points = points + 1;
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
  					alert("congrats! Points= " + points);
  					document.getElementById("paragraph").innerHTML = structpara[Math.floor(Math.random() * structpara.length)];
					text = document.getElementById("paragraph");
					arrayText = text.innerHTML.split(' ');
					i = 0;
					mainString = "";
					
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
