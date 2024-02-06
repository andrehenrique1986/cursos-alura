let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//let numeroSecreto = 7;

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';


let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número de 1 a 10';


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}


function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com 
        ${tentativas} ${palavraTentativa} !`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 
    true);
}



{/*
// Desafio 1.1
function olaMundo(){
    console.log('Olá mundo');
}
*/}

{/*
// Desafio 1.2
function olaNome(nome){
    nome = "André";
    console.log(`Olá, ${nome}`);
}
*/}

{/*
// Desafio 1.3
function dobroNumero(numero){
    numero = parseInt(prompt('Digite um número'));
    let dobro = numero * 2;
    return alert (`O número ${numero} multiplicado por 2 é igual a ${dobro}`);
    
    
}
*/}

{/*
// Desafio 1.4
function mediaNumeros(numero1, numero2, numero3){
    numero1 = parseFloat(prompt('Digite o 1º número'));
    numero2 = parseFloat(prompt('Digite o 2º número'));
    numero3 = parseFloat(prompt('Digite o 3º número'));

    let media = (numero1 + numero2 + numero3)/3;
    return alert (`A média dos números digitados é igual a ${media.toFixed(1)}`);
}
*/}

{/*
// Desafio 1.5
function maiorNumero(n1, n2){
   n1 = parseInt(prompt("Digite o 1º número"));
   n2 = parseInt(prompt("Digite o 2º número"));

   n1 > n2 ? alert(`O maior número digitado é: ${n1}`) : alert(`O maior número digitado é: ${n2}`);
}
*/}

{/*
// Desafio 1.6
function quadradoDoNumero(numeroElevadoA2){
    numeroElevadoA2 = parseInt(prompt("Digite um número"));

    let resultado = numeroElevadoA2 * numeroElevadoA2;

    return alert (`O número ${numeroElevadoA2} elevado ao quadrado é igual a: ${resultado}`);

}
*/}


{/*
// Desafio 2.1
const calcularImc = (altura, peso) => {
    altura = parseFloat(prompt('Digite sua altura:'));
    peso = parseFloat(prompt('Digite o seu peso:'));
    let imc = peso / (altura * altura);
    parseFloat(imc);
    console.log(`Sua altura é: ${altura} m`);
    console.log(`Seu peso é: ${peso} kg`);
    console.log(`Seu IMC é: ${imc.toFixed(2)} kg/m²`);
}
*/}

{/*
// Desafio 2.2
const fatorialNumero = (numeroFatorial) => {
    
    numeroFatorial = parseInt(prompt("Digite um número para calcular o fatorial"));

    
        let fatorial = 1;

        for (let contador = 2; contador <= numeroFatorial; contador++){
            fatorial *= contador; 
        }
        
        
        alert(`O ${numeroFatorial}! é ${fatorial}.`);
        
}
*/}

{/*
// Desafio 2.3
const cotacaoDolar = (cotacaoEmReal) => {
    cotacaoEmReal = 4.8;
    let valorEmDolar = parseFloat(prompt("Digite o valor em Dolar:"));
    let cotacaoConvertidaEmReal = valorEmDolar * cotacaoEmReal;
    alert(`O valor de US$${valorEmDolar.toFixed(2)} convertido para Real é : R$${cotacaoConvertidaEmReal.toFixed(2)}`);
}
*/}

{/*
// Desafio 2.4
const areaPerimetroRetangular = (altura, largura) => {
    altura = parseFloat(prompt("Digite a altura: "));
    largura = parseFloat(prompt("Digite a altura: "));
    let areaRetangulo = altura * largura;
    let perimetroRetangulo = altura + altura + largura + largura;

    alert(`A área do retângulo é: ${areaRetangulo} m² e o O perímetro do retângulo é: ${perimetroRetangulo} m²`);

}
*/}

{/*
// Desafio 2.5
const perimetroCircular = (raio) => {
    raio = parseFloat(prompt("Digite o raio do círculo"));
    let pi = 3.14;
    let areaDoCirculo = pi * (raio * raio);
    let perimetroDoCirculo = 2 * pi * raio;
    parseFloat(areaDoCirculo);
    parseFloat(perimetroDoCirculo);
    alert(`A área do círculo é de ${areaDoCirculo.toFixed(2)} m² e o perímetro é de ${perimetroDoCirculo.toFixed(2)} m² `);
}
*/}

{/*
// Desafio 2.6
const tabuadaNumero = (numero) => {
    numero = parseInt(prompt("Digite um número"));

    for(i=0; i<=10; i++){
        let resultado = numero * i;
        console.log(`${numero} * ${i} = ${resultado}`);
    }
}
*/}





