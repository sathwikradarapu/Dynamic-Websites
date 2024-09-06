let v1 = document.getElementById("aboutTab");
let v2 = document.getElementById("timeToVisitTab");
let v3 = document.getElementById("attractionsTab");
let b1 = document.getElementById("aboutButton");
let b2 = document.getElementById("timeToVisitButton");
let b3 = document.getElementById("attractionsButton");
v2.classList.add("d-none");
v3.classList.add("d-none");

function button1() {
    v1.classList.remove("d-none");
    v2.classList.add("d-none");
    v3.classList.add("d-none");
    b1.style.backgroundColor = "white";
    b2.style.backgroundColor = "#dae2ec";
    b3.style.backgroundColor = "#dae2ec";
}

function button2() {
    v1.classList.add("d-none");
    v2.classList.remove("d-none");
    v3.classList.add("d-none");
    b1.style.backgroundColor = "#dae2ec";
    b3.style.backgroundColor = "#dae2ec";
    b2.style.backgroundColor = "white";
}

function button3() {
    v1.classList.add("d-none");
    v2.classList.add("d-none");
    v3.classList.remove("d-none");
    b1.style.backgroundColor = "#dae2ec";
    b3.style.backgroundColor = "white";
    b2.style.backgroundColor = "#dae2ec";
}