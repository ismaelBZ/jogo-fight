/*** Física ***/

// Posições
let posicaoHorizontalInicial = 0;
let posicaoVerticalInicial = 35;
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
let larguraDoCenarioEmPx = window.getComputedStyle(cenario).getPropertyValue('width');
let larguraDoCenario = parseInt((larguraDoCenarioEmPx.slice(0, larguraDoCenarioEmPx.length - 2)));

//Personagem
const personagemEsquerda = document.getElementById("personagem-esquerda");
const larguraDoPersonagemEmPx = window.getComputedStyle(personagemEsquerda).getPropertyValue("width");
const larguraDoPersonagem = parseInt(larguraDoPersonagemEmPx.slice(0, larguraDoPersonagemEmPx.length - 2));
let posicaoHorizontalDoPersonagem = posicaoHorizontalInicial;
let posicaoVerticalDoPersonagem = posicaoVerticalInicial;

// let alturaPersonagemEsquerda = 300;

// Funcionalidade
let stop = true


function movimentarPersonagem(event) {

  velocidade += aceleracao;
  larguraDoCenarioEmPx = window.getComputedStyle(cenario).getPropertyValue('width');
  larguraDoCenario = parseInt((larguraDoCenarioEmPx.slice(0, larguraDoCenarioEmPx.length - 2)))

  if (event.keyCode == setaParaDireita && posicaoHorizontalDoPersonagem <= (larguraDoCenario - (1.15 * larguraDoPersonagem))) {
    posicaoHorizontalDoPersonagem += velocidade;
  } else if ((event.keyCode == setaParaEsquerda && posicaoHorizontalDoPersonagem >= (larguraDoPersonagem * 0.15))) {
    posicaoHorizontalDoPersonagem -= velocidade;
  } else if (event.keyCode == setaParaCima) {

    posicaoVerticalDoPersonagem = 230;
    

    ///* APLICAR VELOCIDADE NA SUBIDA *////
    /* setInterval(() => {
      
      if (posicaoVerticalDoPersonagem < 230) {
        posicaoVerticalDoPersonagem += 12; 
        personagemEsquerda.style.bottom = `${posicaoVerticalDoPersonagem}px`;
      } else {
        posicaoVerticalDoPersonagem = 230;
        personagemEsquerda.style.bottom = `${posicaoVerticalDoPersonagem}px`;
        return;
      }
      console.log(posicaoVerticalDoPersonagem);
    }, 30); */
    
    setInterval(() => {

      if (posicaoVerticalDoPersonagem <= posicaoVerticalInicial) {
        posicaoVerticalDoPersonagem = posicaoVerticalInicial ;
        personagemEsquerda.style.bottom = `${posicaoVerticalDoPersonagem}px`;
        return
      } else {
        posicaoVerticalDoPersonagem -= 7;
      }
      personagemEsquerda.style.bottom = `${posicaoVerticalDoPersonagem}px`;
    }, 100)  
  }

    personagemEsquerda.style.left = `${posicaoHorizontalDoPersonagem}px`;
}

//   setInterval(() => {
        
//     if (posicaoVerticalDoPersonagem <= posicaoVerticalInicial) {
//       posicaoVerticalDoPersonagem = posicaoVerticalInicial ;
//       personagemEsquerda.style.bottom = `${posicaoVerticalDoPersonagem}px`;
//       return
//     } else {
//       posicaoVerticalDoPersonagem -= 15;
//     }
//     personagemEsquerda.style.bottom = `${posicaoVerticalDoPersonagem}px`;
//   },1000)
// }

function pararPersonagem() {

  velocidade = 10;
  aceleracao = 2;

};
  

document.onkeydown = movimentarPersonagem;
document.onkeyup = pararPersonagem;

