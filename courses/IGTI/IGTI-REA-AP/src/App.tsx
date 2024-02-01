import React, { useEffect, useState } from 'react';

//importa o arquivo SASS de estilização.
import './global.scss';

function App() {
  //declaração dos estados
  const [imc, setImc] = useState(0);
  const [imcDesc, setImcDesc] = useState('');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  // o hook useEffect "monitora" as variáveis de altura e peso e muda o imc
  //  quando há alterações nessas variáveis.
  useEffect(() => {
    if (height !== 0 && weight !== 0) {
      setImc(weight / (height * height));
      switchImcDescription(imc);
    }
  }, [height, weight, imc]);

  // função que retorna a descrição do valor do imc
  function switchImcDescription(imc: number) {
    if (imc < 18.5) {
      setImcDesc('Abaixo do peso');
    } else if (imc > 18.5 && imc < 25) {
      setImcDesc('Peso normal');
    } else if (imc >= 25 && imc <= 29.9) {
      setImcDesc('Sobrepeso');
    } else if (imc >= 30 && imc <= 34.9) {
      setImcDesc('Obesidade grau 1');
    } else if (imc >= 35 && imc <= 39.9) {
      setImcDesc('Obesidade grau 2');
    } else if (imc >= 40) {
      setImcDesc('Obesidade grau 3');
    }
  }

  // retorna o HTML
  return (
    <div className="homeContainer">
      <h1>Calculadora IMC</h1>
      <p>Insira as informações para descobrir o seu IMC</p>

      <div className="formContainer">
        <label htmlFor="inputWeight">Peso (kg):</label>
        <input
          type="number"
          id="inputWeight"
          onChange={(e) => setWeight(Number(e.target.value))}
          placeholder="Insira seu peso. Ex.: 72"
        />
        <label htmlFor="inputHeight">Altura (m):</label>
        <input
          type="number"
          id="inputHeight"
          onChange={(e) => setHeight(Number(e.target.value))}
          placeholder="Insira sua altura em metros. Ex.: 1.7"
        />
      </div>

      <div className="result">
        <h2>
          Seu IMC é: <span>{isNaN(imc) ? 0 : imc.toPrecision(3)}</span>
        </h2>
        <p>{imcDesc}</p>
      </div>
    </div>
  );
}

export default App;
