

const newQuoteButton = document.querySelector("#js-new-quote");
const answerButton = document.querySelector("#js-tweet");

let current = {
    question: "",
    answer: ""
}

const triviaApiURL = "https://trivia.cyberwisp.com/getrandomchristmasquestion"

console.log(answerButton)

newQuoteButton.addEventListener("click", getQuote);
answerButton.addEventListener("click", displayAnswer)

async function getQuote() {
    try {
        const response = await fetch(triviaApiURL);

        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        // console.log(json);
        displayQuote(json.question);

        current.question = json.question;
        current.answer = json.answer;


    } catch (err) {
        console.log(err);
        alert("Fail");
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function displayAnswer() {
    const answerText = document.querySelector("#js-answer-text");
    answerText.textContent = current.answer;
}

getQuote();