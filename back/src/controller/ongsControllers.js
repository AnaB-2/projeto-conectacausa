const myModel = require("../model/ongsmodel");

async function Get(req, res) {
    return await myModel.Get();
}

async function GetById(req, res) {
    const id = req.params.id;
    return await myModel.GetById(id);
}

async function Post(req, res) {
    const payload = req.body;
    return await myModel.Post(payload);
}

async function Put(req, res) {
    const id = req.params.id;
    const payload = req.body;

    return await myModel.Put(payload, id);
}

async function Delete(req, res) {
    const id = req.params.id;
    return await myModel.Delete(id);
}

function EndPointName() {
    return myModel.EndPointName();
}

module.exports = {
    Get,
    GetById,
    Post,
    Put,
    Delete,
    EndPointName
};