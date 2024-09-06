let fn = document.getElementById("firstNumber");
let sn = document.getElementById("secondNumber");
let ui = document.getElementById("userInput");
let gr = document.getElementById("gameResult");
fn.textContent = "12";
sn.textContent = "27";

function RestartButton() {
    let randomNumber1 = Math.ceil(Math.random() * 100);
    let randomNumber2 = Math.ceil(Math.random() * 100);
    ui.value = "";
    gr.textContent = "";
    fn.textContent = randomNumber1;
    sn.textContent = randomNumber2;
}

function CheckButton() {
    let n1 = parseInt(fn.textContent);
    let n2 = parseInt(sn.textContent);
    let sum = n1 + n2;
    if (parseInt(ui.value) === sum) {
        gr.textContent = "Congratulations!You got it right.";
        gr.style.backgroundColor = "#028a0f";
        gr.style.textAlign = "center";
    } else if (parseInt(ui.value) !== sum) {
        gr.textContent = "Please Try Again!";
        gr.style.backgroundColor = "#1e217c";
        gr.style.textAlign = "center";
    } else {
        gr.textContent = "Please Try Again!";
        gr.style.backgroundColor = "#1e217c";
        gr.style.textAlign = "center";
    }
}