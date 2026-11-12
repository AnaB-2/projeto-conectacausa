const botaoTema = document.getElementById("botao-tema");
const body = document.body;
// Verifica se existe uma preferência salva
if (localStorage.getItem("tema") === "escuro") {
    body.classList.add("tema-escuro");
    botaoTema.textContent = "☀️";
}

// Alterna entre tema claro e escuro
botaoTema.addEventListener("click", () => {
    body.classList.toggle("tema-escuro");
    const temaAtivo = body.classList.contains("tema-escuro")
        ? "escuro"
        : "claro";
    localStorage.setItem("tema", temaAtivo);
    botaoTema.textContent = temaAtivo === "escuro"
        ? "☀️"
        : "🌙";
});
// ATUALIZAÇÃO DO ANO DO RODAPÉ
document.getElementById("anoAtual").textContent =
    new Date().getFullYear();

// CADASTRO DE ONG
document.getElementById("formCadastro").addEventListener(
    "submit",
    async function(event) {
        event.preventDefault();
        let usuario;
        // Recupera o usuário logado
        try {
            usuario = JSON.parse(
                sessionStorage.getItem("usuarioLogado")
            );

        } catch (erro) {
            usuario = null;
        }

        // Verifica se existe um usuário autenticado
        if (!usuario || !usuario.id) {
            alert(
                "Não foi possível identificar seu usuário. Faça login novamente."
            );
            return;
        }

        // Captura os dados do formulário
        const dadosONG = {
            usuario_id: usuario.id,
            nome: document.getElementById("nome").value.trim(),
            cnpj: document.getElementById("cnpj").value.trim(),
            email: document.getElementById("email").value.trim(),
            telefone: document.getElementById("telefone").value.trim(),
            cep: document.getElementById("cep").value.trim(),
            cidade: document.getElementById("cidade").value.trim(),
            endereco: document.getElementById("endereco").value.trim(),
            numero: document.getElementById("numero").value,
            pix: document.getElementById("pix").value.trim(),
            descricao: document.getElementById("descricao").value.trim()
        };

        // Envia os dados para a API
        try {
            const resposta = await fetch(
                "http://localhost:3650/ongs",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dadosONG)
                }
            );
            const resultado = await resposta.json();

            // Verifica o resultado do cadastro
            if (!resposta.ok || resultado.message !== "Success") {
                alert(
                    "Não foi possível cadastrar a ONG: " +
                    (resultado.data || "Verifique os dados.")
                );
                return;
            }

            // Cadastro realizado
            alert("ONG cadastrada com sucesso!");
            document.getElementById("formCadastro").reset();
        } catch (erro) {
            console.error("Erro ao cadastrar ONG:", erro);
            alert(
                "Não foi possível conectar à API. Confira se o servidor está funcionando."
            );
        }
    }
);
