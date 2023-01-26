
// Get elements 

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show new quote 

function newQuote() {
    // pick a random quote from API array 
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // Checks if Author field is blank and replaces it with unknown
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    quoteText.textContent = quote.text;
    // Check quote length  to determine the style 
    
    if (quote.text.length > 50) {
       quoteText.classList.add('long-quote');
    } else {
       quoteText.classList.remove('long-quote');
  }
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes =  await response.json();
        
        newQuote();

    } catch(error) {
        // catching error
        
    }
}
// On Load
getQuotes();