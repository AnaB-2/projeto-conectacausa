const usuario = JSON.parse(
    sessionStorage.getItem('usuarioLogado')
);

// Verifica se existe usuário logado
if (!usuario) {
    location.href = './entrar.html';
} else {
    document.getElementById('nome').value = usuario.nome || '';
    document.getElementById('email').value = usuario.email || '';
    document.getElementById('telefone').value = usuario.telefone || '';
}

// Salvar alterações
document.getElementById('salvar').onclick = () => {
    const atual = {
        ...usuario,
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value
    };

    sessionStorage.setItem(
        'usuarioLogado',
        JSON.stringify(atual)
    );

    alert('Alterações salvas!');
};

// Alternar tema escuro
const tema = document.getElementById('tema');

tema.checked = localStorage.getItem('temaEscuro') === 'true';

document.body.classList.toggle(
    'tema-escuro',
    tema.checked
);

tema.onchange = () => {
    document.body.classList.toggle(
        'tema-escuro',
        tema.checked
    );

    localStorage.setItem(
        'temaEscuro',
        tema.checked
    );
};

// Sair da conta
document.getElementById('sair').onclick = () => {
    sessionStorage.clear();
    location.href = './entrar.html';
};
