var nome
var peso
var altura
var imc

function calcular() {
    nome = document.querySelector('#nome').value;
    peso = document.querySelector('#peso').value;
    altura = document.querySelector('#altura').value;
    imc = (peso/(altura*altura)).toFixed(2);
}

