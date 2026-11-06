const express = require("express");
const { db } = require("../databases/DatabaseContext");
const { requireAdmin } = require("../utils/adminAuth");

const routes = express.Router();

routes.get("/admin/estatisticas", requireAdmin, async (req, res) => {
    try {
        const [[usuarios]] = await db.execute("SELECT COUNT(*) AS total FROM users");
        const [[ongs]] = await db.execute("SELECT COUNT(*) AS total FROM ongs");
        const [[doacoes]] = await db.execute("SELECT COUNT(*) AS total, COALESCE(SUM(quantidade), 0) AS quantidade_total FROM doacoes");
        const [mensal] = await db.execute(`
            SELECT DATE_FORMAT(data_doacao, '%m/%Y') AS mes,
                   DATE_FORMAT(data_doacao, '%Y-%m') AS ordem,
                   COUNT(*) AS total
            FROM doacoes
            WHERE data_doacao >= DATE_SUB(CURDATE(), INTERVAL 5 MONTH)
            GROUP BY DATE_FORMAT(data_doacao, '%Y-%m'), DATE_FORMAT(data_doacao, '%m/%Y')
            ORDER BY ordem ASC
        `);
        const [status] = await db.execute(`
            SELECT COALESCE(NULLIF(status, ''), 'Não informado') AS status,
                   COUNT(*) AS total
            FROM doacoes
            GROUP BY COALESCE(NULLIF(status, ''), 'Não informado')
            ORDER BY total DESC
        `);

        res.json({
            message: "Success",
            data: {
                usuarios: Number(usuarios.total || 0),
                ongs: Number(ongs.total || 0),
                doacoes: Number(doacoes.total || 0),
                quantidadeDoada: Number(doacoes.quantidade_total || 0),
                mensal: mensal.map(item => ({ mes: item.mes, total: Number(item.total) })),
                status: status.map(item => ({ status: item.status, total: Number(item.total) }))
            }
        });
    } catch (error) {
        console.error("Erro ao carregar estatísticas administrativas:", error);
        res.status(500).json({ message: "Error", data: "Não foi possível carregar as estatísticas." });
    }
});

module.exports = routes;
