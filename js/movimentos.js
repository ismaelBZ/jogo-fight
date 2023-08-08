/*** Física ***/

// Posições
let posicaoInicial = 0;
let posicaoFinal;
let altura;
let posicaoDoPersonagem = posicaoInicial;

//Tempo
let tempoDeDeslocamento;
let tempoDeAceleracao = 1000;

// Movimentação
let velocidade = 10;
let aceleracao = 2;
let aceleraçãoDaGravidade = 9.8;

// Funcionalidade
let stop = true


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

  velocidade += aceleracao;

  if (event.keyCode == setaParaDireita) {
    posicaoDoPersonagem += velocidade;
  } else if ((event.keyCode = setaParaEsquerda)) {
    posicaoDoPersonagem -= velocidade;
  }

  personagemEsquerda.style.left = `${posicaoDoPersonagem}px`;
  
  console.log(velocidade);
  
}

function pararPersonagem() {

  velocidade = 10;
  aceleracao = 1;
  console.log(velocidade);

};
  

document.onkeydown = movimentarPersonagem;
document.onkeyup = pararPersonagem;

/** document.onkeyUp colocar uma variavel aqui para parar de executar a função setInterval
 * por exemplo let stop = true -- onkeydown stop = true if (stop) execute setINterval else break
 * onkeyup stop = false
 **/
