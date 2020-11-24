// This is my first project for Treehouse. 

/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const randomQuotes = [
	{
		quote: "He who makes a beast of himself gets rid of the pain of being a man.",
		source: "Samuel Johnson", 
		citation: "undefined",
		date: "unknown"
	},
	{
		quote: "Nothing is true; everything is permitted.",
		source: "William S. Burroughs",
		citation: "undefined",
		date: "unknown"
	},
	{
		quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
		source: "Mark Twain",
		citation: "undefined",
		date: "unknown"
	},
	{
		quote: "Buy the ticket, take the ride.",
		source: "Hunter S. Thompson",
		citation: "undefined",
		date: "unknown"
	},
	{
		quote: "May the days be aimless. Do not advance action according to a plan.",
		source: "Don Delillo",
		citation: "undefined",
		date: "unknown"
	},
	{
		quote: "All human wisdom is summed up in two words: wait and hope.",
		source: "Alexandre Dumas",
		citation: "undefined",
		date: "unknown"
	},
	{
		quote: "What greater gift than the love of a cat.",
		source: "Charles Dickens",
		citation: "undefined",
		date: "unknown"
	},
	{
		quote: "It is never too late to be what you might have been.",
		source: "George Eliot",
		citation: "undefined",
		date: "unknown"
	},

]

/***
 * `getRandomQuote` function
 * This function will generate a number from 0 to the length of the array.
 * It will then assign that number as an index to the array, returning a quote.
***/

function getRandomQuote(quotes) {
	let number = Math.floor(Math.random() * quotes.length) 
	let randomQuote = quotes[number]
	return randomQuote
}

//Here I am storing the output of getRandomQuote in a variable to be used in the function below
quoteObject = getRandomQuote(randomQuotes)

console.log(quoteObject)


/***
 * `printQuote` function
***/
/* function printQuote (randomQuote) {

} */

//I learned how to use getElementsbyClassName at https://www.youtube.com/watch?v=dlaYyZ6vW48
function printQuote(citation) {
	quoteParagraph = document.getElementsByClassName("quote")
	sourceParagraph = document.getElementsByClassName("source")
	quoteParagraph.innerhtml = `${citation.quote}`
	sourceParagraph.innerhtml = `${citation.source}`
}

printQuote(quoteObject)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);



