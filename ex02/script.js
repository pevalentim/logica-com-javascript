document.querySelector("button").addEventListener("click", function(){
    let n1 = parseFloat(prompt("Insira primeiro número"));
    let n2 = parseFloat(prompt("Agora, insira o segundo!"));
    const soma = n1 + n2;
    alert("A soma desses dois números é " + soma);
}
)