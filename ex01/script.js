document.querySelector("button").addEventListener("click", function(){
    let name = prompt("Por favor, me diga seu nome!");
    if (name == null || name == ""){
        alert("Valor inválido!");
    } else {
        alert("Olá, " + name + "! Seja bem vindo!")
    }
})