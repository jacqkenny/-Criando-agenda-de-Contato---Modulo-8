const form = document.getElementById('form-contato');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.Value}</td)`;
    linha += `<td>${inputTelefoneContato.Value}</td)`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.Value = '';
    inputTelefoneContato.Value = '';
});