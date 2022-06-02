var database = require("../database/config");




function buscarPontuacao(receberPontuacao,idUsuario) {
    var instrução=`INSERT INTO pontuacao VALUES (NULL, ${receberPontuacao}, ${idUsuario})`
    return database.executar(instrução) 
}

module.exports = {
    buscarPontuacao
}
