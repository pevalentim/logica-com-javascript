document.querySelector("#btn").addEventListener("click", calc);

function calc(){
  let result = document.querySelector("#container");
  let y = 1004;
  
  while (y <= 2024) {
    if(((y % 100) > 0) || ((y % 400) === 0)){
    result.innerHTML += y + "<br>" ;
  } else {
    result.innerHTML += "" ;
  }
  y += 4;
  }
};