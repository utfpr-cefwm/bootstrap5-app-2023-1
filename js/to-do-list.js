// Seleciona os elementos HTML de entrada e saída:
const botaoAdicionar = document.querySelector('#botao-adicionar');
const tarefas = document.querySelector('#tarefas');

botaoAdicionar.addEventListener("click", () => adicionaLinha())

function adicionaLinha() {

  // Cria conteúdo da linha nova:
  const linha = document.createElement('div');
  linha.classList.add('row');
  linha.classList.add('mt-2');
  linha.innerHTML = `
    <div class="col d-flex align-items-center">
      <input
        type="text"
        class="flex-grow-1 form-control"
        placeholder="Digite aqui a tarefa..."
      />
      <div class="form-check form-switch ms-2 me-1">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          style="width: 3em; height: 1.5em;"
        />
      </div>
      <button
        type="button"
        class="btn btn-danger text-center"
      >
        <i class="bi bi-trash-fill"></i>
      </button>
    </div>
  `;

  // Adiciona a linha nova ao DOM:
  tarefas.appendChild(linha);

  const botaoExcluir = linha.querySelector('button.btn.btn-danger.text-center');
  botaoExcluir.addEventListener("click", () => {
    tarefas.removeChild(linha);
  });

  const switchFinalizada = linha.querySelector('input[type="checkbox"]');
  /**
   * @type {HTMLInputElement}
   */
  const inputText = linha.querySelector('input[type="text"]');
  switchFinalizada.addEventListener("change", (event) => {
    inputText.disabled = event.target.checked;
  });

  // Foca o cursor no campo de texto recém adicionado (por questões de usabilidade):
  inputText.focus();

}

fetch('http://localhost:3000/evento', {
  method: 'GET',
}).then(
  res => res.json()
).then(obj => {
  const data = new Date(obj.data);
  console.log(data);
  console.log(data.getUTCDate());
  console.log(data.getUTCMonth() + 1);
  console.log(data.getUTCFullYear());
  console.log(data.getDate());
  console.log(data.getMonth() + 1);
  console.log(data.getFullYear());
  const msAteReveillon = data.getTime() - Date.now();
  console.log(msAteReveillon);
});
