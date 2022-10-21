document.querySelector("button").addEventListener("click", winner);

function winner() {
    let j1 = parseInt(prompt("Jogador 1 digite um número."));
    let j2 = parseInt(prompt("Jogador 2 digite um número."));

    if (j1 == j2) { // condição se os números forem iguais
        alert("É um empate.");
    }

    randomNum = parseInt(Math.random() * 2);

    if(randomNum == 0 && j1 < j2){ // o menor irá ganhar
        alert("Jogador 1 é o vencedor!");
    } else if (randomNum == 0 && j2 < j1) {
        alert("Jogador 2 é o vencedor!");
    }

    if(randomNum == 1 && j1 > j2){ // o maior irá ganhar
        alert("Jogador 1 é o vencedor!");
    } else if (randomNum == 1 && j2 > j1) {
        alert("Jogador 2 é o vencedor!");
    } 
}