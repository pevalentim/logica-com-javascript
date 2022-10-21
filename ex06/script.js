document.querySelector("button").addEventListener("click", media);

function media() {
    let n1 = parseFloat(prompt("Insira a primeira nota."));
    let n2 = parseFloat(prompt("Insira a segunda nota."));
    const media = (n1 + n2) / 2;

    if (media >= 5) {
        alert("Parabéns, aluno aprovado!");
    } else {
        alert("Aluno reprovado.")
    }
}