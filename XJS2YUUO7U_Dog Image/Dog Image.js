let imageElement = document.getElementById("image");
let originalImageWidth = "200px";
imageElement.style.width = originalImageWidth;
let span = document.getElementById("imageWidth");
let warning = document.getElementById("warningMessage");
originalImageWidth = parseInt(originalImageWidth);
span.textContent = "200px"

function incbutton() {
    if (originalImageWidth <= 295) {
        let inc_width = originalImageWidth + 5;
        let format = inc_width + "px";
        imageElement.style.width = format;
        originalImageWidth = inc_width;
        warning.textContent = "";
        span.textContent = format;
    } else {
        warning.textContent = "Too big. Decrease the size of the image";
        warning.style.color = "red";
    }
}

function decbutton() {
    if (originalImageWidth >= 105) {
        let inc_width = originalImageWidth - 5;
        let format = inc_width + "px";
        imageElement.style.width = format;
        originalImageWidth = inc_width;
        warning.textContent = "";
        span.textContent = format;
    } else {
        warning.textContent = "Can't Visible. Increase the size of the image";
        warning.style.color = "red";
    }
}