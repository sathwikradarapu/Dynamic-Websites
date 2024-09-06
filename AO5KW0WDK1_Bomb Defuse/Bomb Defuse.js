let timer1 = document.getElementById("timer");
let defuser1 = document.getElementById("defuser");

let counter = parseInt(timer1.textContent);

let id1 = setInterval(function() {
    counter = counter - 1;
    timer1.textContent = counter;
    if (counter === 0) {
        timer1.textContent = "BOOM!!"
        clearInterval(id1);
    }
}, 1000);

defuser1.addEventListener('keydown', function(event) {
    if (event.key === "Enter" && defuser1.value === "Defuse" && counter !== 0) {
        timer1.textContent = "You did it!!";
        clearInterval(id1);
    }
});