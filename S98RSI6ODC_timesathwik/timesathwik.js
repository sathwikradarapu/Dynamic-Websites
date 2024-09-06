let hoursInput1 = document.getElementById("hoursInput");
let minutesInput1 = document.getElementById("minutesInput");
let convertBtn1 = document.getElementById("convertBtn");
let errorMsg1 = document.getElementById("errorMsg");
let timeInSeconds1 = document.getElementById("timeInSeconds");

convertBtn1.addEventListener("click", function() {
    if (hoursInput1.value !== "" && minutesInput1.value !== "") {
        let hoursdata = parseInt(hoursInput1.value);
        let minutesdata = parseInt(minutesInput1.value);
        let totaldata = 0;
        totaldata = (hoursdata * 3600) + (minutesdata * 60);
        timeInSeconds1.textContent = totaldata + "s";
        timeInSeconds1.classList.add("contime");
        errorMsg1.textContent = "";
        errorMsg1.classList.add("msg");
    }
    if (hoursInput1.value === "") {
        errorMsg1.textContent = "Please enter a valid number of hours.";
        errorMsg1.classList.add("msg");
    }
    if (minutesInput1.value === "") {
        errorMsg1.textContent = "Please enter a valid number of minutes.";
        errorMsg1.classList.add("msg");
    }
});