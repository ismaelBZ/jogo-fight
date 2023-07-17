// VARIÁVEIS DO HTML
const personagemEsquerda = document.getElementById("personagem-esquerda");
let posicaoPersonagemEsquerda = 0;

// TECLAS DE MOVIMENTAÇÃO
const setaDireita = 39;
const setaEsquerda = 37;

function movimentarPersonagemEsquerda(event) {
  if (event.keyCode == setaDireita) {
    posicaoPersonagemEsquerda += 50;
  } else if ((event.keyCode = setaEsquerda)) {
    posicaoPersonagemEsquerda -= 50;
  }
  personagemEsquerda.style.left = `${posicaoPersonagemEsquerda}px`;
}

document.onkeydown = movimentarPersonagemEsquerda;
