let counterValue1 = document.getElementById("counterValue");
let incrementBtn1 = document.getElementById("incrementBtn");



incrementBtn1.onclick = function() {
    let data1 = counterValue1.textContent;
    let data2 = parseInt(data1) + 1;
    localStorage.setItem("clickCount", data2);
    counterValue1.textContent = data2;
}
let clickCount = localStorage.getItem("clickCount");
if (clickCount === null) {
    counterValue1.textContent = 0;
} else {
    counterValue1.textContent = clickCount;
}