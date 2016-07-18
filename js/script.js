// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Create a function named getRandomQuote which:
//selects a random quote object from the quotes array
//returns the randomly selected quote object
 function getRandomQuote () {
	//TODO RANDOMIZE QUOTE INDEX
	var randomNumber = Math.floor(Math.random() * 5);
	// selects a random quote object from the quotes array
<<<<<<< HEAD
    var quote = quotes[randomNumber];
    // returns the randomly selected quote object
	return quote;	
=======
    var quote = quotes[2];
    // returns the randomly selected quote object
	return quote;	
}

//Create a function named printQuote which follows these rules:

function printQuote (getRandomQuote) {
 var getRandomQuoteVar = getRandomQuote; //getRandomQuote () 
 var listHTML = '<ol>';
  for ( var i = 0; i < quotes.length; i += 1) {
    listHTML += '<li>' + quotes[i][0] + ' by ' + quotes[i][1] + '</li>';
  }
  listHTML += '</ol>';
  //print(listHTML);
  console.log(listHTML);
  }

//printQuote calls the getRandomQuote function and stores the returned quote object in a variable	
printQuote (getRandomQuote);
>>>>>>> origin/master
	

//}

/*


//<p class="quote"> [quote here] </p> <p class="source"> [source here] <span class="citation"> [citation here] </span> <span class="year"> [year here] </span> </p>

//var sentence = document.getElementByClassName(quote);
//console.log(sentence);

console.log(getRandomQuote ());

/*
Create a function named printQuote which follows these rules:
printQuote calls the getRandomQuote function and stores the returned quote object in a variable
printQuote constructs a string using the different properties of the quote object using the following HTML template: <p class="quote"> [quote here] </p> <p class="source"> [source here] <span class="citation"> [citation here] </span> <span class="year"> [year here] </span> </p>
printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing
printQuote displays the final HTML string to the page. You can use the following JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
*/

function printQuote () {
 var getRandomQuoteVar = getRandomQuote();
	console.log(getRandomQuoteVar);
	 document.getElementById('quote-box').innerHTML = 
	'<p class="quote">' + getRandomQuoteVar.quote + '</p>' + 
	'<p class="source">' + getRandomQuoteVar.name + '</p>'; 
}




<<<<<<< HEAD
=======
document.getElementById('quote-box').innerHTML = quotes[0].quote;
>>>>>>> origin/master
