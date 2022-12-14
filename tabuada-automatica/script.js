document.querySelector("#btn").addEventListener("click", tabuada);

function tabuada(){
  const num = parseFloat(document.querySelector("#num").value);
  let result = document.querySelector("#output");
  let output = "";

  for (let i = 1; i <= 10; i++) {
    if(isNaN(num)){ // verifica se é um número válido
      output = "Insira um número";
    } else {
      output += (num + " x " + i + " = " + (num * i) + "</br>");
    }
  }

  result.innerHTML = output;
  
}