/*** Física ***/

// Posições
let posicaoInicial = 0;
let posicaoFinal;
let altura;
let posicaoDoPersonagem = posicaoInicial;

//Tempo
let tempoDeDeslocamento;
let tempoDeAceleracao;

// Movimentação
let velocidade = 10;
let aceleracao = 1;
let aceleraçãoDaGravidade = 9.8;


const personagemEsquerda = document.getElementById("personagem-esquerda");
posicaoInicial = 0;
// let posicaoPersonagemEsquerdaVerticalInicial = 35;
// let alturaPersonagemEsquerda = 300;

// TECLAS DE MOVIMENTAÇÃO
const setaParaDireita = 39;
const setaParaEsquerda = 37;
const setaParaCima = 38;
const setaParaBaixo = 38;

function movimentarPersonagem(event) {
  console.log(event);
  // setInterval((aceleracao) => aceleracao += 1, 300)
  // if (event.keyCode == setaParaDireita) {
  //   posicaoDoPersonagem += velocidade * aceleracao;
  // } else if ((event.keyCode = setaParaEsquerda)) {
  //   posicaoDoPersonagem -= velocidade * aceleracao;
  // }
  // personagemEsquerda.style.left = `${posicaoDoPersonagem}px`;
}

document.keypress = movimentarPersonagem;
