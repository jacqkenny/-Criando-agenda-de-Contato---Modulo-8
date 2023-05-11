const form = document.getElementById('form-contato');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.Value}</td)`;
    linha += `<td>${inputNumeroContato.Value}</td)`;
    linha += '</tr>';

    linhas+= linha;
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.Value= '';
    inputNúmeroContato.Value= '';
})