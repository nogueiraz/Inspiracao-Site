var database = require("../database/config");




function buscarPontuacao(receberPontuacao,idUsuario) {
    var instrução=`UPDATE pontuacao SET pontJogo= ${receberPontuacao} WHERE fk_usuario = ${idUsuario}`
    return database.executar(instrução)
}
function inserirPontuacao(idUsuario) {
    var instrução=`INSERT INTO pontuacao VALUES (NULL, 0, ${idUsuario})`
    return database.executar(instrução) 
}
module.exports = {
    buscarPontuacao,
    inserirPontuacao
}
