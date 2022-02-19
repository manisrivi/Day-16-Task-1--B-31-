let div = document.createElement("div");
div.className = "calculator container align-content-center";
div.id = "calculator";
document.getElementsByTagName("body")[0].appendChild(div);

var innerDiv = document.createElement("div");
innerDiv.className = "output";
div.appendChild(innerDiv);

var input = document.createElement("input");
input.className = "input col-12 rounded border ";
input.id = "output-screen";
input.value = "";
input.placeholder = "0";
innerDiv.appendChild(input);

var btn = document.createElement("button");
btn.className = "Clear col-3 btn btn-warning "
btn.id = "Clear";
btn.textContent = "CLR";
div.appendChild(btn);

var btn = document.createElement("button");
btn.value = "del";
btn.className = "del col-3 btn btn-warning"
btn.id = "del";
btn.textContent = "DEL"
div.appendChild(btn);

var btn = document.createElement("button");
btn.className = "operator col-3 btn btn-warning";
btn.value = ".";
btn.id = "dis.";
btn.textContent = ".";
div.appendChild(btn);

var btn = document.createElement("button");
btn.className = "operator col-3 btn btn-danger";
btn.id = "dis*";
btn.value = "*";
btn.textContent = "*";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis7";
btn.className = "dis7 col-3 btn btn-info"
btn.value = "7";
btn.textContent = "7";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis8";
btn.className = "dis8 col-3 btn btn-info"
btn.value = "8";
btn.textContent = "8";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis9";
btn.className = "dis9 col-3 btn btn-info"
btn.value = "9";
btn.textContent = "9";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis/";
btn.className = "operator col-3 btn btn-danger";
btn.value = "/";
btn.textContent = "/";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis4";
btn.value = "4";
btn.className = "dis4 col-3 btn btn-info"
btn.textContent = "4";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis5";
btn.value = "5";
btn.className = "dis5 col-3 btn btn-info"
btn.textContent = "5";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis6";
btn.value = "6";
btn.className = "dis6 col-3 btn btn-info"
btn.textContent = "6";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis-";
btn.className = "operator col-3 btn btn-danger"
btn.value = "-";
btn.textContent = "-";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis1";
btn.value = "1";
btn.className = "dis1 col-3 btn btn-info"
btn.textContent = "1";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis2";
btn.value = "2";
btn.className = "dis2 col-3 btn btn-info"
btn.textContent = "2";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis3";
btn.value = "3";
btn.className = "dis3 col-3 btn btn-info"
btn.textContent = "3";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis+";
btn.className = "operator col-3 btn btn-danger";
btn.value = "+";
btn.textContent = "+";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis0";
btn.value = "0";
btn.className = "dis0 col-3 btn btn-info"
btn.textContent = "0";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "dis00";
btn.value = "00";
btn.className = "dis00 col-3 btn btn-info"
btn.textContent = "00";
div.appendChild(btn);

var btn = document.createElement("button");
btn.id = "equal";
btn.className = "equal col-6 btn btn-success"
btn.textContent = "=";
div.appendChild(btn);


// On-click Function for special buttons 
document.getElementById("Clear").onclick = function () {clear()}
document.getElementById("del").onclick = function () {del()}
document.getElementById("equal").onclick = function() {equal()};
// On-click Function for normal buttons
document.getElementById("dis.").onclick = function() {dis('.')}
document.getElementById("dis*").onclick = function() {dis('*')}
document.getElementById("dis7").onclick = function() {dis('7')}
document.getElementById("dis8").onclick = function() {dis('8')}
document.getElementById("dis9").onclick = function() {dis('9')}
document.getElementById("dis/").onclick = function() {dis('/')}
document.getElementById("dis4").onclick = function() {dis('4')}
document.getElementById("dis5").onclick = function() {dis('5')}
document.getElementById("dis6").onclick = function() {dis('6')}
document.getElementById("dis-").onclick = function() {dis('-')}
document.getElementById("dis1").onclick = function() {dis('1')}
document.getElementById("dis2").onclick = function() {dis('2')}
document.getElementById("dis3").onclick = function() {dis('3')}
document.getElementById("dis+").onclick = function() {dis('+')}
document.getElementById("dis0").onclick = function() {dis('0')}
document.getElementById("dis00").onclick = function() {dis('00')} 

// Function Execute section
let outputScreen = document.getElementById("output-screen");
function dis(num) {
    outputScreen.value += num;
}
function equal(){
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch (err){
        alert("Invalid");
    }
}
function clear(){
    outputScreen.value = "";
}
function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

// Symbol or Number error function:
document.getElementById("output-screen").onkeypress = function typing(event){
    let show = document.getElementById("output-screen");
    if(event.key==="Enter"){
        (show.value==="") ? alert("Enter Numbers to CALCULATE"): equal();
    }
    else if(!(event.charCode>=48 && event.charCode<=57 || event.key==="+" || event.key==="-" || event.key==="/" || event.key==="*")){
        alert("type only numbers");
        event.preventDefault();
    }
}
