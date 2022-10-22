document.querySelector("button").addEventListener('click', message);

function message() {
  let num = document.querySelector("#num").value;

  let i = 1
  
  while (i <= 1000){
  document.write( num + " x " + i + " = " + (num * i) + "<br>");
  i++;
  }
}
