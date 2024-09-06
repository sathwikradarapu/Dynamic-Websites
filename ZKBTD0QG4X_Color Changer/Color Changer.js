let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

let cn = document.getElementById("bgContainer");
cn.style.backgroundColor = "#e75d7c";

function clicked() {
    let arl = bgColorsArray.length;
    let rn = Math.ceil(Math.random() * arl);
    let cl = bgColorsArray[rn - 1];
    cn.style.backgroundColor = cl;
}