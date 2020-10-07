window.addEventListener('load', starter);

function starter() {
  var inputPeso = document.querySelector('#inputPeso');
  inputPeso.addEventListener('keyup', calcularIMC);

  var inputAltura = document.querySelector('#inputAltura');
  inputAltura.addEventListener('keyup', calcularIMC);
}

function calcularIMC() {
  var wheight = document.querySelector('#inputPeso').value;
  var height = document.querySelector('#inputAltura').value;
  var imc = 0;

  if (height !== '' && wheight !== '') {
    imc = wheight / (height * height);
    document.getElementById('output').innerHTML = imc.toPrecision(3);
  }
}

// Formula do IMC = Peso / Altura²

/* Indices:

Menos do que 18,5   Abaixo do peso
Entre 18,5 e 24,9	  Peso normal
Entre 25 e 29,9     Sobrepeso
Entre 30 e 34,9	    Obesidade grau 1
Entre 35 e 39,9	    Obesidade grau 2
Mais do que 40	    Obesidade grau 3

*/
