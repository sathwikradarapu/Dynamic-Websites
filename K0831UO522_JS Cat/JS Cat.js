function buttonoff() {
    document.getElementById("change-image").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("change-cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("change-text").textContent = "Switched Off";
    document.getElementById("change-button").style.backgroundColor = "#cbd2d9";
    document.getElementById("change-button2").style.backgroundColor = "green";
}

function buttonon() {
    document.getElementById("change-image").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("change-cat").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("change-text").textContent = "Switched On";
    document.getElementById("change-button").style.backgroundColor = "red";
    document.getElementById("change-button2").style.backgroundColor = "#cbd2d9";
}