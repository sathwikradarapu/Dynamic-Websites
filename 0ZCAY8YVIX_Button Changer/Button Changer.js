function applychange() {
    let v1 = document.getElementById("bgColorInput");
    let v2 = document.getElementById("fontColorInput");
    let v3 = document.getElementById("fontSizeInput");
    let v4 = document.getElementById("fontWeightInput");
    let v5 = document.getElementById("paddingInput");
    let v6 = document.getElementById("borderRadiusInput");
    let v7 = document.getElementById("customButton");
    v7.style.backgroundColor = v1.value;
    v7.style.color = v2.value;
    v7.style.fontSize = v3.value;
    v7.style.fontWeight = v4.value;
    v7.style.padding = v5.value;
    v7.style.borderRadius = v6.value;
}