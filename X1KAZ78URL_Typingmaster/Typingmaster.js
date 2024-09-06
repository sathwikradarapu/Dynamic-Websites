let speedTypingTestEl = document.getElementById("speedTypingTest");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let timerEl = document.getElementById("timer");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById("spinner");

let options = {
    method: "GET"
};

fetch("https://apis.ccbp.in/random-quote", options)
    .then(function(response) {
        return response.json();
    })
    .then(function(status) {
        quoteDisplayEl.textContent = status.content;
    });
let count = 0;
let uniqueID = setInterval(function() {
    count = count + 1;
    timerEl.textContent = count;
}, 1000);
submitBtnEl.onclick = function() {
    if (quoteDisplayEl.textContent === quoteInputEl.value) {
        clearInterval(uniqueID);
        resultEl.textContent = "You typed in " + count + " seconds.";
    }
    if (quoteDisplayEl.textContent !== quoteInputEl.value) {
        resultEl.textContent = "You typed incorrect sentence.";
    }
};

resetBtnEl.onclick = function() {
    spinnerEl.classList.add("d-block");
    let options = {
        method: "GET"
    };

    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(status) {
            quoteDisplayEl.textContent = status.content;
            spinnerEl.classList.remove("d-block");
        });
    quoteInputEl.value = "";
    clearInterval(uniqueID);
    timerEl.textContent = "0";
    count = 0;
    uniqueID = setInterval(function() {
        count = count + 1;
        timerEl.textContent = count;
    }, 1000);
};