
//alert("Hello world");
//var howAreYou = prompt("How are you doing today?");
//document.write(howAreYou);


 function getRandomQuote () {
	//TODO RANDOMIZE QUOTE INDEX
	
	// selects a random quote object from the quotes array
    var quote = quotes[2].name;
    // returns the randomly selected quote object
	return quote;	
}


console.log(getRandomQuote ());




function printQuote () {
 var getRandomQuoteVar = getRandomQuote; //getRandomQuote () 
 var listHTML = '<ol>';
  for ( var i = 0; i < quotes; i += 1) {
    listHTML += '<li>' + quotes[i][0] + ' by ' + quotes[i][1] + '</li>';
  }
  listHTML += '</ol>';
  //print(listHTML);
  console.log(listHTML);
  }

//printQuote calls the getRandomQuote function and stores the returned quote object in a variable	
printQuote ();

//

var message = '';
var student;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

for (var i = 0; i < students.length; i += 1) {
  student = students[ i ];
  message += '<h2>Student: ' + student.name + '</h2>';
  message += '<p>Track: ' + student.track + '</p>';
  message += '<p>Points: ' + student.points + '</p>';
  message += '<p>Achievements: ' + student.achievements + '</p>';
  
}
print(message);