const alertPlaceholder = document.getElementById('mensagens-erro')
const alert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper);
}

const meuForm = document.querySelector('form');
meuForm.addEventListener('submit', function(e) {

  e.preventDefault();
  e.stopPropagation();

  // Lê a cor digitada pelo usuário:
  const meuInputCor = document.querySelector('#input-cor');
  const valorInputCor = meuInputCor.value;

  // Aplica a cor ao background do body:
  const body = document.body;
  const corAnterior = body.style.backgroundColor;
  body.style.backgroundColor = valorInputCor;

  // Detecta erro na troca de cor:
  if (body.style.backgroundColor == corAnterior) {
    alert('A cor informada não é válida; utilize uma "Web Color".', 'danger');
  }

  return false;

});
