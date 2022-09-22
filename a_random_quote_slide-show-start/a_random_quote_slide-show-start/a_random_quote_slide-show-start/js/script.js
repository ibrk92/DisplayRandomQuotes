/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/


// Creating the object inside of the my quotes array, and adding 4 properties for each
const quotes = [{

    quote: "I have been truthful all along the way. The truth is more interesting, and if you tell the truth you never have to cover your tracks.",
    source: "Gordon Atkinson",
    citation: "RealLivePreacher",
    year: 2004,

}, {
    quote: "If we take care of the moments, the years will take care of themselves.",
    source: "Maria Edgeworth",
    citation: "O Magazine",
    year: 2004
}, {
    quote: "If you'd like to be good at something, the first thing to out the window is the notion of perfection.",
    source: "Scott Berkun",
    citation: "Confessions of a Public Speaker ",
    year: 2009
}, {

    quote: "I can't criticize what I don't understand. If you want to call this art, you've got the benefit of all my doubts.",
    source: "Charles Rosin",
    citation: "Northern Exposure",
    year: 1990
}, {

    quote: "The nature of society is largely determined by the direction in which talent and ambition flow-by the tilt of the social landscape.",
    source: "Eric Hoffer",
    citation: "The Temper of Our Time",
    year: 1967

}, {

    quote: "It seemed like forever ago, like we’d had this brief but still infinite forever. Some infinities are bigger than other infinities.",
    source: "John Green",
    citation: "The Fault in Our Stars",
    year: 2012

},{

    quote: "Happiness arises in a state of peace, not of tumult.",
    source: "Ann Radcliffe",
    citation: "The Mysteries of Udolpho",
    year: 1764

}, {

    quote: "If you want change, you have to make it. If we want progress we have to drive it.",
    source: "Susan Rice",
    citation: "Stanford University Commencement",
    year: 2010,

},]


/***
 * `getRandomQuote` function
  
***/



function getRandomQuote(my_array){


    //getting randomNumber using the Math.random method
   var randomNumber = Math.floor((Math.random() * (quotes.length)));
   
   // getting the random quote from quotes array using for,
   for( var i = 0; i < my_array.length; i++){

    var randomQuote = my_array[randomNumber];

   }

   return randomQuote;

}


function printQuote() {
    // 1. Create a variable that calls the getRandomQuote()
        var display_quote = getRandomQuote(quotes);
    // 2. Create a variable that initiates your HTML string with
    // the first two <p></p> elements, their classNames,
    // and the quote and source properties, but leave off
    // the second closing `</p>` tag for now
        var quoteText = "";
        quoteText += "<p class='quote'>" + display_quote.quote + "</p>" + "<p class='source'>" + display_quote.source;

        
    // 3. Use an if statement to check if the citation property
    // exists, and if it does, concatenate a <span></span>
    // element, appropriate className, and citation property

    // to the HTML string
    
    if (display_quote.hasOwnProperty("citation")){

        quoteText += "<span class='citation'>" + display_quote.citation + "</span>";
    }
    // 4. Use an if statement to check of the year property exists,
    // and if it does, concatenate a <span></span> element,
    // appropriate className, and year property to the HTML
    //string

    
    if (display_quote.hasOwnProperty("year")){

        quoteText += "<span class='year'>" + display_quote.year +  "</span>";
    }
        
    // 5. After the two if statements, concatenate the closing </p>
    // tag to the HTML string

    quoteText += "</p>";
    // 6. set the innerHTML of the quote-box div to equal the
    // complete HTML string}

    document.getElementById("quote-box").innerHTML = quoteText;

    
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

// addeeventlistener method that starts when user click the button. It is also necessary to use 'click' parameters,

document.getElementById('load-quote').addEventListener("click", printQuote, false);

