const API_ESTATISTICAS = "http://localhost:3650/admin/estatisticas";
let graficoMensal;
let graficoStatus;

function encerrarSessao() {
  sessionStorage.removeItem("usuarioLogado");
  sessionStorage.removeItem("tipoUsuario");
  sessionStorage.removeItem("tokenAdmin");
  window.location.href = "../loginAdm.html";
}

async function carregarEstatisticas() {
  const aviso = document.getElementById("aviso");
  const token = sessionStorage.getItem("tokenAdmin");
  const tipo = sessionStorage.getItem("tipoUsuario");

  if (tipo !== "admin" || !token) {
    encerrarSessao();
    return;
  }

  aviso.textContent = "Atualizando informações do banco de dados...";
  aviso.classList.remove("error");

  try {
    const resposta = await fetch(API_ESTATISTICAS, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const resultado = await resposta.json();

    if (resposta.status === 401 || resposta.status === 403) {
      aviso.textContent = "Sua sessão administrativa expirou. Entre novamente.";
      aviso.classList.add("error");
      sessionStorage.removeItem("tokenAdmin");
      setTimeout(encerrarSessao, 1200);
      return;
    }
    if (!resposta.ok || resultado.message !== "Success") {
      throw new Error(resultado.data || "Não foi possível carregar as estatísticas.");
    }

    const dados = resultado.data;
    document.getElementById("totalUsuarios").textContent = Number(dados.usuarios).toLocaleString("pt-BR");
    document.getElementById("totalOngs").textContent = Number(dados.ongs).toLocaleString("pt-BR");
    document.getElementById("totalDoacoes").textContent = Number(dados.doacoes).toLocaleString("pt-BR");
    document.getElementById("quantidadeDoada").textContent = Number(dados.quantidadeDoada).toLocaleString("pt-BR");

    if (graficoMensal) graficoMensal.destroy();
    graficoMensal = new Chart(document.getElementById("graficoMensal"), {
      type: "bar",
      data: {
        labels: dados.mensal.map(item => item.mes),
        datasets: [{ label: "Doações", data: dados.mensal.map(item => item.total), backgroundColor: "#8b5bd0", borderRadius: 8, maxBarThickness: 42 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, ticks: { precision: 0 }, grid: { color: "#f0edf4" } }, x: { grid: { display: false } } }
      }
    });

    if (graficoStatus) graficoStatus.destroy();
    const temStatus = dados.status.length > 0;
    document.getElementById("graficoStatus").hidden = !temStatus;
    document.getElementById("semStatus").hidden = temStatus;
    if (temStatus) {
      graficoStatus = new Chart(document.getElementById("graficoStatus"), {
        type: "doughnut",
        data: {
          labels: dados.status.map(item => item.status),
          datasets: [{ data: dados.status.map(item => item.total), backgroundColor: ["#7544c3", "#b28ae5", "#e4c9f5", "#6f9bd6", "#edb6cc", "#c8c1d2"], borderWidth: 3, borderColor: "#fff" }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom", labels: { usePointStyle: true, boxWidth: 8, padding: 16 } } } }
      });
    }

    aviso.textContent = "Informações atualizadas com sucesso.";
  } catch (erro) {
    console.error("Erro ao carregar estatísticas:", erro);
    aviso.textContent = `${erro.message} Confira se a API está ligada e se as tabelas estão configuradas.`;
    aviso.classList.add("error");
  }
}

document.getElementById("sair").addEventListener("click", encerrarSessao);
document.getElementById("atualizar").addEventListener("click", carregarEstatisticas);
document.getElementById("ano").textContent = new Date().getFullYear();
carregarEstatisticas();
