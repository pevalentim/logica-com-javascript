document.querySelector("#btn").addEventListener("click", tabuada);

function tabuada(){
  const num = parseFloat(document.querySelector("#num").value);
  let result = document.querySelector("#container");
  let i = 1;
  
  while (i <= 100) {
    result.innerHTML += (num + " x " + i + " = " + (num * i) + "</br>");

    if((i % 10) === 0){
      result.innerHTML += "<hr>";
    }

    i++;
  }
}