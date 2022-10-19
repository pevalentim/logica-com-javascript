document.querySelector('button').addEventListener('click', conta);

function conta() {
  let escolha = parseInt(
    prompt(
      '1-Somar  2-Subtrair  3-Dividir  4-Multiplicar \n Escolha uma das opções acima.'
    )
  );

  switch (escolha) {
    case 1:
      {
        let n1 = parseFloat(
          prompt('Você escolheu soma! \n Insira primeiro número.')
        );
        let n2 = parseFloat(prompt('Agora, insira o segundo!'));
        const result = n1 + n2;
        alert(n1 + ' mais ' + n2 + ' é igual a ' + result);
      }
      break;

    case 2:
      {
        let n1 = parseFloat(
          prompt('Você escolheu subtração! \n Insira primeiro número.')
        );
        let n2 = parseFloat(prompt('Agora, insira o segundo!'));
        const result = n1 - n2;
        alert(n1 + ' menos ' + n2 + ' é igual a ' + result);
      }
      break;

      case 3:
        {
        let n1 = parseFloat(
          prompt('Você escolheu divisão! \n Insira primeiro número.')
        );
        let n2 = parseFloat(prompt('Agora, insira o segundo!'));
        const result = n1 / n2;
        alert(n1 + ' dividido por ' + n2 + ' é igual a ' + result);
        }
        break;

    case 4:
      {
      let n1 = parseFloat(
        prompt('Você escolheu multiplicação! \n Insira primeiro número.')
      );
      let n2 = parseFloat(prompt('Agora, insira o segundo!'));
      const result = n1 * n2;
      alert(n1 + ' multiplicado por ' + n2 + ' é igual a ' + result);
      }
      break;
      default:
        alert('Desculpa, ocorreu um erro');
  }
}

// let n1 = parseFloat(prompt("Insira primeiro número"));
// let n2 = parseFloat(prompt("Agora, insira o segundo!"));
// const soma = n1 + n2;
// alert("A soma desses dois números é " + soma);
