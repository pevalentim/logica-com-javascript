document.querySelector("button").addEventListener("click", calc);

function calc() {
    let n1 = parseFloat(prompt("Digite um número."));
    let n2 = parseFloat(prompt("Digite outro número."));
    const resto = n1 % n2;
    const expo = n1 ** n2;
    alert("O resto da divisão de " + n1 + " por " + n2 + " é: " + resto);
    alert("O número " + n1 + " elevado à " + n2 + " é: " + expo);
}