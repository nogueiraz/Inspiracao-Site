var pontuacaoModel = require("../models/pontuacaoModel");


function buscarPontuacao(req,res) {
    var receberPontuacao = req.body.receberPontuacao
    var idUsuario= req.body.usuarioId
    console.log(JSON.stringify(req.params))
    console.log(`Recuperando pontuacao em tempo real ${req} e ${receberPontuacao}`);

    pontuacaoModel.buscarPontuacao(receberPontuacao,idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a ultima pontuacao.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarPontuacao

}