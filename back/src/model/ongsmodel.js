const { db } = require("../databases/DatabaseContext.js");

const tableName = "ongs";

// Campos recebidos do formulário e seus nomes no MySQL
const campos = {
    nome: "nome_ong",
    cnpj: "cnpj",
    email: "email",
    telefone: "telefone",
    cep: "cep",
    cidade: "cidade",
    endereco: "endereco",
    numero: "numero",
    pix: "pix",
    descricao: "descricao"
};

async function Get() {
    const sql = `SELECT * FROM ${tableName} ORDER BY id`;
    const [result] = await db.execute(sql);

    return {
        message: "Success",
        data: result
    };
}

async function GetById(id) {
    const sql = `SELECT * FROM ${tableName} WHERE id = ?`;
    const [result] = await db.execute(sql, [id]);

    if (result.length === 0) {
        return {
            message: "Error",
            data: "ONG não encontrada."
        };
    }

    return {
        message: "Success",
        data: result[0]
    };
}

async function Post(payload) {
    if (!payload || typeof payload !== "object") {
        return {
            message: "Error",
            data: "Dados não informados."
        };
    }

    const usuario_id = Number(payload.usuario_id);

    if (!Number.isInteger(usuario_id) || usuario_id <= 0) {
        return {
            message: "Error",
            data: "Usuário não identificado. Faça login novamente."
        };
    }

    const camposObrigatorios = Object.keys(campos);

    for (const campo of camposObrigatorios) {
        if (
            payload[campo] === undefined ||
            payload[campo] === null ||
            String(payload[campo]).trim() === ""
        ) {
            return {
                message: "Error",
                data: `O campo ${campo} é obrigatório.`
            };
        }
    }

    const colunas = ["usuario_id"];
    const valores = [usuario_id];

    for (const [campoFormulario, campoBanco] of Object.entries(campos)) {
        colunas.push(campoBanco);
        valores.push(String(payload[campoFormulario]).trim());
    }

    const placeholders = colunas.map(() => "?").join(", ");

    const sql = `
        INSERT INTO ${tableName}
        (${colunas.join(", ")})
        VALUES (${placeholders})
    `;

    const [result] = await db.execute(sql, valores);

    return {
        message: "Success",
        data: {
            id: result.insertId
        }
    };
}

async function Put(payload, id) {
    if (!payload || typeof payload !== "object") {
        return {
            message: "Error",
            data: "Dados não informados."
        };
    }

    const camposRecebidos = Object.keys(campos)
        .filter(campo => payload[campo] !== undefined);

    if (camposRecebidos.length === 0) {
        return {
            message: "Error",
            data: "Nenhum campo válido foi informado."
        };
    }

    const sets = camposRecebidos.map(
        campo => `${campos[campo]} = ?`
    );

    const valores = camposRecebidos.map(
        campo => payload[campo]
    );

    valores.push(id);

    const sql = `
        UPDATE ${tableName}
        SET ${sets.join(", ")}
        WHERE id = ?
    `;

    const [result] = await db.execute(sql, valores);

    return {
        message: "Success",
        data: result
    };
}

async function Delete(id) {
    const sql = `DELETE FROM ${tableName} WHERE id = ?`;
    const [result] = await db.execute(sql, [id]);

    return {
        message: "Success",
        data: result
    };
}

function EndPointName() {
    return tableName;
}

module.exports = {
    Get,
    GetById,
    Post,
    Put,
    Delete,
    EndPointName
};