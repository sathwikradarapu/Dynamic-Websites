let bl = document.getElementById("billAmount");
let pt = document.getElementById("percentageTip");

function calculate() {
    let bl_ac = bl.value;
    let pt_ac = pt.value;
    console.log(bl_ac)
    if (bl_ac === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input";
        document.getElementById("errorMessage").style.color = "red";
    } else if (pt_ac === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input";
        document.getElementById("errorMessage").style.color = "red";
    } else if (bl_ac === "" && pt_ac === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input";
        document.getElementById("errorMessage").style.color = "red";
    } else {
        let ct = (parseInt(pt_ac) / 100) * parseInt(bl_ac);
        document.getElementById("tipAmount").value = ct;
        let ta = parseInt(bl_ac) + ct;
        document.getElementById("totalAmount").value = ta;
        document.getElementById("errorMessage").textContent = "";
    }
}