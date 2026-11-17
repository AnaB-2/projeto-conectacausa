import { API_URL } from "./apiconfig.js";

// Mantém as ONGs que já estão no HTML e acrescenta as cadastradas no banco.
document.addEventListener("DOMContentLoaded", async () => {
    const selecaoOng = document.getElementById("seleOng");

    if (!selecaoOng) return;

    // Normaliza os nomes para evitar duplicidade por maiúsculas,
    // minúsculas, acentos ou espaços extras.
    const normalizarNome = (nome) => String(nome || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .replace(/\s+/g, " ")
        .toLocaleLowerCase("pt-BR");

    const nomesAdicionados = new Set(
        Array.from(selecaoOng.options)
            .map(opcao => normalizarNome(opcao.textContent))
            .filter(Boolean)
    );

    try {
        const resposta = await fetch(`${API_URL}/ongs`);

        if (!resposta.ok) {
            throw new Error(`A API respondeu com status ${resposta.status}.`);
        }

        const resultado = await resposta.json();
        const ongs = Array.isArray(resultado)
            ? resultado
            : Array.isArray(resultado.data)
                ? resultado.data
                : [];

        ongs.forEach(ong => {
            const nome = String(ong.nome_ong || ong.nome || "").trim();
            const nomeNormalizado = normalizarNome(nome);

            if (!nome || nomesAdicionados.has(nomeNormalizado)) return;

            const opcao = document.createElement("option");
            opcao.value = nome;
            opcao.textContent = nome;
            selecaoOng.appendChild(opcao);

            nomesAdicionados.add(nomeNormalizado);
        });
    } catch (erro) {
        console.error("Não foi possível carregar as ONGs cadastradas:", erro);
        // As opções antigas permanecem disponíveis mesmo se a API estiver fora do ar.
    }
});
