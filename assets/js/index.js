const quotes = {
    0 : '“An eye for an eye will only make the whole world blind.” ― Mahatma Gandhi',
    1 : '“All war is a symptom of mans failure as a thinking animal.”― John Steinbeck',
    2 : '“Do not think of knocking out another persons brains because he differs in opinion from you. It would be as rational to knock yourself on the head because you differ from yourself ten years ago.” ― Horace Mann',
    3: '“If somebody offers you an amazing opportunity but you are not sure you can do it, say yes – then learn how to do it later!” ― Richard Branson'
}

generateQuote = ()=> document.getElementById("quoteHolder").innerHTML = quotes[Math.floor(Math.random()*4)];
generateQuote()