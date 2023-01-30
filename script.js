
// Get elements 

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show new quote 

function newQuote() {
    loading();
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
  // Set quote, Hide loader
  quoteText.textContent = quote.text;
  complete();
}

// Get Quotes From API
async function getQuotes() {
    loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes =  await response.json();
        
        newQuote();

    } catch(error) {
        // catching error
        
    }
}

// Twitter Quote

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();