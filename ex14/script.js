document.querySelector("#btn").addEventListener("click", calc);

function calc(){
  let result = document.querySelector("#container"); // resultado vai aparecer aqui
  let y = 1004; // ano inicial
  
  while (y <= 2024) {
    if(((y % 100) > 0) || ((y % 400) === 0)){ // critério para saber se o ano é bissexto
    result.innerHTML += y + "<br>" ;
  } else {
    result.innerHTML += "" ;
  }
  y += 4;
  }

};