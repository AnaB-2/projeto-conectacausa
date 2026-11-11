const Routes = require("express");
const myController = require("../controller/ongsControllers");

const routes = Routes();

const endPoint = `/${myController.EndPointName()}`;

routes.get(endPoint, async (req, res) => {
    try {
        const responseData = await myController.Get(req, res);
        res.status(200).json(responseData);
    } catch (error) {
        console.error("Erro ao listar ONGs:", error);
        res.status(500).json({
            message: "Error",
            data: "Erro ao consultar as ONGs."
        });
    }
});

routes.get(`${endPoint}/:id`, async (req, res) => {
    try {
        const responseData = await myController.GetById(req, res);

        if (responseData.message === "Error") {
            return res.status(404).json(responseData);
        }

        res.status(200).json(responseData);
    } catch (error) {
        console.error("Erro ao buscar ONG:", error);
        res.status(500).json({
            message: "Error",
            data: "Erro ao consultar a ONG."
        });
    }
});

routes.post(endPoint, async (req, res) => {
    try {
        const responseData = await myController.Post(req, res);

        if (responseData.message === "Error") {
            return res.status(400).json(responseData);
        }

        res.status(201).json(responseData);
    } catch (error) {
        console.error("Erro ao cadastrar ONG:", error);

        res.status(500).json({
            message: "Error",
            data: "Erro ao salvar a ONG no banco de dados."
        });
    }
});

routes.put(`${endPoint}/:id`, async (req, res) => {
    try {
        const responseData = await myController.Put(req, res);

        if (responseData.message === "Error") {
            return res.status(400).json(responseData);
        }

        res.status(200).json(responseData);
    } catch (error) {
        console.error("Erro ao atualizar ONG:", error);

        res.status(500).json({
            message: "Error",
            data: "Erro ao atualizar a ONG."
        });
    }
});

routes.delete(`${endPoint}/:id`, async (req, res) => {
    try {
        const responseData = await myController.Delete(req, res);

        res.status(200).json(responseData);
    } catch (error) {
        console.error("Erro ao excluir ONG:", error);

        res.status(500).json({
            message: "Error",
            data: "Erro ao excluir a ONG."
        });
    }
});

module.exports = routes;