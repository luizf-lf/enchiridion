window.addEventListener("load", starter);

function starter() {
  var inputPeso = document.querySelector("#inputPeso");
  inputPeso.addEventListener("keyup", calcularIMC);

  var inputAltura = document.querySelector("#inputAltura");
  inputAltura.addEventListener("keyup", calcularIMC);
}

//função que realiza o cálculo do IMC em si e define os valores no HMTL
function calcularIMC() {
  var wheight = document.querySelector("#inputPeso").value;
  var height = document.querySelector("#inputAltura").value;
  var imc = 0;

  if (height !== "" && wheight !== "") {
    imc = wheight / (height * height);
    document.getElementById("descIMC").innerHTML = indexarIMC(imc);
    document.getElementById("indiceIMC").innerHTML = imc.toPrecision(3);
  } else {
    document.getElementById("indiceIMC").innerHTML = "-";
    document.getElementById("descIMC").innerHTML =
      "Digite os valores acima para descobrir o seu IMC";
  }
}

//função que retorna a descrição classificada do IMC
function indexarIMC(imc) {
  var ret = "";

  if (imc < 18.5) {
    ret = "Abaixo do peso";
  } else if (imc > 18.5 && imc < 25) {
    ret = "Peso normal";
  } else if (imc >= 25 && imc <= 29.9) {
    ret = "Sobrepeso";
  } else if (imc >= 30 && imc <= 34.9) {
    ret = "Obesidade grau 1";
  } else if (imc >= 35 && imc <= 39.9) {
    ret = "Obesidade grau 2";
  } else if (imc >= 40) {
    ret = "Obesidade grau 3";
  }

  return ret;
}
