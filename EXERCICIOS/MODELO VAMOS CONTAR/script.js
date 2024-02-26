function contar() {
    let inicio = window.document.getElementById('txtinicio');
    let fim = window.document.getElementById('txtfim');
    let passo = window.document.getElementById('txtpasso');
    let resultado = window.document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossivel Contar'
    } else {
        resultado.innerHTML = 'Contando <br>'

        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p <= 0) {
            window.alert('Passo Invalido! Considerando o valor sendoPASSO 1')
            p = 1;
        }

        if (i < f) {
            // * CONTAGEM CRESCENTE
            for (let c = i ; c <= f ; c += p) {
                resultado.innerHTML += `${c} \u{1F449}`
            }

        } else {
            // * CONTAGEM REGRESSIVA
            for (let c = i ; c >= f ; c -= p) {
                resultado.innerHTML += `${c} \u{1F449}`;
            }
        }
        resultado.innerHTML += '\u{1F3C1}'
    }
}