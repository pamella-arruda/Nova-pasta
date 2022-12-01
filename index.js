const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

if (nome !== '' && altura !== '' && peso !== ''){
     
    const valorIMC = (peso / (altura * altura)).toFixed(2);

    let cassificacao = "";

    if(valorIMC < 18.5){ 
        classificacao = 'a baixo do peso.';
    }else if(valorIMC < 24.9){
        classificacao = 'com peso ideal. Parabéns!';
    }else if(valorIMC < 29.9){
        classificacao = 'com sobrepeso.';
    }else if(valorIMC < 34.9){
        classificacao = 'com obesidade moderada.';
    }else if(valorIMC < 39.9){
        classificacao = 'com obesidade severa.';
    }else if(valorIMC > 40){
        classificacao = 'com obesidade morbida. Cuidado!';
    }

    resultado.innerHTML = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}` 

}else {
    resultado.innerHTML = 'Preencha todos os campos!';
}
}
    
calcular.addEventListener('click', imc);
