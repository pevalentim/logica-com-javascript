document.querySelector("button").addEventListener("click", media);

function media() {
    let n1 = parseFloat(prompt("Digite um número."));
    let n2 = parseFloat(prompt("Você escolheu " + n1 + "\nAgora, digite outro número!"));
    const media = (n1 + n2) / 2;
    alert(media > 5);
}