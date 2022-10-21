document.querySelector("button").addEventListener("click", media);

function media() {
let n1 = parseFloat(prompt("Insira a primeira nota."));
let n2 = parseFloat(prompt("Agora, insira a segunda nota."));

const media = (n1 + n2) / 2;

if (media <= 5 || n1 === 0 || n2 ===0) {
    alert ("Não foi dessa vez. \nAluno reprovado.")
} else {
    alert("Parabéns, aluno aprovado!")
}

}