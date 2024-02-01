var valor1;
var valor2;
var valorFinal;
var operacaoAnterior;

function concatena (n) {
	document.getElementById("display_calc").innerHTML=parseFloat(document.getElementById("display_calc").innerHTML+n);
}

function operacao (oper) {
	if (oper==soma || oper==subtracao || oper==multiplicacao || oper==divisao) {
		valor1 = parseFloat(document.getElementById("display_calc").innerHTML);
		document.getElementById("display_calc").innerHTML="0";
		operacaoAnterior=oper;
	}
	
	if (oper==igual) {
		valor2 = parseFloat(document.getElementById("display_calc").innerHTML)
		
		if (operacaoAnterior==soma) {
			valorFinal=valor1+valor2;
			document.getElementById("display_calc").innerHTML=valorFinal;
		} else if (operacaoAnterior==subtracao) {
			valorFinal=valor1-valor2;
			document.getElementById("display_calc").innerHTML=valorFinal;
		} else if (operacaoAnterior==multiplicacao) {
			valorFinal=valor1*valor2;
			document.getElementById("display_calc").innerHTML=valorFinal;
		} else if (operacaoAnterior==divisao) {
			valorFinal=valor1/valor2;
			if (valor2=="0") {
				alert("Dividir por 0 irá resetar o universo. Não faça isso.");
				document.getElementById("display_calc").innerHTML="0";
			} else {
			document.getElementById("display_calc").innerHTML=valorFinal;
			}
		}
	}
}

function limparDisplay() {
	document.getElementById("display_calc").innerHTML="0";
}