const formulario = document.getElementById('cadastro');
formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome_cad').value;
    const cpf = document.getElementById('CPF_cad').value;

    const novoUsuario = { nome, cpf };

    // Enviar os dados para o servidor via chamada HTTP (por exemplo, usando o método fetch)
    fetch('/api/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoUsuario),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Usuário salvo com sucesso:', data);
        // Você pode adicionar lógica para atualizar a interface aqui
    })
    .catch(error => {
        console.error('Erro ao salvar o usuário:', error);
    });
});
