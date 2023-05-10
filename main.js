const form = document.getElementById('form-contato');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNúmeroContato = document.getElementById('número-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.Value}</td)`;
    linha += `<td>${inputNúmeroContato.Value}</td)`;
    linha += '</tr>';

    linhas+= linha;
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.Value= '';
    inputNúmeroContato.Value= '';
})