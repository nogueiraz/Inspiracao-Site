var express = require("express");
var router = express.Router();

var pontuacaoController = require("../controllers/pontuacaoController");

router.post("/buscarPontuacao", function (req, res) {
    pontuacaoController.buscarPontuacao(req, res);
});


router.post("/inserirPontuacao", function (req, res) {
    pontuacaoController.inserirPontuacao(req, res);
});
module.exports = router;