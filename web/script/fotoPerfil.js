/* Foto de perfil local por conta. Futuramente pode ser substituído pela API/MySQL. */
(() => {
    const usuarioAtual = () => {
        try { return JSON.parse(sessionStorage.getItem('usuarioLogado') || 'null'); }
        catch { return null; }
    };

    const chaveFoto = (usuario) => {
        const identificador = String(usuario?.email || usuario?.id || usuario?.nome || 'visitante').trim().toLowerCase();
        return 'fotoPerfilConectaCausa:' + identificador;
    };

    const fotoSalva = (usuario) => usuario ? localStorage.getItem(chaveFoto(usuario)) : null;

    function aplicarFoto() {
        const usuario = usuarioAtual();
        const foto = fotoSalva(usuario);
        const imgPerfil = document.getElementById('fotoPerfil');
        const imgMenu = document.getElementById('fotoMenuUsuario');
        const nomeMenu = document.getElementById('nomeMenuUsuario');

        if (imgPerfil && foto) imgPerfil.src = foto;
        if (imgMenu) {
            imgMenu.src = foto || './img/usuario-semfundo.png';
            imgMenu.alt = usuario?.nome ? `Foto de ${usuario.nome}` : 'Foto de perfil';
        }
        if (nomeMenu) nomeMenu.textContent = usuario?.nome || 'Meu perfil';
    }

    document.addEventListener('DOMContentLoaded', () => {
        aplicarFoto();
        const entrada = document.getElementById('arquivoFotoPerfil');
        const escolher = document.getElementById('escolherFoto');
        const alterar = document.getElementById('botaoAlterarFoto');
        if (!entrada) return;

        const abrirSeletor = () => entrada.click();
        escolher?.addEventListener('click', abrirSeletor);
        alterar?.addEventListener('click', abrirSeletor);

        entrada.addEventListener('change', () => {
            const arquivo = entrada.files && entrada.files[0];
            const usuario = usuarioAtual();
            if (!arquivo || !usuario) return;

            if (!['image/jpeg', 'image/png', 'image/webp'].includes(arquivo.type)) {
                alert('Escolha uma imagem JPG, PNG ou WEBP.');
                entrada.value = '';
                return;
            }
            if (arquivo.size > 8 * 1024 * 1024) {
                alert('A imagem deve ter até 8 MB. Escolha uma imagem menor.');
                entrada.value = '';
                return;
            }

            const leitor = new FileReader();
            leitor.onload = () => {
                const imagem = new Image();
                imagem.onload = () => {
                    // Reduz a imagem para não ocupar espaço excessivo no armazenamento local.
                    const max = 500;
                    const escala = Math.min(1, max / Math.max(imagem.width, imagem.height));
                    const canvas = document.createElement('canvas');
                    canvas.width = Math.max(1, Math.round(imagem.width * escala));
                    canvas.height = Math.max(1, Math.round(imagem.height * escala));
                    const contexto = canvas.getContext('2d');
                    contexto.drawImage(imagem, 0, 0, canvas.width, canvas.height);
                    const fotoCompactada = canvas.toDataURL('image/jpeg', 0.78);
                    try {
                        localStorage.setItem(chaveFoto(usuario), fotoCompactada);
                        aplicarFoto();
                        alert('Foto de perfil atualizada! Ela ficará salva neste navegador enquanto usamos a versão local.');
                    } catch (erro) {
                        alert('Não foi possível guardar esta imagem no navegador. Tente escolher uma foto menor.');
                    }
                    entrada.value = '';
                };
                imagem.onerror = () => alert('Não foi possível abrir essa imagem. Tente outra foto.');
                imagem.src = leitor.result;
            };
            leitor.readAsDataURL(arquivo);
        });
    });
})();
