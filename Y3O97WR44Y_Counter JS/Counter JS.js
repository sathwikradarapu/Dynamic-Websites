let countelement = document.getElementById("change-value");

function decbtn() {
    let previousvalue = countelement.textContent;
    let updatedvalue = parseInt(previousvalue) - 1;
    document.getElementById("change-value").textContent = updatedvalue;
    if (updatedvalue > 0) {
        document.getElementById("change-value").style.color = "green";
    } else if (updatedvalue < 0) {
        document.getElementById("change-value").style.color = "red";
    } else {
        document.getElementById("change-value").style.color = "black";
    }
}

function rstbtn() {
    document.getElementById("change-value").textContent = "0";
    document.getElementById("change-value").style.color = "black";
}

function incbtn() {
    let previousvalue = countelement.textContent;
    let updatedvalue = parseInt(previousvalue) + 1;
    document.getElementById("change-value").textContent = updatedvalue;
    if (updatedvalue > 0) {
        document.getElementById("change-value").style.color = "green";
    } else if (updatedvalue < 0) {
        document.getElementById("change-value").style.color = "red";
    } else {
        document.getElementById("change-value").style.color = "black";
    }
}