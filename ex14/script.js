document.querySelector("#btn").addEventListener("click", calc);

function calc(){
  let result = document.querySelecto("#container");
  let y = 1004;
  
  while (y <= 2024) {
    result.innerHTML += y + "<br>" ;
    y += 4;
  }
}