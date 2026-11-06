const crypto = require("crypto");

function getSecret() {
    return process.env.JWT_SECRET || "";
}

function createAdminToken(user) {
    const secret = getSecret();
    if (!secret) return null;

    const payload = {
        sub: user.id,
        role: String(user.tipo_usuario || "").toLowerCase(),
        exp: Math.floor(Date.now() / 1000) + (8 * 60 * 60)
    };
    const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
    const signature = crypto.createHmac("sha256", secret).update(encoded).digest("base64url");
    return `${encoded}.${signature}`;
}

function requireAdmin(req, res, next) {
    const secret = getSecret();
    if (!secret) {
        return res.status(503).json({ message: "Error", data: "Configure JWT_SECRET no arquivo .env para habilitar o painel administrativo." });
    }

    const authorization = req.headers.authorization || "";
    const token = authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
    const [encoded, receivedSignature] = token.split(".");

    if (!encoded || !receivedSignature) {
        return res.status(401).json({ message: "Error", data: "Acesso administrativo não autorizado." });
    }

    const expectedSignature = crypto.createHmac("sha256", secret).update(encoded).digest();
    let actualSignature;
    try {
        actualSignature = Buffer.from(receivedSignature, "base64url");
    } catch (_) {
        return res.status(401).json({ message: "Error", data: "Token inválido." });
    }

    if (actualSignature.length !== expectedSignature.length || !crypto.timingSafeEqual(actualSignature, expectedSignature)) {
        return res.status(401).json({ message: "Error", data: "Token inválido." });
    }

    let payload;
    try {
        payload = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8"));
    } catch (_) {
        return res.status(401).json({ message: "Error", data: "Token inválido." });
    }

    if (!payload.sub || payload.exp < Math.floor(Date.now() / 1000) || !["admin", "administrador"].includes(payload.role)) {
        return res.status(403).json({ message: "Error", data: "Acesso permitido somente a administradores." });
    }

    req.admin = payload;
    next();
}

module.exports = { createAdminToken, requireAdmin };
