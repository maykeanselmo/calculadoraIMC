
function meuEscopo() {

    const container = document.querySelector('.container');
    const form = container.querySelector('.form');
    const display = container.querySelector('.display');
    let peso = form.querySelector('.peso');
    let altura = form.querySelector('.altura');

    function status(resultadoIMC) {
        if (resultadoIMC < 18.5) {
            return '(Abaixo do peso)';
        }
        else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
            return '(Peso normal)';
        }
        else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
            return '(Sobrepeso)';
        }
        else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) {
            return '(Obesidade grau 1)';
        }
        else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
            return '(Obesidade grau 2)';
        }
        else if (resultadoIMC >= 40) {
            return '(Obesidade grau 3)';
        }
    }

    function validacao(peso, altura, resultadoIMC) {


        if (isNaN(peso.value) === true || peso.value === '') {
            display.style.backgroundColor = 'red';
            display.innerHTML = `<p>Peso inválido</p`;
        }
        else if (isNaN(altura.value) === true || altura.value === '') {
            display.style.backgroundColor = 'red';
            display.innerHTML = `<p>Altura inválida</p`;
        }
        else {
            display.style.backgroundColor = 'green';
            display.innerHTML = `<p>Seu IMC é ${resultadoIMC.toFixed(2)} ${status(Math.ceil(resultadoIMC.toFixed(2)))}</p`;
        }
    }


    function calculaImc(peso, altura) {
        imc = peso.value / (altura.value * altura.value);
        return Number(imc);
    }

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const resultadoIMC = calculaImc(peso, altura);
        console.log(resultadoIMC.toFixed(2));
        validacao(peso, altura, resultadoIMC);
    }

    form.addEventListener('submit', recebeEventoForm);

};

meuEscopo();

