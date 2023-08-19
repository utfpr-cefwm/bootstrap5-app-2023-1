/*
CONTADOR:
1.  Inicializar a contagem com 0.
    → Na view (HTML) já começa com 0.
    → Inicializar o model ("memória RAM").
*/
let cont = 0;

/*
2.  Detectar cliques nos botões de contagem.
*/
const botaoMais = document.querySelector('#botao-mais');
const botaoMenos = document.querySelector('#botao-menos');

botaoMais.addEventListener("click", () => soma(+1));
botaoMenos.addEventListener("click", () => soma(-1));

function soma(qtde) {
  /*
    2.1.  Somar +1 ou -1 dependendo do botão clicado.
  */
  cont += qtde;

  /*
    2.2.  Exibir a contagem atual no <output>. → Atualizar VIEW!
  */
  const output = document.querySelector('output');
  output.innerHTML = cont;

  /*
    2.3.  Adicionar ou remover classes contextuais do Bootstrap, de acordo com o valor atual.
          - Apenas text-success se contagem > 0.
          - Apenas text-danger se contagem < 0.
          - Nenhuma caso a contagem seja === 0.
  */
  if (cont > 0) {
    output.classList.add('text-success');
  } else if (cont == 0) {
    output.classList.remove('text-success');
    output.classList.remove('text-danger');
  } else {
    output.classList.add('text-danger');
  }

}
