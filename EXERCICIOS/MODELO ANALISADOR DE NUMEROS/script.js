let numero = document.getElementById('fnumero')
let lista = document.getElementById('flista')
let resultado = document.getElementById('resultado')
let valores = []

function isNumber(numero) {
    if (Number(numero) >= 1 && Number(numero) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(numero, l) {
    if(l.indexOf(Number(numero)) != -1) { // ! INDICA QUE O VALOR NAO FOI ENCONTRADO NA LISTA
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumber(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''

    } else {

        alert("VALOR INVALIDO OU JA ENCONTRADO NA LISTA")
    }

    numero.value = ''
    numero.focus()
}

function finalizar () {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length;
        let Maior = valores[0]
        let Menor = valores[0]
        let soma = 0
        let media;

        for (let posicao in valores) {
            soma += valores[posicao]

            if (valores[posicao] > Maior)
                Maior = valores[posicao]

            if (valores[posicao] < Menor)
                Menor = valores[posicao]
        }

        media = soma / total

        //* Cria uma String com um total do conteudo a ser exibido

        resultado.innerHTML = `<p>Ao Total temos ${total} numeros Cadastrados</p>
        <p>O Maior valor informado é ${Maior}</p>
        <p>O Menor valor informado é ${Menor}</p>
        <p>Somando todos os valores temos ${total}</p>
        <p>A media dos valores digitados é ${media}</p>`

    }
}