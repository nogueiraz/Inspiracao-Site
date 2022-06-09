var express = require("express");
var router = express.Router();

var muralController = require("../controllers/muralController");

router.get("/", function (req, res) {
    muralController.testar(req, res);
});

router.get("/publicar", function (req, res) {
    muralController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    muralController.listarPorUsuario(req, res);
});
router.get("/listar", function (req, res) {
    muralController.listar(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    muralController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    muralController.publicar(req, res);
});

router.put("/editar/:idmural", function (req, res) {
    muralController.editar(req, res);
});

router.delete("/deletar/:idpostIspiracao", function (req, res) {
    muralController.deletar(req, res);
});

module.exports = router;