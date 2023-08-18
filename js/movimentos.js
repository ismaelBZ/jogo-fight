/*** Física ***/

// Posições
let posicaoInicial = 0;
let posicaoFinal;
let altura;

//Tempo
let tempoDeDeslocamento;
let tempoDeAceleracao = 1000;

// Movimentação
let velocidade = 10;
let aceleracao = 2;
let aceleraçãoDaGravidade = 9.8;

// Teclas de Movimentação
const setaParaDireita = 39;
const setaParaEsquerda = 37;
const setaParaCima = 38;
const setaParaBaixo = 40;

//Cenario
const cenario = document.querySelector(".tamanho-de-tela");
const larguraDoCenarioEmPx = window.getComputedStyle(cenario).getPropertyValue('width');
const larguraDoCenario = parseInt((larguraDoCenarioEmPx.slice(0, larguraDoCenarioEmPx.length - 2)));

//Personagem
const personagemEsquerda = document.getElementById("personagem-esquerda");
const larguraDoPersonagemEmPx = window.getComputedStyle(personagemEsquerda).getPropertyValue("width");
const larguraDoPersonagem = parseInt(larguraDoPersonagemEmPx.slice(0, larguraDoPersonagemEmPx.length - 2));
let posicaoDoPersonagem = posicaoInicial;
// let alturaPersonagemEsquerda = 300;

// Funcionalidade
let stop = true


function movimentarPersonagem(event) {

  velocidade += aceleracao;

  if (event.keyCode == setaParaDireita && posicaoDoPersonagem <= (larguraDoCenario - (1.15 * larguraDoPersonagem))) {
    posicaoDoPersonagem += velocidade;
  } else if ((event.keyCode == setaParaEsquerda && posicaoDoPersonagem >= (larguraDoPersonagem * 0.15))) {
    posicaoDoPersonagem -= velocidade;
  }

  personagemEsquerda.style.left = `${posicaoDoPersonagem}px`;
  console.log(posicaoDoPersonagem)
  // console.log(posicaoDoPersonagem + larguraDoPersonagem)
}

function pararPersonagem() {

  velocidade = 10;
  aceleracao = 2;

};
  

document.onkeydown = movimentarPersonagem;
document.onkeyup = pararPersonagem;

