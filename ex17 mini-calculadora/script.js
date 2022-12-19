let plus = document.querySelector("#plus");
let min = document.querySelector("#minus");
let output = document.querySelector("#output");

let num = parseInt(prompt("Insira um número."));
output.innerHTML = num;

plus.addEventListener("click", add);
function add() {
    let num2 = parseInt(prompt("Insira um número para adição."));
    let result = num + num2;
    output.innerHTML = num + " + " + num2 + " = " + result;
}

min.addEventListener("click", minus);
function minus() {
    let num2 = parseInt(prompt("Insira um número para subtração."));
    let result = num - num2;
    output.innerHTML = num + " - " + num2 + " = " + result;
}