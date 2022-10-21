document.querySelector('button').addEventListener('click', message);

function message() {
  let num = parseInt(prompt('Digite um número de 1 à 6.'));

  switch (num) {
    case 1:
      alert('Você escolheu 1.');
      break;
    case 2:
      alert('Você escolheu 2.');
      break;
    case 3:
      alert('Você escolheu 3.');
      break;
    case 4:
      alert('Você escolheu 4.');
      break;
    case 5:
      alert('Você escolheu 5.');
      break;
    case 6:
      alert('Você escolheu 6.');
      break;

    default:
      alert('Número inválido');
  }
}
