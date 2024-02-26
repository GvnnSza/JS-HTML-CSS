function verificar() {
    const anoAtual = new Date().getFullYear();
    const formularioAno = document.getElementById('txtano');
    const res = document.getElementById('res');
    const anoInserido = parseInt(formularioAno.value);

    if (!validarAno(anoInserido, anoAtual)) {
        return;
    }

    const genero = determinarGenero();
    const idade = calcularIdade(anoAtual, anoInserido);
    const imgSrc = determinarImagem(genero, idade);

    exibirResultado(res, genero, idade, imgSrc);
}

function validarAno(anoInserido, anoAtual) {
    if (isNaN(anoInserido) || anoInserido < 1900 || anoInserido > anoAtual) {
        window.alert('Por favor, insira um ano válido entre 1900 e o ano atual.');
        return false;
    }
    return true;
}

function determinarGenero() {
    const fsex = document.getElementsByName('radsex');
    return fsex[0].checked ? "Homem" : "Mulher";
}

function calcularIdade(anoAtual, anoInserido) {
    return anoAtual - anoInserido;
}

function determinarImagem(genero, idade) {
    if (genero === "Homem") {
        if (idade < 10) {
            return 'crianca-m.png';
        } else if (idade < 21) {
            return 'adolescente-m.png';
        } else if (idade < 50) {
            return 'adulto-m.png';
        } else {
            return 'idoso-m.png';
        }
    } else {
        if (idade < 10) {
            return 'crianca-f.png';
        } else if (idade < 21) {
            return 'adolescente-f.png';
        } else if (idade < 50) {
            return 'adulto-f.png';
        } else {
            return 'idoso-f.png';
        }
    }
}

function exibirResultado(res, genero, idade, imgSrc) {
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    const img = document.createElement('img');
    img.setAttribute('id', 'foto');
    img.setAttribute('src', imgSrc);
    res.appendChild(img);
}