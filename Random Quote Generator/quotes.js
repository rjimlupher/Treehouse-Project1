

/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
by Jim Lupher
******************************************/

/*
This is a simple array of objects containing a quote, its source, 
a citation if one exists, and a date if one is known. 
*/

const randomQuotes = [
	{
		quote: "He who makes a beast of himself gets rid of the pain of being a man.",
		source: "Samuel Johnson", 
		citation: "circa 1760",
		date: "undefined"
	},
	{
		quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
		source: "Mark Twain",
		citation: "Personal Notebook",
		date: "1904"
	},
	{
		quote: "Buy the ticket, take the ride.",
		source: "Hunter S. Thompson",
		citation: "Fear and Loathing in Las Vegas",
		date: "1971"
	},
	{
		quote: "May the days be aimless. Let the seasons drift. Do not advance action according to a plan.",
		source: "Don Delillo",
		citation: "White Noise",
		date: "1985"
	},
	{
		quote: "All human wisdom is summed up in two words: wait and hope.",
		source: "Alexandre Dumas",
		citation: "The count of Monte Cristo",
		date: "1844"
	},
	{
		quote: "What greater gift than the love of a cat.",
		source: "Charles Dickens",
		citation: "undefined",
		date: "undefined"
	},

]

/*
This 'getRandomQuote' function generates a random number between 0 and the length of the 
above array. It then assigns that number to one of the quotes in the array as an index.
*/

function getRandomQuote(quotes) {
	let number = Math.floor(Math.random() * quotes.length);
	let randomQuote = quotes[number];
	return randomQuote;
}



/*
This 'printQuote' function prints the quote to index.html. 
It checks to see if a citation and date are included and, if so,
concatenates them to the quote next to the name of the originator of the quote.
*/

//I changed from getElementsbyClass to getElementById due to a suggestion by Nick Bulbeck on Slack 
function printQuote() {

	let quoteObject = getRandomQuote(randomQuotes);
	
	let quoteAndSource = `
	<p class="quote">${quoteObject.quote}</p>
	<p class="source">${quoteObject.source}
	`;
	
	/*
	I was ready to call it quits here, but at this point that I realized 
	that I'd rushed through the instructions without looking at the 
	walkthrough, so I added the following, finishing the project.
	*/

	if (quoteObject.citation !== "undefined") {
		quoteAndSource += `<span class="citation">${quoteObject.citation}</span>`;
	};
	if (quoteObject.date !== "undefined") {
		quoteAndSource += `<span class="year">${quoteObject.date}</span>`;
	}
	quoteAndSource += `</p>`;

	return document.getElementById('quote-box').innerHTML = quoteAndSource;
}

printQuote()

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);



