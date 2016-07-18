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
    var quote = quotes[randomNumber];
    // returns the randomly selected quote object
	return quote;	
}



//Create a function named printQuote which follows these rules:
function printQuote () {
 //printQuote calls the getRandomQuote function and stores the returned quote object in a variable
	var getRandomQuoteVar = getRandomQuote();
	console.log(getRandomQuoteVar);
//get the ID called 'quote-box' from the document(index.html) and change the HTML in the quote-box to...	
	document.getElementById('quote-box').innerHTML = 
//the below.
	'<p class="quote">' + getRandomQuoteVar.quote + '</p>' + 
	'<p class="source">' + getRandomQuoteVar.name + '</p>'; 
}



