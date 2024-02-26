function carregar() {
    let nome = document.getElementById("nome").value;
    let mensagem = window.document.getElementById("mensagem");
    let imagem = window.document.getElementById("imagem")
    let agora = new Date();
    let hora = agora.getHours()
    //  let hora = 9
    let minutos = agora.getMinutes();
    let diaAtual = agora.getDay();
    let mesAtual = agora.getMonth() + 1;
    mensagem.innerHTML = `Olá, ${nome}! Agora são ${hora} hora${hora !== 1 ? 's' : ''} e ${minutos} minuto${minutos !== 1 ? 's' : ''} do dia ${diaAtual} e do mês ${mesAtual}`;

    if (hora <= 5) {
        // * BOA MADRUGADA
        imagem.src = "fotomadrugada.png"
        document.body.style.background = "#30273f"
        mensagem.innerHTML += ". Tenha uma ótima madrugada!";

    } else if (hora <= 12) {
        // * BOM DIA
        imagem.src = "fotomanha.png"
        document.body.style.background = "#fab983"
        mensagem.innerHTML += ". Tenha um bom dia!";

    } else if (hora <= 18) {
        // * BOA TARDE
        imagem.src = "fototarde.png"
        document.body.style.background = "#aa521a"
        mensagem.innerHTML += ". Tenha uma boa tarde!";

    } else {
        // * BOA NOITE
        imagem.src = "fotonoite.png"
        document.body.style.background = "#04283e"
        mensagem.innerHTML += ". Tenha uma boa noite!";
    }

    mensagem.style.opacity = 1; // Tornar a mensagem visível
}