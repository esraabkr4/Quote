var quote_arr = [
    {
        quote: `"Be yourself; everyone else is already taken."`,
        author: `Oscar Wilde`
    },
    {
        quote: `"So many books, so little time."`,
        author: `Frank Zappa`
    },
    {
        quote: `"A room without books is like a body without a soul."`,
        author: `Marcus Tullius Cicero`
    },
    {
        quote: `"You only live once, but if you do it right, once is enough."`,
        author: `Mae West`
    },
    {
        quote: `"Be the change that you wish to see in the world."`,
        author: `Mahatma Gandhi`
    },
    {
        quote: `"If you tell the truth, you don't have to remember anything."`,
        author: `Mark Twain`
    },
    {
        quote: `"Always forgive your enemies; nothing annoys them so much."`,
        author: `Oscar Wilde`
    },
    {
        quote: `"It's not what happens to you, but how you react to it that matters."`,
        author: `Epictetus`
    },
    {
        quote: `"Do not take life too seriously. You will not get out alive."`,
        author: `Elbert Hubbard`
    },
    {
        quote: `"The best revenge is massive success."`,
        author: `Frank Sinatra`
    }
];
var new_quote = document.getElementById("new-quote");
var author = document.getElementById("author");
var last = 0;
var current = 0;
document.getElementById("quote-btn").onclick = function () {
    RandomQuote();
    document.getElementById("quote-div").style.display = 'flex';
};
function RandomQuote() {
    current = Math.floor(Math.random() * (quote_arr.length));
    if (current != last) {
        last = current;
        new_quote.innerHTML = quote_arr[current].quote;
        author.innerHTML = "--" + quote_arr[current].author;
    } else {
        RandomQuote();
    }
}