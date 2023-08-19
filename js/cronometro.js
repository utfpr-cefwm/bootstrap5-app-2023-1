/*
  MÁQUINA DE ESTADOS:

  parado    ———[iniciar]——→  rodando   (( criar timer ))
  rodando   —————[tick]———→  rodando   (( cont += 100, atualizar view ))
  rodando   ————[pausar]——→  parado    (( destruir timer ))
  rodando   ——[reiniciar]—→  parado    (( destruir timer, cont = 0, atualizar view ))
  parado    ——[reiniciar]—→  parado    (( cont = 0, atualizar view ))

*/

// Seleciona os elementos de entrada e saída:
const botaoIniciar = document.querySelector('#botao-iniciar');
const botaoPausar = document.querySelector('#botao-pausar');
const botaoReiniciar = document.querySelector('#botao-reiniciar');
const output = document.querySelector('output');

// Inicializar os modelos da aplicação com os mesmos valores iniciais da view:
let cont = 0;

/**
 * @type {'parado' | 'rodando'}
 */
let estado = 'parado';

// Adiciona os event handlers:
botaoIniciar.addEventListener("click", () => executa('iniciar'));
botaoPausar.addEventListener("click", () => executa('pausar'));
botaoReiniciar.addEventListener("click", () => executa('reiniciar'));

/**
 *
 * @param {'iniciar' | 'pausar' | 'reiniciar' | 'tick'} acao
 */
function executa(acao) {

  switch(estado) {

    case 'parado':

      switch(acao) {
        case 'iniciar':
          estado = 'rodando';
          criarTimer();
          break;
        case 'reiniciar':
          cont = 0;
          atualizarView();
          break;
      }
      break;

    case 'rodando':

      switch(acao) {
        case 'pausar':
          estado = 'parado';
          destruirTimer();
          break;
        case 'reiniciar':
          estado = 'parado';
          destruirTimer();
          cont = 0;
          atualizarView();
          break;
        case 'tick':
          cont += 100;
          atualizarView();
          break;
      }
      break;

  }

}

let timer;
function criarTimer() {
  timer = setInterval(() => executa('tick'), 100);
}

function destruirTimer() {
  clearInterval(timer);
}

function atualizarView() {
  output.innerHTML = `${(cont / 1000).toFixed(1)}s`.replace('.', ',');
}
