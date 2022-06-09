// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

function descobrir() {

    var gols = ipt_gols.value
    var jogos = ipt_jogos.value
    var media = gols / jogos


    if (gols < 0) {
        alert('A quantidade de gols tem que ser maior que 0')
    } else if (jogos <= 0) {
        alert('Você não pode ter jogado nenhum jogo')
    } else if (gols > 100) {
        alert('Você é uma maquina de fazer gols?')
    } else if (media > 0.90) {
        resultado.innerHTML = `VOCÊ É O CR7!!!!!! SIIIIII com ${media.toFixed(1)} gols por jogo`
        img_jogador.src = 'css/cristiano-ronaldo-comemorando-gol-foto-twitter-juventus-1.jpg'
    } else if (media>0.73&& media<=0.90) {
        resultado.innerHTML = `VOCÊ É O MESSIII !!!!!! com ${media.toFixed(1)} gols por jogo`
        img_jogador.src = 'css/messicomemorando.jpeg'
    } else if (media>=0.5 && media<=0.73) {
        resultado.innerHTML = `VOCÊ É O HARRY KANE !!!!!! com ${media.toFixed(1)} gols por jogo`
        img_jogador.src = 'css/GettyImages-1319694910.jpg'
    }else if (media<0.5 ) {
        resultado.innerHTML = `VOCÊ É O LUANNN !!!!!! com ${media.toFixed(1)} gols por jogo`
        img_jogador.src = 'css/luan-meia-do-corinthians-comemora-gol-contra-o-sao-paulo-na-neo-quimica-arena-1620049082703_v2_4x3.jpg'
}
}