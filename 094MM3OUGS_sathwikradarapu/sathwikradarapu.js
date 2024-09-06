let button1 = document.getElementById("buttonselect");
let text1 = document.getElementById("message");
button1.onclick = function() {
    let data = text1.value;
    console.log(data);
    localStorage.setItem("UserEnteredText", data);
}
let storeddata = localStorage.getItem("UserEnteredText");
if (storeddata === "") {
    text1.value = "";
} else {
    text1.value = storeddata;
}