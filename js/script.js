// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Create a random quote generator to display quotations on the screen after a button press

/*
Each quote object should have the following properties:
A quote property which contains a string: the text of the quote to display on the page
A source property which contains a string identifying the creator of the quote. For example: "Mark Twain" or "Traditional Irish proverb"
An optional citation property which contains a string identifying the publication the quote appears in. For example, "Famous Anonymous Jokes". If there is no known publication, then do not include this property on the object.
An optional year property which contains a number identifying the date of the quote. For example, 1997. If there is no known date, then do not include this property on the object.
*/


 function getRandomQuote () {
	//TODO RANDOMIZE QUOTE INDEX
	
	// selects a random quote object from the quotes array
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
	

//}

/*


//<p class="quote"> [quote here] </p> <p class="source"> [source here] <span class="citation"> [citation here] </span> <span class="year"> [year here] </span> </p>

//var sentence = document.getElementByClassName(quote);
//console.log(sentence);

/*
printQuote calls the getRandomQuote function and stores the returned quote object in a variable
printQuote constructs a string using the different properties of the quote object using the following HTML template: <p class="quote"> [quote here] </p> <p class="source"> [source here] <span class="citation"> [citation here] </span> <span class="year"> [year here] </span> </p>
printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing
printQuote displays the final HTML string to the page. You can use the following JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
*/



var html = document.getElementById('quote-box').innerHTML;
console.log(html);

document.getElementById('quote-box').innerHTML = quotes[0].quote;